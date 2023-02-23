import React from 'react';
import img1 from '../../../assets/roman.png';
import img2 from '../../../assets/alex.png';
import img3 from '../../../assets/finn.png';
import { AiFillStar } from "react-icons/ai";
import { BsCircle, BsCircleFill } from "react-icons/bs";

const Clients = () => {
    return (
        <div className='m-10'>
            <h1 className='text-center text-2xl font-bold'>What Our Clients Says <br /> About Us</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
                <div className="card lg:w-96 shadow-2xl">
                    <figure className="mt-5">
                        <img src={img1} alt="Shoes" className="w-24 rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center -mt-10">
                        <h2 className="card-title">Roman Rey</h2>
                        <p className='-mt-3'>Toranto, Canada</p>
                        <p className='mt-8'>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit. <br />Pellentesque efficitur ac quam<br /> in congue. </p>
                        <div className="card-actions">
                            <AiFillStar style={{ color: '#3282AD' }}></AiFillStar>
                            <AiFillStar style={{ color: '#3282AD' }}></AiFillStar>
                            <AiFillStar style={{ color: '#3282AD' }}></AiFillStar>
                            <AiFillStar style={{ color: '#3282AD' }}></AiFillStar>
                            <AiFillStar style={{ color: '#3282AD' }}></AiFillStar>
                        </div>
                    </div>
                </div>
                <div className="card lg:w-96 shadow-2xl">
                    <figure className="mt-5">
                        <img src={img2} alt="Shoes" className="w-24 rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center -mt-10">
                        <h2 className="card-title">Alex Tom</h2>
                        <p className='-mt-3'>Toranto, Canada</p>
                        <p className='mt-8'>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit. <br />Pellentesque efficitur ac quam<br /> in congue. </p>
                        <div className="card-actions">
                            <AiFillStar style={{ color: '#3282AD' }}></AiFillStar>
                            <AiFillStar style={{ color: '#3282AD' }}></AiFillStar>
                            <AiFillStar style={{ color: '#3282AD' }}></AiFillStar>
                            <AiFillStar style={{ color: '#3282AD' }}></AiFillStar>
                            <AiFillStar style={{ color: '#3282AD' }}></AiFillStar>
                        </div>
                    </div>
                </div>
                <div className="card lg:w-96 shadow-2xl">
                    <figure className="mt-5">
                        <img src={img3} alt="Shoes" className="w-24 rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center -mt-10">
                        <h2 className="card-title">Finn Balor</h2>
                        <p className='-mt-3'>Toranto, Canada</p>
                        <p className='mt-8'>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit. <br />Pellentesque efficitur ac quam<br /> in congue. </p>
                        <div className="card-actions">
                            <AiFillStar style={{ color: '#3282AD' }}></AiFillStar>
                            <AiFillStar style={{ color: '#3282AD' }}></AiFillStar>
                            <AiFillStar style={{ color: '#3282AD' }}></AiFillStar>
                            <AiFillStar style={{ color: '#3282AD' }}></AiFillStar>
                            <AiFillStar style={{ color: '#3282AD' }}></AiFillStar>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-actions justify-center mt-5">
                <BsCircle style={{ color: '#3282AD' }}></BsCircle>
                <BsCircleFill style={{ color: '#3282AD' }}></BsCircleFill>
                <BsCircle style={{ color: '#3282AD' }}></BsCircle>
            </div>
        </div>
    );
};

export default Clients;