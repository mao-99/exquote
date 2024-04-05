import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './index';
import Table from './table';
import Chart from "./chart";
import { Outlet } from 'react-router-dom';
//import Header from './components/header'

function Layout() {
  return (
    <>
    <div className='body'>
      <Index/>
      <Table/>
    </div>
    </>
  )
}

export default Layout