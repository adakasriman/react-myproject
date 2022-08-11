import React from 'react'
import myPhoto from '../images/srimanPic.jpeg'

function Home() {
    return (
        <div className='display_flex gap_20 p_5'>
            <img className="srima_pic" src={myPhoto} alt='me' />
            <div>
                Adaka Srimannarayana
            </div>
        </div>
    );
}

export default Home;