import React  from 'react';
import PropTypes from 'prop-types';


const Summary = ({ ingredients=[], steps=[], name='[recipe]' }) => {
    return <div className="recipes-class">
        <h1>{name}</h1>
        <p>{ingredients.length} Ingredients | {steps.length} Steps</p>
    </div>
};
Summary.propTypes = {
    ingredients: PropTypes.array.isRequired,
    steps: PropTypes.array.isRequired
};
Summary.defaultProps = {
    ingredients: 1,
    steps: 1
};

export default Summary;