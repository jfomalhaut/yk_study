import React from 'react';
import styled from 'styled-components';

const nf = new Intl.NumberFormat();

function ListItem({ addToCart, onCheck, item }) {
	const { id, src, name, price, check } = item;
	return (
		<ListContainer active={check}>
			<span className={check ? 'active' : ''} onClick={() => onCheck(id)} />
			<img src={src} />
			<article>
				<span>{name}</span>
				<span>{nf.format(price)}원</span>
				<button onClick={() => addToCart(item)}>담기</button>
			</article>
		</ListContainer>
	);
};


export default ListItem;

const ListContainer = styled.li`
	width: calc((100% - 20px * 2) / 3);
	margin-bottom: 20px;
	box-shadow: 0 0 15px rgba(0, 0, 0, .2);
	position: relative;

	& > span {
		position: absolute;
		left: 10px;
		cursor: pointer;
		top: 10px;
		width: 20px;
		height: 20px;
		box-sizing: border-box;
		padding: 3px;
		background: white;

		${'' /* &.active { */}
			&:before {
				content: '';
				display: ${props => props.active ? 'block' : 'none' };
				width: 14px;
				height: 14px;
				position: absolute;
				background: #198942;
			}
		${'' /* } */}
	}

	img {
		width: 100%;
	}
	&:nth-child(3n + 2) {
		margin: 0 20px 20px;
	}
	article {
		display: flex;
		flex-direction: column;
		padding: 10px 5px;
		span {
			font-size: 20px;
			margin: 5px 0;
		}
		button {
			padding: 5px 0;
			font-size: 20px;
		}
	}
`;