import React from 'react';

function Picker(pref) {
  return (
    <div className='picker'>
      <select className='picker__select' onChange={pref.onChange} value={pref.value}>
        {pref.option}
      </select>
    </div>
  )
}
export default Picker;