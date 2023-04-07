import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Myself = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h2>Myself</h2>
            <p><small>{ring}</small></p>
        </div>
    );
};

export default Myself;