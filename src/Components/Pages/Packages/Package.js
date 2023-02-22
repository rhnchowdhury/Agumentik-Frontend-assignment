import React from 'react';

const Package = () => {
    return (
        <div className='m-10'>
            <h1 className='text-center text-2xl font-bold'>Best Packages For You</h1>
            <p className='text-center'>This is a unique experience on ship, sea and land, exploring different coral islands of Lakshadweep.</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-3'>
                <button className="px-1 py-2" style={{ backgroundColor: '#3282AD', color: 'white' }}>Show Filghts</button>
                <button className="px-4 py-2" style={{ color: '#3282AD', border: '1px solid #3282AD' }}>Samudram</button>
                <button className="px-4 py-2" style={{ color: '#3282AD', border: '1px solid #3282AD' }}>Cordelia</button>
                <button className="px-4 py-2" style={{ color: '#3282AD', border: '1px solid #3282AD' }}>Agatti</button>
                <button className="px-4 py-2" style={{ color: '#3282AD', border: '1px solid #3282AD' }}>More</button>
            </div>
        </div>
    );
}

export default Package;