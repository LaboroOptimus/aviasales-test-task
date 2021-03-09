import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const data = [
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
    {name: '11', surname: '11'},
];

const Item = styled.div`
    padding: 10px;
    border: 1px solid #eee;
`;


const TestList = () => {
    const [count, setCount] = useState(5);
    const [changeCount, setChangeCount] = useState(false);
    const userData = data.slice(0, count);

    useEffect(() => {
        setCount(prev => prev + 5);
        setChangeCount(false);
    },[changeCount]);

    const clickHandler = () => {
        setChangeCount(true);
    };


    return (
        <>
            <>
                {userData.map((e, index) => {
                    return (<Item key={index}>{e.name} - {e.surname}</Item>)
                })}
            </>
            <button onClick={clickHandler}>Клик</button>
        </>
    );
};

export default TestList