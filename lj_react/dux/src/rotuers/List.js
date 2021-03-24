import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CartAction } from '../actions';
import styled from 'styled-components';
import Items from '../jsons/fishes.json';
import ListItem from '../components/ListItem';

function List() {
	const dispatch = useDispatch();
	const [list, setList] = useState(Items);

	const onCheck = (id) => {
		// 수정 => map
		// 삭제 => filter
		// 추가 => concat
		const newList = list.map(item => item.id === id ? ({ ...item, check: !item.check }) : item);
		setList(newList);
	};

	const checkAll = () => {
		const flag = list.some(item => !item.check); // false가 하나라도 있으면
		const newList = list.map(item => ({ ...item, check: flag }));
		setList(newList);
	};
	
	const addToCart = (item) => {
		dispatch(CartAction.addToCart(item));
	};

	return (
		<ListContainer>
			<div>
				<button onClick={checkAll}>전체선택</button>
				<button>선택삭제</button>
				<button>전체삭제</button>
			</div>
			<ul>
				{list.map(item => (
					<ListItem addToCart={addToCart} onCheck={onCheck} item={item} key={`ITEMS${item.id}`} />
				))}
			</ul>
		</ListContainer>
	);
}

export default List;

const ListContainer = styled.main`
	ul {
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
			font-size: 20px;
			padding: 0 10px;
			margin: 0 5px;
		}
	}
`;