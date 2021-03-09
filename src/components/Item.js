import React from 'react';
import styled from 'styled-components';
import logo from './S7 Logo.png';

const Wrapper = styled.div`
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    width: 502px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

const Price = styled.span`
    font-size: 24px;
    font-weight: 600;
    color: #2196F3;
    font-family: 'Open Sans', sans-serif;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${props=>props.marginBottom};
`;

const InfoBlock = styled.div`
    width: 141px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: left;
`;

const InfoBlockTitle = styled.span`
    color: #A0B0B9;
    font-size: 12px;
    line-height: 18px
`;

const InfoBlockContent = styled.span`
    font-size: 14px;
    line-height: 21px;
    color: #4A4A4A;
    font-weight: 600;
`;


export const Item = ({price, carrier}) => {
    return (
        <Wrapper>
            <Row marginBottom={'20px'}>
                <Price>{price} Р {carrier}</Price>
                <img src={logo}/>
            </Row>

            <Row marginBottom={'10px'}>
                <InfoBlock>
                    <InfoBlockTitle>MOW – HKT</InfoBlockTitle>
                    <InfoBlockContent>10:45 – 08:00</InfoBlockContent>
                </InfoBlock>

                <InfoBlock>
                    <InfoBlockTitle>В пути</InfoBlockTitle>
                    <InfoBlockContent>21ч 15м</InfoBlockContent>
                </InfoBlock>

                <InfoBlock>
                    <InfoBlockTitle>2 пересадки</InfoBlockTitle>
                    <InfoBlockContent>HKG, JNB</InfoBlockContent>
                </InfoBlock>
            </Row>

            <Row>
                <InfoBlock>
                    <InfoBlockTitle>MOW – HKT</InfoBlockTitle>
                    <InfoBlockContent>11:20 – 00:50</InfoBlockContent>
                </InfoBlock>

                <InfoBlock>
                    <InfoBlockTitle>В пути</InfoBlockTitle>
                    <InfoBlockContent>13ч 30м</InfoBlockContent>
                </InfoBlock>

                <InfoBlock>
                    <InfoBlockTitle>1 пересадка</InfoBlockTitle>
                    <InfoBlockContent>HKG</InfoBlockContent>
                </InfoBlock>
            </Row>


        </Wrapper>
    )
};