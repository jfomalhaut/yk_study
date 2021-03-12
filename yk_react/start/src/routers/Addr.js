import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const API_KEY = process.env.API_KEY;
const JUSO_URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do';

function Addr(){
    const [keyword, setKeyword] = useState('');
    const [oldkeyword, setOldKeyword] = useState('');
    const [list, setList] = useState([]);
    const [currentPage, setPage] = useState(1);

    const onClickSearch = (ev) => {
        ev.preventDefault();//새로고침 방지
        search();
    };

    const search = () =>{
        if(keyword != oldkeyword){
            setPage(1);
        }

        Axios.get(`${JUSO_URL}?confmKey=${API_KEY}&currentPage=${currentPage}&countPerPag=10&resultType=json&keyword=${keyword}`).then(res => {
            const { data: { results: { common: {totalCount}, juso } } } = res;
            setOldKeyword(keyword);
            setList(juso);
        }).catch(error => {
            console.log(error);
        })

    }

    const goPrev = () => {


    }

    const goNext = () => {
        setPage(currentPage + 1);
    }


    useEffect(() => {
        if(currentPage === 1){
            setOldKeyword(keyword);
        }
        if(keyword !== '' ){
            search();
        }
       
    }, [currentPage]);

    return (
        <div>
            <form onSubmit={onClickSearch}>
                <input value={keyword} onChange={(ev) => setKeyword(ev.target.value)} />
                <button>검색</button>
            </form>
            <ul>
                {list.map((item, idx) => (
                    <li key={`ADDRESS${idx}`}>[{item.zipNo}]{item.roadAddrPart1}</li>
                ))}
            </ul>
            <div>
            <footer>
                <button onClick={goPrev}>이전</button>
                    <b>{currentPage}</b>
                <button onClick={goNext}>다음</button>
            </footer>
            </div>
        </div>
    )
}

export default Addr;