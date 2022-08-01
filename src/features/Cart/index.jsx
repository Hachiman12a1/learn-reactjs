import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartItemsTotalSelector } from './selectors';

CartFeature.propTypes = {
    
};

function CartFeature(props) {
    const cartTotal = useSelector(cartItemsTotalSelector)

    return (
        <div>
            Cart Feature {cartTotal}
        </div>
    );
}

export default CartFeature;