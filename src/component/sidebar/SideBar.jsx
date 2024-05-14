import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faChartSimple, faDollarSign, faGauge, faUserGroup, faUserSecret } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {

  return (
    <div className=' flex flex-col w-52 h-screen  ' style={{ background: '#2f3056' }}>
    
      {/* images of the app */}
      <NavLink to='/' className='h-auto w-full mb-1'>
           <div className=' h-28 text-7xl flex justify-center items-center text-white font-bold' style={{background:"#1165C7"}}>HR</div>
      </NavLink>

      {/*List of link pages*/}
      <NavLink to='/' className='menuItem' activeClassName='active'>
        <FontAwesomeIcon className='w-9' icon={faGauge}></FontAwesomeIcon> Dashboard</NavLink>

      <NavLink to='/employee' className='menuItem' activeClassName='active'>
        <FontAwesomeIcon className='w-9' icon={faUserGroup}></FontAwesomeIcon> Employee</NavLink>

      <NavLink to='/payroll' className='menuItem' activeClassName='active'>
        <FontAwesomeIcon className='w-9' icon={faDollarSign}></FontAwesomeIcon> Payroll</NavLink>

      <NavLink to='/notification' className='menuItem' activeClassName='active'>
        <FontAwesomeIcon className='w-9' icon={faBell}></FontAwesomeIcon> Notification</NavLink>

      <NavLink to='/statistical' className='menuItem' activeClassName='active'>
        <FontAwesomeIcon className='w-9' icon={faChartSimple}></FontAwesomeIcon> Statistical</NavLink>

      <NavLink to='/management' className='menuItem' activeClassName='active'>
        <FontAwesomeIcon className='w-9' icon={faUserSecret}></FontAwesomeIcon> Managerment</NavLink>
    </div>
  )
}

export default SideBar