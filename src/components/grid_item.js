import React, {useContext} from 'react';
import { MainContext } from '../App';

function GridItem({status, index}) {
  const {score, setScore} = useContext(MainContext);

  function clickItem(e) {
    let itemStatus =  e.target.getAttribute('id')
    console.log('clicked',e.target.getAttribute('id'))
    if (itemStatus == 'on') {
      console.log('index', index)
      let newScore = score + 1
      setScore(newScore);
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
