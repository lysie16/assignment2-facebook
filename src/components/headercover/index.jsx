import React from 'react'
import './styles.css';
import Avatar from '@mui/material/Avatar';


function HeaderCover() {
    return(
        <div className='headercover'>
            <div className='header__photo'>
            {/* <img src= "https://wallpaperaccess.com/full/310677.jpg"
            alt=""
      /> */}
               <div className="headerc_info">
            <Avatar /> 
            <h4>Elysse Le Roy</h4>
            </div>
        </div> 
    </div>
    )
}
export default HeaderCover;