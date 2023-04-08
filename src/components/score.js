import React, {useContext} from 'react';
import { MainContext } from '../App';

function Score() {
  const {score, setScore} = useContext(MainContext);

  return (
    <div>
      <h3 className='score-card'>SCORE: {score}</h3>
    </div>
  )
}

export default Score;
