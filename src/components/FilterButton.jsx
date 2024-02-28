import React from 'react'

const FilterButton = ({filter, onClick}) => {
  return (
    <button onClick = {() => onClick(filter)}>
        <label className="bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-l-md  hover:bg-cyan-dark hover:text-white rounded-r-md cursor-pointer">
            {filter}
        </label>
    </button>
  )
}

export default FilterButton