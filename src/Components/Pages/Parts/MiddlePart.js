import React from 'react';
import { BsArrowLeftRight, BsChevronDown } from "react-icons/bs";
import { IoPaperPlaneOutline } from "react-icons/io5";

const MiddlePart = () => {
    return (
        <div className='m-10 shadow-xl p-2 rounded-lg'>
            <h4 className='font-medium'>Where are you flying?</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-2'>
                <div>
                    <p className='font-light'>From - To</p>
                    <button className="px-8 py-2 border-2 flex">Lahore - Karachi <BsArrowLeftRight className='mt-2 ml-6'></BsArrowLeftRight></button>
                </div>
                <div>
                    <p className='font-light'>Trip</p>
                    <button className="px-4 py-2 border-2 flex">Return <BsChevronDown className='mt-2 ml-6'></BsChevronDown></button>
                </div>
                <div>
                    <p className='font-light'>Depart - Return</p>
                    <button className="px-8 py-2 border-2 flex">07 Nov - 13 Nov</button>
                </div>
                <div>
                    <p className='font-light'>Passenger - Class</p>
                    <button className="px-8 py-2 border-2 flex">1 Passenger, Economy</button>
                </div>
            </div>
            <div className='card-actions justify-end mt-3 mr-20'>
                <p className='mt-2'>+ Add Promo Code</p>
                <button className="px-1 py-2 flex" style={{ backgroundColor: '#3282AD', color: 'white' }}> <IoPaperPlaneOutline className='mt-1 mr-2'></IoPaperPlaneOutline> Show Filghts</button>
            </div>
        </div>
    );
};

export default MiddlePart;