import Axios from 'axios';
import React, { useEffect, useState } from 'react';
//import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//import Pagenation from '../components/Pagenation';

const JUSO_API = process.env.JUSO_API;
const JUSO_URL = process.env.JUSO_URL;

const currentPerPage = 10;

const Addr = () => {
    const [keyword, setKeyword] = useState('');
    const [keyword2, setKeyword2] = useState('');
    const [currentPage, setCurrentPage] = useState(1); 
    const [totalCount, setTotalCount] = useState(0);
    const [list, setList] = useState([]);

    const [pageList, setPageList] = useState([]);
    const pageBlock = 10;

    const search = () => {
        const url = `${JUSO_URL}?confmKey=${JUSO_API}&currentPage=${currentPage}&countPerPage=${currentPerPage}&resultType=json&keyword=${keyword2}`;
        Axios.get(url).then(res => {
            const { data: { results : { common : { totalCount }, juso } } } = res;
            setList(juso);
            setTotalCount(totalCount);
        }).catch(error => {
            console.log(error);
        });
    };

    const Pagenation = ( currentPage, totalCount ) => {
        const maxPage = ( totalCount % currentPerPage === 0 ) ? totalCount / currentPerPage : Math.floor(totalCount / currentPerPage) + 1;
        let pageData = { pageVal: 0, pageLabel: '', flagClick: 0 };
        //const [pageData, setPageData] = useState({ pageVal: 0, pageLabel: '', flagClick: 0 });

        if( currentPage !== 1 ){
            pageData = { pageVal: 1, pageLabel: '◀◀', flagClick: 1 };
            setPageList({
                ...pageList,
                pageData
            }); 
            
            if(currentPage > currentPerPage) {
                pageData = { pageVal: currentPage - currentPerPage, pageLabel: '◀', flagClick: 1 };
            } else {
                pageData = { pageVal: 1, pageLabel: '◀', flagClick: 1 }
            };
            setPageList({
                ...pageList,
                pageData
            });
            
        }
        
        let startPage = currentPage > pageBlock ? currentPage - ( currentPage % pageBlock ) + 1 : 1;
        let endPage = startPage + pageBlock - 1;
        
        if( endPage > maxPage ) endPage = maxPage;

        for( let i = startPage ; i < endPage + 1 ; i++ ){
            if( currentPage === i ){
                pageData = { pageVal: i, pageLabel: i, flagClick: 0 };
            } else {
                pageData = { pageVal: i, pageLabel: i, flagClick: 1 };
            }

            setPageList(pageList.concat(pageData));
            /*setPageList([
                ...pageList,
                pageData
            ]);*/ 
        }
    };

    const onSearch = (ev) => {
        ev.preventDefault();
        setKeyword2(keyword);
    };

    useEffect(() => {
        if(keyword2 !== ''){
            if(currentPage === 1){
                search();
            } else {
                setCurrentPage(1);
            }
        }
    }, [keyword2]);

    useEffect(() => {
        search();
        Pagenation(1, totalCount);
    }, [currentPage]);

    /*useEffect(() => {
        if(keyword !== ''){
            console.log(pageList);
        }
    }, [pageList]);*/

    /*return (
        <div>
            <form onSubmit={onSearch}>
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
                <button onClick={(ev) => setCurrentPage(currentPage - 1)}>이전</button>
                    <b>{currentPage}</b>
                <button onClick={(ev) => setCurrentPage(currentPage + 1)}>다음</button>
            </footer>
            </div>
        </div>
    )   */ 

    return (
        <div>
            <form onSubmit={onSearch}>
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
                <ul>
                    {pageList.map((item, idx) => (
                        <li key={`page${idx}`} onClick={(ev) => setCurrentPage(item.pageVal)}>{item.pageLabel}</li>
                    ))}
                </ul>
            </footer>
            </div>
        </div>
    )
}


/*function Addr(){
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
}*/

export default Addr;