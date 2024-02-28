import { useEffect, useState } from "react";
import JobContainer from "../components/JobContainer";
import { jsonData } from "../data/data";

const JobPages = () => {

  const [filteredItems, setFilteredItems] = useState(jsonData);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const pageButtonStyle = (page) => {
    return currentPage == page ? 
      "mx-1 px-6 py-4 rounded shadow text-white bg-cyan-dark font-bold" :
      "mx-1 px-6 py-4 rounded shadow text-blue-500 bg-white"
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [filterList, setFilterList] = useState([]);

  const handleClickFilter = (filter) => {
    if (!filterList.includes(filter)) {
      setFilterList([...filterList, filter]);
    }
    setCurrentPage(1);
  }

  function resetFilter() {
    setFilterList([]);
  }

  function removeFilter(filterToRemove) {
    const updatedFilterList = filterList.filter(filter => filter !== filterToRemove);
    setFilterList(updatedFilterList);
  }

  useEffect(() => {
    const filtered = jsonData.filter(job =>
      filterList.every(
        (filter) =>
          job.role === filter || 
          job.level === filter || 
          job.languages.includes(filter)
        )
    );
    setFilteredItems(filtered);
  }, [filterList])

    return (
        <div>
          
          <main className="bg-cyan-light min-h-[80vh] pb-8 px-6">
            <main className="bg-cyan-light min-h-[80vh] pb-8 px-6">
                <div className="max-w-5xl m-auto relative -top-8 ">
                    <div className="w-full max-w-5xl min-h-[4rem] mb-10">
                      {filterList.length > 0 && (
                        <div className="bg-white rounded-md px-7 py-4 w-full shadow-lg flex justify-between">
                            <ul className="flex flex-wrap gap-4">
                                {filterList.map((item, index) => (
                                  <li className="flex">
                                      <label className="bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-l-md cursor-default" style={{ alignSelf: "center" }}>
                                          {item}
                                      </label>
                                      <div>
                                        <button class="bg-cyan-dark h-full flex items-center p-2 rounded-r-md hover:bg-cyan-very-dark" onClick={() => removeFilter(item)}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"></path></svg>
                                        </button>
                                      </div>
                                  </li>
                                ))}
                            </ul>
                            <button className="text-sm text-cyan-dark font-bold underline" onClick={resetFilter}>
                                Clear
                            </button>
                        </div>
                      )}
                    </div>
                    <div>
                          {currentItems.map((job, index) => (
                            <JobContainer
                              key={index}
                              id = {job.id}
                              logo = {job.logo}
                              company = {job.company}
                              isNew = {job.new}
                              isFeatured = {job.featured}
                              position = {job.position}
                              role={job.role}
                              level={job.level}
                              postedAt={job.postedAt}
                              contract={job.contract}
                              location={job.location}
                              languages={job.languages}
                              onClick = {handleClickFilter}
                            />
                          ))}
                        
                    </div>
                    <nav className="mt-4">
                        <ul className="flex justify-center">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <li key={index}>
                                  <button className={pageButtonStyle(index + 1)}
                                  onClick={() => paginate(index + 1)}>
                                    {index + 1}
                                  </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </main>
          </main>
        </div>
    );
};

export default JobPages;
