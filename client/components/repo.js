import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/scss/main.scss'

const Repo = (props) => {
  const [search, setSearch] = useState('')
  const filtered = props.userRepo.filter((el) => el.name.includes(search))
  return (
    <div className="">
      <div className="text-right">
        <span className="text-xl text-gray-500 mr-1 ">Search :</span>
        <input
          type="text"
          className="bg-indigo-600 border rounded mt-4 "
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex justify-around flex-wrap mt-20">
        {filtered.map((el) => (
          <Link to={`/${props.userName}/${el.name}`}>
            <div
              className="text-2xl w-64 rounded-full text-center text-indigo-600 ml-3 border border-8 border-teal-300 p-4 my-20 hover:bg-indigo-600 hover:text-white "
              key={el.id}
            >
              {el.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Repo
