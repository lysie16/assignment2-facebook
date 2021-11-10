import React from 'react'
import "./styles.css";
import  StoryReel from "../storyreel";
import MessageSender from "../messagesender";
import Post from "../post";


const Feed = () => {
    return (
    <div className='feed'>
        {/* StoryReel */}
        <StoryReel />
        {/* MessageSender */} 
        <MessageSender />

        <Post 
        profilePic="https://st2.depositphotos.com/1009634/7235/v/600/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"
        message="Wow this works!"
        timestamp="This is a timestamp"
        username="elysseleroy"
        image="https://i.cbc.ca/1.3906016.1482269864!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/profile-pics.jpg"
        />
        <Post 
        profilePic="http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/12/Profile-Picture-4.jpg"
        message="Wow this works!"
        timestamp="This is a timestamp"
        username="christinanap"
        image="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg"
        />
        <Post 
        profilePic="http://dslv9ilpbe7p1.cloudfront.net/1GoMbqPSFu5_aI_7n8pW3g_store_header_image"
        message="Wow this works!"
        timestamp="This is a timestamp"
        username="torywhitworth"
        image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/a44.jpg" 
        />
     </div>
    );
}

export default Feed;