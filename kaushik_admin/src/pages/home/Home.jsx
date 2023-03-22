import Featured from '../../component/featured/Featured'
import Chart from '../../component/chart/Chart'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'
import Widget from '../../component/widget/Widget'
import './home.scss'
import Table from '../../component/table/Table'
import React from 'react'
const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart aspect={2/1}/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Table/>
          </div>
        </div>
    </div>
  )
}

export default Home