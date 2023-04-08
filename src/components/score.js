import React, {useContext} from 'react';
import { ScoreContext } from '../App';

function Score() {
  const {score, setScore} = useContext(ScoreContext);

  return (
    <div>
      <h3 className='score-card'>SCORE: {score}</h3>
    </div>
  )
}

export default Score;
