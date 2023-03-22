import Navbar from '../../component/navbar/Navbar';
import Sidebar from '../../component/sidebar/Sidebar';
import './list.scss';
import React from 'react'
import Datatable from '../../component/datatable/Datatable';

const List = () => {
  return (
    <div className='list'>
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
          <Datatable/>
        </div>
    </div>
  )
}

export default List