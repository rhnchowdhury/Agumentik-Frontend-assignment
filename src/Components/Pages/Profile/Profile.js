import React from 'react';
import img1 from '../../../assets/Layer 1 1 (1).png'
import img2 from '../../../assets/Rectangle 16 (1).png'
import img3 from '../../../assets/Vector.png'

const Profile = () => {
    return (
        <div>
            <div>
                <div className="hero" style={{ background: 'linear-gradient(180deg, #E5F8FE 14.25%, rgba(255, 255, 255, 0) 100%)' }}>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img1} alt='' className="max-w-sm" style={{ backgroundColor: '#3282AD' }} />
                        <div className='lg:mr-72'>
                            <img src={img2} alt="" className='mb-10' />
                            <h1 className="text-4xl font-bold">The Exotic <br /> <span style={{ color: '#3282AD' }}>Lakshadweep</span><br /> Islands</h1>
                            <div className='flex justify-between mt-10'>
                                <button className="px-4 font-medium" style={{ border: '2px solid #3282AD', color: '#3282AD' }}>Discover Now</button>
                                <img src={img3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;