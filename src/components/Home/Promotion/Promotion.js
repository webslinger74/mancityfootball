import React from 'react';
import Animation from './Animation';
import Enrol from './Enrol';

const Promotion = () => {
    return (
        <div className="promotion_wrapper"
        style={{
            background:"#ffffff"
        }}>
            <div className="container">
        <Animation />
        <Enrol />

            </div>
        </div>
    )
}

export default Promotion;