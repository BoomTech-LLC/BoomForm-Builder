import React from "react";

const Counter = ({currentPage, pagesLangth}) => <div className='boomForm-paginationCount'>
{currentPage + 1 > pagesLangth ? pagesLangth : currentPage + 1 }/{pagesLangth || 1}
</div>

export default Counter