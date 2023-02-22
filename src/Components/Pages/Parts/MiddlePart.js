import React from 'react';
import { BsArrowLeftRight } from "react-icons/bs";

const MiddlePart = () => {
    return (
        <div>
            <h4 className='font-medium'>Where are you flying?</h4>
            <div>
                <div className=''>
                    {/* <p>Lahore - Karachi</p> */}
                    <button className="px-4 border-2">Lahore - Karachi <BsArrowLeftRight></BsArrowLeftRight></button>
                </div>
            </div>
        </div>
    );
};

export default MiddlePart;