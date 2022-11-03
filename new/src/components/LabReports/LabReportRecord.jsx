import React from "react";

export default function LabReportRecord(props) {
  // console.log(props)
  return (
    <>
      <tr className="border-b border-gray-200 dark:border-gray-700">
        <td className="py-4 px-6">{props.title}</td>
        <td className="py-4 px-6">{props.link}</td>
        <td className="py-4 px-6">{props.timeStamp}</td>
      </tr>
    </>
  );
}
