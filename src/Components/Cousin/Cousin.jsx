import React from 'react';

const Cousin = ({children}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <section>
                <small>{children}</small>
            </section>
        </div>
    );
};

export default Cousin;
