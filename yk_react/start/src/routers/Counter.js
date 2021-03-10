import React, { useEffect, useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    const increasement = () => {
        setCount(count + 1);
    }

    const decreasement = () => {       
        setCount(count - 1);
    }

    useEffect(() => {
        const strCount = count + '';
        const arr = strCount.split('');
         //arr.indexOf('3');

        console.log(count);
    
    },[count])

    /*useEffect(() => { //처음 켤 때만 동작하는 내용
        console.log('Component did mount');
        //setCount(100);
    }, []); //setInterval 이랑 같은 형태
*/

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increasement}>increasement</button>
            <button onClick={decreasement}>decreasement</button>
        </div>
        
    )
}

export default Counter;