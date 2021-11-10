import React from "react";
import "./styles.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Header = () => {
    return (
    <div className = "header">
        <div className="header__left">
            <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
            alt=""
            />
        </div>
        <div className ="header__input">
            <SearchIcon />
            <input placeholder="Search Facebook" type="text" />
        </div>

        <div className ="header__middle">
            <div className ="header__option 
            header__option--active">
                <HomeIcon fontSize="large" />
            </div>
            <div className ="header__option">
                <FlagIcon fontSize="large" />
            </div>
            <div className="header__option">
                <SubscriptionsOutlinedIcon
                fontSize="large"/>
            </div>
            <div className="header__option">
                <StorefrontOutlinedIcon
                fontSize="large"/>
            </div>
            <div className="header__option">
                <SupervisedUserCircleOutlinedIcon
                fontSize="large"/>
            </div>
        </div>
        <div className ="header__right"></div>
            <div className="header__info">
            <Avatar /> 
            <h4>Elysse Le</h4>
            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <ForumIcon />
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
                <ExpandMoreIcon />
            </IconButton>
           </div>
        </div>
    );
}

export default Header;