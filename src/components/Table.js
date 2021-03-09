import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Item} from "./Item";
import MoreButton from "./MoreButton";
import {connect} from 'react-redux'
import {useDispatch, useSelector} from "react-redux";

const Wrapper = styled.div`
    margin-left: 20px;
`;

const Table = () => {

    useEffect(() => {
        dispatch({type: 'FETCH_ID'})
    }, []);

    const dispatch = useDispatch();
    const [count, setCount] = useState(5);
    const isLoad = useSelector(state => state.isTicketsLoad);
    const tickets = useSelector(state => state.tickets);

    const renderedTickets = tickets.slice(0, count);

    const clickMoreHandler = () => {
        setCount(prev => prev + 5)
    };

    console.log(renderedTickets);
    return (
        <Wrapper>
            {isLoad ? (
                <>
                    {renderedTickets.map((e, index) => {
                        return (
                            <Item key={index} price={e.price} carrier={e.carrier}/>
                        );
                    })}
                    <MoreButton clickHandler={clickMoreHandler}/>
                </>) : null}
        </Wrapper>
    )
};


export default Table