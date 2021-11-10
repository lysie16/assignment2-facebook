import React from 'react'
import "./styles.css";
import Story from "../story";

const StoryReel = () => {
    return (
        <div className="storyReel">

            <Story image="https://static-cse.canva.com/blob/562124/RightBackground4.jpg"
            profileSrc="https://www.pngkit.com/png/detail/133-1337492_google-employee-amanda-avatar.png"
            title="Elysse" />

            <Story image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            profileSrc="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="Cohen" />

            <Story image="https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?ahttps://cdn2.vectorstock.com/i/1000x1000/34/41/brown-hair-woman-avatar-isolated-faceless-female-vector-21453441.jpguto=compress&cs=tinysrgb&dpr=1&w=500"
            profileSrc="https://cdn4.vectorstock.com/i/1000x1000/65/33/businesswoman-avatar-faceless-profile-vector-24646533.jpg"
            title="Tory" />

            <Story image="https://images.pexels.com/photos/917494/pexels-photo-917494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            profileSrc="https://cdn.dribbble.com/users/40756/screenshots/6232646/side-profile-woman_2x_4x.png?compress=1&resize=400x300"
            title="Joelle" />

            <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0p9ujldah6i607k1a4EIKeMUsTCl_kNcSA&usqp=CAU"
            profileSrc="https://www.pngarts.com/files/11/Avatar-PNG-Photo.png"
            title="Dawn" />

        </div>
    );
}

export default StoryReel