import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CartAction } from '../actions';
import Items from '../jsons/fishes.json';
import styled from 'styled-components';
import ListItem from '../components/ListItem';

function List(){
    const dispatch = useDispatch();
    const [list, setList] = useState(Items);

    const onCheck = (id) => {
        const newList = list.map(item => item.id === id ? ({ ...item, check: !item.check }) : item );
        setList(newList);
    }

    useEffect(() => {
        // const test = list.filter(item => item.check);
        // console.log(test);
    }, [list]);

    const addToCart = () => {
        dispatch(CartAction.addToCart());

    };

    return (
        <ListContainer>
        <div>
            <button>전체선택</button>
            <button>선택삭제</button>
            <button>전체삭제</button>
        </div>
        <ul>
            {Items.map(item => (
                <ListItem onCheck={onCheck} item={item} key={`ITEMS${item.id}`} />
            ))}
        </ul>
        </ListContainer>
    );
}

export default List;

const ListContainer = styled.main`
    ul{
        display: flex;
        flex-wrap: wrap;
        width: 1000px;
        margin: 50px auto;

    }

    div {
        padding: 10px;
        display: flex;
        justify-content: flex-end;
        border-bottom: 1px solid #222;
        margin-bottom: 20px;
        button {
            font-size:18px;
            padding: 0 10px;
            margin: 0 5px;
        }
    }

`;
