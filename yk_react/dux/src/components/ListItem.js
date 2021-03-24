import React from 'react';
import styled from 'styled-components';

const nf = new Intl.NumberFormat();

function ListItem({ onCheck, item, item: { id, src, name, price, check } }) {
    console.log(item);
    return(
        <ListContainer active={item.check}>
            <span className={item.check ? 'active' : ''} onClick={() => onCheck(id)} />
            <img src={src} />
            <article>
                <h1>{item.check ? 'true': 'false'}</h1>
                <span>{name}</span>
                <span>{nf.format(price)}원</span>
            </article>
        </ListContainer>
    );
} 

export default ListItem;

const ListContainer = styled.li`
    width: calc((100% - 20px * 2) / 3);
    margin-bottom: 20px;
    box-shadow: 0 0 15px rgba(0, 0, 0, .2);
    position: relative;

    & > span {
        position: absolute;
        left: 10px;
        top: 10px;
        width: 20px;
        height:20px;
        box-sizing: border-box;
        padding: 5px;
        background: white;
        cursor:pointer;

        &.active {
            &:before {
                ${'' /* display: ${props => props.active ? 'block' : 'none' };   */}
                content: '';
                width: 14px;
                height: 14px;
                position: absolute;
                background: #198942;
            }
        }
    }
    


    img {
        width:100%;
    }
    &:nth-child(3n + 2){
        margin: 0 20px 20px;
    }
    article{
        display: flex;
        flex-direction: column;
        padding: 10px 0;
        span{
            font-size: 20px;
            margin:5px 0;
            
        }
    }
`;