import React, { useState, useEffect } from 'react';
import Table from '../../component/dataTable/statistical/Table'; 
const App = () => {
  const [vacationData, setVacationData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/vacation') 
      .then(response => response.json())
      .then(data => setVacationData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Khi component được mount lên, fetch dữ liệu

  // Định nghĩa cột cho bảng dữ liệu nghỉ phép
  const vacationColumns = [
    { key: 'id', header: 'ID' },
    { key: 'Department', header: 'Department' },
    { key: 'ShareholderStatus', header: 'Shareholder Status' },
    { key: 'Gender', header: 'Gender' },
    { key: 'Ethnicity', header: 'Ethnicity' },
    { key: 'EmploymentType', header: 'Employment Type' },
    { key: 'CurrentYearVacationDays', header: 'Current Year Vacation Days' },
    { key: 'PreviousYearVacationDays', header: 'Previous Year Vacation Days' }
  ];


  const [BenefitData, setBenefitData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3003/Benefit') // Đường dẫn API của bạn
      .then(response => response.json())
      .then(data => setBenefitData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Khi component được mount lên, fetch dữ liệu

  // Định nghĩa cột cho bảng dữ liệu thu nhap
  const BenefitColumns = [
    { key: 'id', header: 'STT' },
    { key: 'BenefitPlan', header: 'BenefitPlan' },
    { key: 'ShareholderStatus', header: 'Shareholder Status' },
    { key: 'AverageBenefit', header: 'AverageBenefit' },
  ];

  return (
    <div className='m-3'>
      <div className='text-3xl font-bold '>Statistical</div>
      <div className=' m-3 mt-5'>
        <h1>Vacation Table</h1>
        <Table data={vacationData} columns={vacationColumns} />
        <div className=' mt-14'></div>
        <h1>Benefit Table</h1>
        <Table data={BenefitData} columns={BenefitColumns} />
      </div>
    </div>
  );
};

export default App;
