import MoreVertIcon from '@mui/icons-material/MoreVert'
import './featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import React from 'react'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text='70%'strokeWidth={5}/>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">₹12000</p>
            <p className="desc">Previous transaction processing. Last payments may not be included.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDown fontSize='small'/>
                        <div className="resultAmount">₹112990</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUp fontSize='small'/>
                        <div className="resultAmount">₹112990</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUp fontSize='small'/>
                        <div className="resultAmount">₹112990</div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Featured