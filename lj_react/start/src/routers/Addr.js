import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const API_KEY = process.env.API_KEY;
const JUSO_URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do';
const VIEW_PAGE = 10;

function Addr() {
	const [currentPage, setCurrentPage] = useState(1);
	const [keyword, setKeyword] = useState('');
	const [keyword2, setKeyword2] = useState('');
	const [list, setList] = useState([]);
	const [max, setMax] = useState(10);

	const onClickSearch = (ev) => {
		ev.preventDefault();
		setKeyword2(keyword);
	};

	const search = () => {
		Axios.get(`${JUSO_URL}?confmKey=${API_KEY}&currentPage=${currentPage}&countPerPage=10&resultType=json&keyword=${keyword2}`).then(res => {
			const { data: { results: { common: { totalCount }, juso } } } = res;
			setList(juso);
		}).catch(error => {
			console.log(error);
		});
	};

	const next = () => {
		setCurrentPage(currentPage + 1);
	};

	useEffect(() => {
		if (keyword2 !== '') {
			if (currentPage === 1) {
				search();
			} else {
				setCurrentPage(1);
			}
		}
	}, [keyword2]);

	useEffect(() => {
		if (keyword2 !== '') {
			search();
			const _max = Math.ceil(currentPage / 10) * 10;
			setMax(_max);
		}
	}, [currentPage]);

	return (
		<div>
			<form onSubmit={onClickSearch}>
				<input value={keyword} onChange={(ev) => setKeyword(ev.target.value)} />
				<button>검색</button>
			</form>
			{keyword2 !== '' && (
				<h1>{keyword2}에 대한 검색결과입니다</h1>
			)}
			<ul>
				{list.map((item, idx) => (
					<li key={`ADDRESS${idx}`}>[{item.zipNo}] {item.roadAddrPart1}</li>
				))}
			</ul>
			<div>
				{[...new Array(VIEW_PAGE)].map((item, i) => (
					<span style={{ margin: '10px', color: (max + i - 9) == currentPage ? 'red' : 'black' }}>{max + i - 9}</span>
				))}
			</div>
			<footer>
				<button>이전</button>
				<b style={{ margin: 10 }}>{currentPage}</b>
				<button onClick={next}>다음</button>
			</footer>
		</div>
	);
};

export default Addr;