import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined } from '@mui/icons-material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import Brightness5 from '@mui/icons-material/Brightness5Outlined'
import './navbar.scss'
import React , {useContext} from 'react'
import { DarkModeContext } from '../../context/darkModeContext'

const Navbar = () => {
    const {darkMode , dispatch} = useContext(DarkModeContext);
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder='Search' />
                <SearchOutlinedIcon className='icon'/>
            </div>
            <div className="items">
                <div className="item">
                    <LanguageOutlined className='icon'/>
                    English
                </div>
                <div className="item">
                   {
                    !darkMode ?
                    <DarkModeOutlined className='icon' onClick = {()=>dispatch({type:"TOGGLE"})}/>:
                    <Brightness5 className='icon' onClick = {()=>dispatch({type:"TOGGLE"})}/>
                   }
                </div>
                <div className="item">
                    <FullscreenExitOutlined className='icon'/>
                </div>
                <div className="item">
                    <NotificationsNoneOutlined className='icon'/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ChatBubbleOutlineOutlined className='icon'/>
                    <div className="counter">2</div>
                </div>
                <div className="item">
                    <ListOutlined className='icon'/>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='avatar' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar