import { Link } from 'react-router-dom'
import './page404.scss'
import React from 'react'

const Page404 = () => {
  return (
    <div className='container_not_found'>
        <div className="not_found_text">
            <h1>404 Page Not Found!!</h1>
        </div>
            <Link to='/' style={{textDecoration:'none'}} >
                <div className="not_found_btn" >
                      Go to Home
                </div>
            </Link>
    </div>
  )
}

export default Page404