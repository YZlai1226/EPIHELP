/* eslint-disable max-len */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {

  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  function handleSubmit() {
    navigate('/searchresults', { state: { category: category, query: query } })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <div className="col-span-6 sm:col-span-3">
          {/* <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Category
                    </label> */}
          {/* <p>Cat: {props.categoryId}</p>
                    <p>User: {user._id}</p> */}
          <select
            id="category"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            autoComplete="category"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
          >
            <option value='all'>All categories</option>
            <option value='629661c6a3a87f9f730c9b02'>Software development</option>
            <option value='62966202a3a87f9f730c9b03'>Web development</option>
            <option value='62966272a3a87f9f730c9b04'>Security/Hacking</option>
            <option value='6298863eb4671f842c0d7892'>Data/AI</option>
            <option value='62988671b4671f842c0d7893'>Hardware</option>
            <option value='6298874fb4671f842c0d7894'>Job and Internship search</option>
            <option value='62988856b4671f842c0d7895'>Entrepreneurship</option>
            <option value='62988918b4671f842c0d7896'>Student life</option>
            <option value='62988fcab4671f842c0d7897'>General discussion</option>
          </select>
        </div>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for an answer from the Epihelp community"
          /* required="" */
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-900 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              >
              </path>
            </svg>
          </button>
        </div>
      </div>
    </form>
  )
}
export default SearchBar