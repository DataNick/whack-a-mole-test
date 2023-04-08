import React, {createContext, useEffect, useState, useCallback} from 'react';
import GridItem from './grid_item';

export const StatusContext = createContext()

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
    <StatusContext.Provider value={{status, setStatus}}>
      <div className='grid'>
      {array.map((e, idx)=> {
        return <GridItem status={status} index={idx} />
      })}
      </div>
    </StatusContext.Provider>
  )
}

export default Grid;
