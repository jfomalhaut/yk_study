import React, { useEffect, useState } from 'react';

function Pagenation({ currentPage, totalCount }){
    const [pageLen, setPageLen] = useState(10);
    const [pageList, setPageList] = useState([]);
    
    //const { pageVal, pageLabel, flagClick } = pageData;
    const pageData = {
        pageVal: 0,
        pageLabel: '',
        flagClick: 0
    }

    if( currentPage === 1 ){
        pageData.pageVal = 1;
        pageData.pageLabel = '1';
        pageData.flagClick = 0;
        setPageList(pageList.concat(pageData));
    } else {
        pageData = { pageVal: 1, pageLabel: '◀◀', flagClick: 1 };
        setPageList(pageList.concat(pageData));
        
        if(currentPage > pageLen) {
            pageData = { pageVal: currentPage - pageLen, pageLabel: '◀', flagClick: 1 };
        } else {
            pageData = { pageVal: 1, pageLabel: '◀', flagClick: 1 }
        };
        setPageList(pageList.concat(pageData));
    }

    return (
        <div>
            <ul>
                {pageList.map((item, idx) => (
                    <li key={`page${idx}`} onClick={(ev) => setCurrentPage(item.pageVal)}>{item.label}</li>
                ))}
            </ul>
        </div>
    );
};

export default Pagenation;