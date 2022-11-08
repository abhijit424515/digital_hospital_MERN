import React from "react";

export default function LabReportRecord(props) {
  // console.log(props)
  return (
    <>
      <tr>
        <td>{props.prescription}</td>
        <td>
          {
            // console.log(props.medicinesPrescribed[0])
            props.medicinesPrescribed.map((x) => {
              return(
                  x.name +
                  ": " +
                  x.quantity +
                  ", "
              )
            })
        }
        </td>
      </tr>
    </>
  );
}
