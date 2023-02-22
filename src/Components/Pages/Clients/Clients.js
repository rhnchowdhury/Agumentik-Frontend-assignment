import React from 'react';
import img1 from '../../../assets/Ellipse 8 (1).png'

const Clients = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold'>What Our Clients Says <br /> About Us</h1>
            <div>
                <div className="card w-96 shadow-2xl">
                    <figure className="">
                        <img src={img1} alt="Shoes" className="w-24 rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center -mt-10">
                        <h2 className="card-title">Roman Rey</h2>
                        <p className='-mt-3'>Toranto, Canada</p>
                        <p className='mt-8'>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit. <br />Pellentesque efficitur ac quam<br /> in congue. </p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;