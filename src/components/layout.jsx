import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Index from './index';
import Table from './table';
import Details from './details';
import { Outlet } from 'react-router-dom';
//import Header from './components/header'

function Layout() {
  const [groupedQuotes, setLayoutGroupedQuotes] = useState(null);


  return (
    <>
    <Router>
      <div className='body'>
        <Index/>
        <Outlet/>
        <Routes>
          {/* Pass setLayoutGroupedQuotes and setComponentInTable to Table */}
          <Route path='/' element={<Table setLayoutGroupedQuotes={setLayoutGroupedQuotes}/>} />
          {/* Pass groupedQuotes and componentInTable to Details */}
          <Route path='/:key' element={<Details groupedQuotes={groupedQuotes} />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default Layout