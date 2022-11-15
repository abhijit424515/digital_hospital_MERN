import React from 'react'
import { useMediaQuery } from 'react-responsive';

export default function Table(props) {
  const isMobile = useMediaQuery({ query: `(max-device-aspect-ratio: 1/1)` });

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        {
          (props.dropdown) ? 
          (
            <div className="dropdown">
              <button className="my-1 btn btn-primary dropdown-toggle bg-[#0d6efd]" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filters
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {
                  Object.keys(props.dropdown).map(i => (
                    <a className="dropdown-item" key={i} href={i}>{props.dropdown[i]}</a>
                  ))
                }
              </div>
            </div>
          )
          :
          (<></>)
        }
        <div className={isMobile ? 'max-x-[100vw] overflow-x-scroll text-[3vw]': 'max-x-[100vw] overflow-x-scroll text-[2vh]'}>
          {/* <table className="w-full text-left text-gray-500 dark:text-gray-400 whitespace-nowrap"> */}
          <table className="w-full text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      {props.headers.map((item) => (<th key={item} scope="col" className="py-3 px-6">{item}</th>))}
                  </tr>
              </thead>
              <tbody>
              {
                props.data.map(row => (
                  <tr key={row} className="bg-dark border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          {row.map((item) => (<td key={item} className="text-white py-4 px-6">{item}</td>))}
                      </tr>
                  ))
                }
              </tbody>
          </table>
        </div>
    </div>
  )
}
