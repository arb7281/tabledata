import React from 'react';
import { useSelector } from 'react-redux';
import './FormTable.css'

const FormTable = () => {
  const formDataList = useSelector((state) => state.table.formDataList);

  if(!formDataList){
    return (
        <div>data is not available</div>
    )
  }

  return (
    <div className="form-table-container">
      <h2>Added Data:</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Rating</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {formDataList.map((formData, index) => (
            <tr key={index}>
              <td>{formData.name}</td>
              <td>{formData.email}</td>
              <td>{formData.rating}</td>
              <td>{formData.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormTable;