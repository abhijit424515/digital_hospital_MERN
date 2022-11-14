import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Table(props) {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
  )
}
