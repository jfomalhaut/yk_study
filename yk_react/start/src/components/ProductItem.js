import React from 'react';
import styled from 'styled-components';
const nf = new Intl.NumberFormat();

function ProductItem({ item: { name, price, type } }){
    return (
        <Item type={type}>
            <figure />
            <h1>{name}</h1>
            <h3>{nf.format(price)}원</h3>
        </Item>
    )
}

export default ProductItem;

const Item = styled.li`
    list-style: none;
    box-shadow: 0 0 15px rgba(0, 0, 0, .2);
    figure{
        height: 150px;
        background-color: ${props => 
            props.type === 1 ? '#0071b3' : 
            props.type === 2 ? '#C9242B' : '#198942'
        };
    }
`