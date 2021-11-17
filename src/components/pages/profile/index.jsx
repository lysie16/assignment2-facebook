import React, { useEffect, useState } from 'react'
import './styles.css';
import {useParams} from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import HeaderCover from '../../headercover/index';
import $ from 'jquery';
import Avatar from '@mui/material/Avatar';
import BioMenu from '../../biomenu/index';
import BioOptions from '../../biooptions/index';
import Friends from '../../friends/index';


function Profile({user}) {
    const{username, uid} = useParams();
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const [imageURL, setImageURL] = useState('');
    // const history = useHistory('');
    const [progress, setProgress] = useState(0);
    const [posts, setPosts] = useState([]);
    const [profileUserData, setProfileUserData] = useState();
    const [bio, setBio] = useState('');
    const [bioPresent, setBioPresent] = useState(false)

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    useEffect(() => {
        if (imageURL !== '') {
            setOpen(true)
        }
    }, [imageURL])

    const addBio = () => {
        $('.bio')[0].style.display = 'none';
        $('.bioFields')[0].style.display = 'flex';
    }

    // const collapseBio = () => {
    //     $('.bio')[0].style.display = 'block';
    //     $('.bioFields')[0].style.display = 'none';
    // }

    // const bioSet = (e) => {
    //     setBio(e.target.value)
    //     if (101 - e.target.value.length < 0 || e.target.value.length === 0) {
    //         $('.saveButton')[0].style.backgroundColor = '#3A3B3C';
    //         $('.saveButton')[0].style.opacity = 0.4;
    //     } else {
    //         $('.saveButton')[0].style.opacity = 1;
    //         $('.saveButton')[0].style.backgroundColor = '#2D88FF';
    //     }
    // }

    // useEffect(() => {
    //     if (bioPresent === false) {
    //         console.log()
    //     } else {
    //         $('.bio')[0].innerText = "Edit";
    //         $('.bioText')[0].innerText = bio;
    //     }
    // }, [bioPresent])



    return (
        <div className="profile">
                <div className="profile__topSection">
                <HeaderCover />
                <div className="profile__user">
                <div className="profile__coverPhoto">
                    {/* <Avatar /> */}
                    <h2>Elysse Le Roy</h2>
                </div>
                </div>

                <p className="bioText"></p>
                <p onClick={addBio} className="bio">Add Bio</p>
                <div className="hr4" />
                </div>
                 <BioOptions />  
                 <Friends></Friends>

        </div>
    )
}

export default Profile;