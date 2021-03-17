import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Items from '../jsons/items.json';
import { Link } from 'react-router-dom';
import ProductItem from '../components/ProductItem';

function Product({ match: { params: { type } } }){
    const [list, setList] = useState([]);
    const tranceType = (_type) => {
        switch (_type) {
            case 'fish':
                return 1;
            case 'fruit':
                return 2;
            case 'vegetable':
                return 3;
        }
    };

    useEffect(() => {
        if( type === 'all' ){
            setList(Items);
        } else {
            const value = tranceType(type);
            const _list = Items.filter(item => item.type === value);
            setList(_list);
        }
    },[type])

    return (
        <ProductContainer>
            <nav>
                <Link to="/product/all">전체</Link>
                <Link to="/product/fish">수산물</Link>
                <Link to="/product/fruit">청과</Link>
                <Link to="/product/vegetable">야채</Link>
            </nav>
            <ul>
                {list.map((item, index )=> (
                    <ProductItem key={`PRODUCT_ITEM${index}`} item={item} />
                ))}
            </ul>
        </ProductContainer>
    );
};

export default Product;

const ProductContainer = styled.div`
    * { margin: 0; padding: 0; font-size: 20px; }
    nav {
        padding: 10px;
        border-bottom: 1px sollid;
        a {
            padding: 10px 20px;
            color: #000;
            text-decoration: none;
        }
    }
    ul{
        display: grid;
        width: 1000px;
        margin: 30px auto;
        /*grid-template-columns: 1fr 1fr 1fr 1fr;*/
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;  

    }
    &:hover{

    }
`;
