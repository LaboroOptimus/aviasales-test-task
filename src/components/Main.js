import React from 'react';
import styled from "styled-components";
import logo from './logo.png'
import {TransferFilters} from "./TransferFilters";
import {Filters} from "./Filters";
import Table from "./Table";

const Wrapper = styled.div`
    width: 100%;
    background-color: #F3F7FA;   
    display: flex;
    flex-direction: column;
    height: 2000px;
`;

const Row = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const Logo = styled.img`
  margin: 50px 0;
`;

export const Main = () => {
    return (
        <Wrapper>
            <Row>
                <Logo src={logo}/>
            </Row>
            <Row>
                <TransferFilters/>
                <Column>
                    <Filters/>
                    <Table/>
                </Column>
            </Row>
        </Wrapper>
    )
};