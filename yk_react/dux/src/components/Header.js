import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GrCart } from "react-icons/gr";
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function Header(){
    const [active, setActive] = useState(false);
    const cart = useSelector(({ cart }) => cart.cart);

    const onscroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 0) {
            setActive(true);
        } else {
            setActive(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onscroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return(
        <HeaderContainer active={active}>
        <ul>
            <li>
                <Link to="/List">List</Link>
            </li>
            <li>
                <Link to="/Detail">Detail</Link>
            </li>
            <li>
                <Link to="/Cart">Cart</Link>
            </li>
            <li>
                <Link to="/Login">Login</Link>
            </li> 
        </ul>
        <div>
            <GrCart />
            <Count count={cart.length} />
        </div>
        </HeaderContainer>
    );
};

export default Header;

const Count = styled.span`
    position: absolute;
    top: -10px;
    right: -10px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #198942;
    display: flex;
    justify-content: center;
    align-items: center;
    &:before{
        content: '${props => props.count}';
        color:#fff;
        font-size:20px;
        position: absolute;
        height: 20px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`;

const HeaderContainer = styled.header`
    display: flex;
    border-bottom: 1px solid;
    height: 100px;
    background: ${props => props.active ? '#000' : '#fff'};
    padding: 0 30px;
    align-items: center;
    position:fixed;
    left: 0;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 1000;

    ul{
        display:flex;
        li{
            padding: 5px 10px;
            font-size: 20px;
            a {
				text-decoration: none;
				color: ${props => props.active ? '#fff' : '#444'};
				&:visited, &:link {
					color: ${props => props.active ? '#fff' : '#444'};
				}
				&:hover {
					color: blue;
				}
			}
        }
    }
    div {
        margin-left: auto;
        position: relative;
        svg {
            font-size: 40px;
            path {
				stroke: ${props => props.active ? '#fff' : '#444'};
			}
        }
        span {
            position: absolute;
            top: -10px;
            right: -10px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #198942;
            color: #fff;
            display: flex;
            justify-component: center;
            align-items: center;
            font-size: 15px;
            line-height: 20px;
        }
    }
`;