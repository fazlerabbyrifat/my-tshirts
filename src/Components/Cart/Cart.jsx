import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if(cart.length === 0){
        message = <p>Please buy something</p>
    }
    else{
        message = <p>Thank you, sir/madam</p>
    }
    return (
        <div>
            <h1 className={`bold ${cart.length > 3 ? 'aquamarine' : 'red'}`}>Order Summary: {cart.length}</h1>
            {message}
            {
                cart.length > 2 ? <span>you will get a bonus</span> : <span>you should try our new products</span>
            }
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }
            {
                cart.length === 3 && <h4>hurray! 10% discount</h4>
            }
        </div>
    );
};

export default Cart;