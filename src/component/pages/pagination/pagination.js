import React, { useState, useEffect, useMemo } from 'react';
import Pagination from 'react-bootstrap/Pagination';

const Paginations = ({ 
    total = 0, 
    usersPrePage=5,
    currentPage=1, 
    onPageChange 
}) => {

    const [ totalPages, setTotalPages ] = useState(0)

    useEffect(() => {
        if( total > 0 && usersPrePage >0 )
        setTotalPages(Math.ceil( total / usersPrePage));
    },[ total, usersPrePage])

    const paginationUsers = useMemo( () => {
        const pages = [];
        for(let i = 1; i <= totalPages; i++){
            pages.push(
            <Pagination.Item 
            key={i} 
            active={ i === currentPage} 
            onClick={()=> onPageChange(i)}
            >
                {i}
            </Pagination.Item>)
        } 
        return pages;
    },[totalPages, currentPage])  

    if(totalPages === 0) return null;

    return (
        <Pagination>
            <Pagination.Prev 
                onClick={ () => onPageChange( currentPage -1)} 
                disabled={currentPage === 1}
            />
                {paginationUsers}
            <Pagination.Next 
                onClick={ () => onPageChange( currentPage +1)} 
                disabled={currentPage === totalPages}
            />
        </Pagination>
    )
}

export default Paginations