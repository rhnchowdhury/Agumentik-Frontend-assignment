import React from 'react';
import img1 from '../../../assets/support.png';
import img2 from '../../../assets/girl.png';
import { BiSearch } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutlineForwardToInbox } from "react-icons/md";

const Support = () => {
    return (
        <div>
            <img src={img1} alt="" />
            <div>
                <h1 className='text-center text-2xl font-bold'>Frequently asked questions</h1>
                <p className='text-center'>Have questions ? We’re here to help.</p>
                <span className='card-actions justify-center mt-8'>
                    <input type="text" placeholder="Search a Question" className="input input-bordered w-full max-w-xs" />
                    <button className='p-4 text-white -ml-5' style={{ background: '#3282AD' }}><BiSearch></BiSearch> </button>
                </span>
                <div>
                    <div tabIndex={0} className="collapse collapse-plus collapse-open border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is the most popular season to visit the Maldives?
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac leo ac ipsum consectetur laoreet quis eget tortor. Morbi aliquet venenatis tortor. Phasellus egestas sem rutrum volutpat iaculis</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            When should I book the Maldives Tour package?
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Do I need a visa to visit Maldives?
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            How can I travel to Maldives?
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What are the travel documents required for entry into Maldives?
                        </div>
                    </div>
                </div>
                <div>
                    <div className="hero bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={img2} alt='' className="max-w-sm mask mask-circle" />
                            <div>
                                <h3 className="text-2xl font-bold">Still have questions ?</h3>
                                <p className="py-6">Can’t find the answer you’re looking for ? Please chat to our friendly team</p>
                                <button className="text-white p-2 font-medium rounded" style={{ border: '2px solid #3282AD', background: '#3282AD' }}>Get in touch</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-center text-2xl font-bold'>Contact Us</h1>
                    <p className='text-center'>Any question or remarks? Just write us a message!</p>
                    <div className='flex'>
                        <div>
                            <IoMdContact></IoMdContact>
                            <p>1901 Thornridge Cir. Shiloh
                                Hawaii 81063</p>
                        </div>
                        <div>
                            <FaPhoneSquareAlt></FaPhoneSquareAlt>
                            <p>+91-4555545454</p>
                        </div>
                        <div>
                            <MdOutlineForwardToInbox></MdOutlineForwardToInbox>
                            <p>tim.jennings@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;