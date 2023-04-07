import React from 'react';

function GridItem({status, index}) {

  return (
    <div className="round-hole" id={status == index ? 'on' : 'off'}>

    </div>
  )
}
export default GridItem;
