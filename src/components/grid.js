import React, {useEffect, useState, useCallback} from 'react';
import GridItem from './grid_item';


function Grid({number}) {
  const [status, setStatus] = useState(null);
  const array = Array(number).fill();

  useEffect(() => {
    let timeId = setInterval(function() {
      var item_id = Math.floor(Math.random()*15);
      console.log(item_id)
      setStatus(item_id)
    }, 1000)
    return () => clearTimeout(timeId);
  },[status])


  return (
    <div className='grid'>
    {array.map((e, idx)=> {
      return <GridItem status={status} index={idx} />
    })}
    </div>
  )
}

export default Grid;
