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
        const arrCount = strCount.split('');
        let strOut = "";
        
        const arrCount2 = arrCount.map(item => item>0 ? item % 3 : 1); //1 대체?
        //console.log(arrCount2);
        for(let i = 0; i<arrCount2.length; i++){
            if(!arrCount2[i]){
                strOut += "짝";
            }
        }
        if(strOut){
            console.log(strOut);
        } else {
            console.log(count);
        }
        
    },[count]);

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