import React from 'react';
import img1 from '../../assets/qZone1.png'
import img2 from '../../assets/qZone2.png'
import img3 from '../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='text-center bg-secondary py-4 my-4'>
            <h2>Q-Zone</h2>
            <div>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>

        </div>
    );
};

export default Qzone;