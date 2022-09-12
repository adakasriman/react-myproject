import React from 'react'
import myPhoto from '../images/srimanPic.jpeg'

function Home() {
    return (
        <div className='home_page'>
            <div className='home_header'>
                <h1>Adaka</h1>
                <h1>Siva Nagaraju</h1>
                <h1>Srimannarayana</h1>
            </div>
            <div className='home_content'>
                <div className='display_flex gap_20 p_5'>
                    <img className="srima_pic" src={myPhoto} alt='me' />
                    <div>
                        <h3>
                            Hi!, This is SRIMANNARAYANA ADAKA and I'm a front-end devolper.
                        </h3>
                        <p>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;