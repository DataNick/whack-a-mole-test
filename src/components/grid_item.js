import React from 'react';

function GridItem({status, key, index}) {

  function clickItem(e) {
    let itemStatus =  e.target.getAttribute('id')
    console.log('clicked',e.target.getAttribute('id'))
    if (itemStatus == 'on') {
      console.log('index', index)
      // setStatus to off
      // increment score
    }
  }

  return (
    <div className="round-hole" id={status === index ? 'on' : 'off'} onClick={clickItem}>

    </div>
  )
}
export default GridItem;
