import React from "react";
import data from "./MedicalData";
import MedicalRecord from "./MedicalRecord";

function fun(entry) {
    return (
        <MedicalRecord key={entry.id} prescription={entry.prescription} medicinesPrescribed={entry.medicinesPrescribed} />
    )
}

export default function MedicalHistory() {
//   console.log(data);

//   {data.map((entry) => {
//     <MedicalRecord id={entry.id} prescription={entry.prescription}  />;
//   })}

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </tr>
        </thead>
        <tbody>
          {data.map(fun)}
        </tbody>
      </table>
    </div>
  );
}