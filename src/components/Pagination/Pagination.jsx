import React from 'react';

function Pagination(pref) {
  return (
    <div className='pagination'>
        <button className='pagination__btn' onClick={pref.btnPrev}>Previous</button>
        <button className='pagination__btn' onClick={pref.btnNext}>Next</button>  
      </div>  
  )
}

export default Pagination;