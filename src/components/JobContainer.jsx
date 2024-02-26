import React from "react";
import FilterButton from "./FilterButton";
import { Link } from "react-router-dom";

const JobContainer = ({id, logo, company, isNew, isFeatured, position, role, level, postedAt, contract, location, languages, onClick}) => {
    return (
        <li
            className={`relative bg-white p-7 rounded-md flex items-center gap-6 shadow-lg mb-12 lg:mb-6`}
        >
            <div className="absolute -top-7 w-14 lg:relative lg:w-auto lg:top-0">
                <img
                    src={logo}
                    alt={company + "Logo"}
                    className="rounded-full w-full"
                />
            </div>
            <div className="w-full lg:flex justify-between items-center">
                <div>
                    <div>
                        <span className="text-sm text-cyan-dark font-bold">
                            {company}
                        </span>
                        {isNew && (
                            <span className="bg-cyan-dark px-2 py-1 rounded-xl ml-2 text-xs text-white font-bold">
                                NEW!
                            </span>
                        )}
                        {isFeatured && (
                            <span className="bg-cyan-very-dark px-2 py-1 rounded-xl ml-2 text-xs text-white font-bold">
                            FEATURED
                        </span>
                        )}
                        
                    </div>
                    <Link to={`/job-list/${id}`}>
                        <p
                            className="block my-1 text-base font-bold hover:text-cyan-dark"
                        >
                            {position}
                        </p>
                    </Link>
                    
                    <ul className="flex text-cyan-dark-grayish gap-4 text-sm font-medium">
                        <li>{postedAt}</li>
                        <li className="before:content-['•'] before:mr-3 after:content-['•'] after:ml-3">
                            {contract}
                        </li>
                        <li>{location}</li>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-wrap gap-4 border-t border-cyan-dark-grayish mt-4 pt-4 lg:border-0">
                        {/* <li>
                            <button onClick={FilterButton({role})}>
                                <label class="bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-l-md  hover:bg-cyan-dark hover:text-white rounded-r-md cursor-pointer">
                                    {role}
                                </label>
                            </button>
                        </li> */}

                        <li>
                            <FilterButton 
                                filter={role}
                                onClick={onClick}
                            />
                        </li>

                        <li>
                            <FilterButton 
                                filter={level}
                                onClick={onClick}
                            />
                        </li>

                        {languages.map((item, index) => (
                            <li key={index}>
                                <FilterButton 
                                    filter={item}
                                    onClick={onClick}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    );
};

export default JobContainer