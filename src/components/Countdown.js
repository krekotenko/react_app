import React from 'react'
const Countdown = ({count, max = 25, tick, tick_to_up, reset}) => {
    console.log(max, count);
    if (count<=max) {
        setTimeout(() => tick_to_up(), 1000)
    }
    return (count<=max) ?
        <h1>{count}</h1> :
        <div onClick={() => reset(0)}>
            <span>CELEBRATE!!!</span>
            <span>(click to start over)</span>
        </div>
};
export default Countdown;
