import React, { useState, useEffect } from 'react';
import Option from '../../component/DashboardOption/Option';
import PieChartComponent from "../../component/chart/dashboard/PieChart";
import BarChartComponent from "../../component/chart/dashboard/BarChart";

const Home = () => {
  const [departmentData, setDepartmentData] = useState([]);
  const [departmentVacationData, setDepartmentVacationData] = useState([]);

  useEffect(() => {
    try {
      fetch('http://localhost:8081/dashboard')
      .then(response => response.json()) // Parse the JSON data here
      .then(data => {
        setDepartmentData(data.dash_board_department);
        setDepartmentVacationData(data.dash_board_department_vacation);
      })
      .catch(error => {
        console.error('Lỗi khi gửi yêu cầu: ', error);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  

  return (
    <div className='w-full pb-6' style={{background:"#f2f4f6"}}>
      <div className='flex w-full h-9 mb-1'>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
        <p className='h-full pt-3 pl-1' style={{color: 'rgb(178, 190, 201)'}}>Control panel</p>
      </div>
      <div className='bg-white m-3 p-5 rounded-xl'>
        <Option></Option>
        <div className='flex justify-between mx-5 mt-3'>
          {/* Sử dụng dữ liệu departmentData để vẽ piechart */}
          <PieChartComponent data={departmentData} /> 
          {/* Sử dụng dữ liệu departmentVacationData để vẽ barchart */}
          <BarChartComponent data={departmentVacationData} /> 
        </div>
      </div>
    </div>
  )
}

export default Home;
