import React from 'react';
import "./styles.css";
import SidebarRow from "../sidebarrow";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';


function Sidebar() {
    return (
        <div className="sidebar">
        <SidebarRow src="https://avatar2.githubusercontent.com/u/247129567s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4" title='Elysse LeRoy' />
        <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Centre"/>
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={ChatIcon} title="Messenger" />
        <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
        </div>
    );

}

export default Sidebar;