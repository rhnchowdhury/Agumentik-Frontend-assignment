import React from 'react';
import img1 from '../../../assets/booking.png';
import img2 from '../../../assets/book-plane.png';

const Booking = () => {
    return (
        <div style={{ background: 'linear-gradient(180deg, #E5F8FE 14.25%, rgba(255, 255, 255, 0) 100%)' }}>
            <img src={img2} alt="" className='ml-20' style={{ background: "#E5F8FE" }} />
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img1} alt='' className="max-w-sm h-80 rounded-lg" />
                    <div className="card flex-shrink-0 w-full max-w-sm">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="text" placeholder="" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="text" placeholder="" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="text-white py-2 font-medium" style={{ border: '2px solid #3282AD', background: '#3282AD' }}>Find</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;