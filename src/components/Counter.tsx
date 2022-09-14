import React, {useState} from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1 className={classes.title}>{count}</h1>
            <button onClick={increment}>increment</button>
        </div>
    );
};