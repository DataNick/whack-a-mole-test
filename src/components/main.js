import React from 'react';
import Grid from '../components/grid';
import Score from '../components/score';

function Main() {

  return (
    <div>
      <div className='header'>
        <h1 className='title'>Holey Moley</h1>
        <Score/>
      </div>
      <Grid number={15}/>
    </div>
  )
}

export default Main;
