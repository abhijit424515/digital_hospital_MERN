import React from "react";

export default function MedicalRecord(props) {
  // console.log(props)
  return (
    <>
      <tr>
        <td>{props.prescription}</td>
        <td>
          {
            // console.log(props.medicinesPrescribed[0])
            props.medicinesPrescribed.map((x) => {
              toString(
                x.name +
                ": " +
                toString(x.quantity) +
                ", "
              )
              // console.log(x.name)
            })
        }
        </td>
      </tr>
    </>
  );
}
