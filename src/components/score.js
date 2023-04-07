import React, {useEffect, useState, useCallback} from 'react';

function Score() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h3 className='score-card'>SCORE: {score}</h3>
    </div>
  )
}

export default Score;
