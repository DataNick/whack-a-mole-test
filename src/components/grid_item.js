import React, {useContext} from 'react';
import { ScoreContext } from '../App';
import { StatusContext } from './grid';

function GridItem({index}) {
  const {score, setScore} = useContext(ScoreContext);
  const {status, setStatus} = useContext(StatusContext);

  function clickItem(e) {
    let itemStatus =  e.target.getAttribute('id')
    console.log('clicked',e.target.getAttribute('id'))
    if (itemStatus == 'on') {
      console.log('index', index)
      let newScore = score + 1
      setScore(newScore);
      setStatus('off');
    }
  }

  return (
    <div className="round-hole" id={status === index ? 'on' : 'off'} onClick={clickItem}>

    </div>
  )
}
export default GridItem;
