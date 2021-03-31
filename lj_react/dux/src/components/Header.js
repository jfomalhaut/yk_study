import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { GrCart } from 'react-icons/gr';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function Header() {
	const [active, setActive] = useState(false);
	const cart = useSelector(({ cart }) => cart.cart);

	const onScroll = () => {
		const scrollTop = window.scrollY;
		if (scrollTop > 0) {
			setActive(true);
		} else {
			setActive(false);
		}
	};

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<HeaderContainer active={active}>
			<ul>
				<li>
					<Link to="/list">List</Link>
				</li>
				<li>
					<Link to="/detail">Detail</Link>
				</li>
				<li>
					<Link to="/cart">Cart</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
			<div>
				<GrCart />
				<Count count={cart.length} />
			</div>
		</HeaderContainer>
	)
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
	&:before {
		content: '${props => props.count}';
		color: #fff;
		font-size: 20px;
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
	background: ${props => props.active ? '#444' : '#fff'};
	height: 100px;
	padding: 0 50px;
	align-items: center;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	box-sizing: border-box;
	z-index: 1000;

	ul {
		display: flex;
		li {
			padding: 5px 10px;
			font-size: 40px;
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
	}
`;