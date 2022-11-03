import React from "react";
import data from "./LabReportData";
import LabReportRecord from "./LabReportRecord";

function fun(entry) {
    return (
        <LabReportRecord key={entry.id} title={entry.title} link={entry.link} timeStamp={entry.timeStamp} />
    )
}

export default function LabReportHistory() {
//   console.log(data);

//   {data.map((entry) => {
//     <MedicalRecord id={entry.id} prescription={entry.prescription}  />;
//   })}

  return (
    <div>
      <table className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <thead className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">1</th>
            <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">2</th>
            <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">3</th>
          </tr>
        </thead>
        <tbody className="border-b border-gray-200 dark:border-gray-700">
          {data.map(fun)}
        </tbody>
      </table>
    </div>
  );
}
