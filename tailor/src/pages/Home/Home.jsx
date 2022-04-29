import React from 'react'
import './Home.css';
import Feactureinfo from '../../compoent/feactureinfo/feactureinfo';
import Chart from '../../compoent/chart/Chart';
function Home() {
  return (
    <div className='Home'>

        <Feactureinfo/>
        <Chart/>
    </div>
  )
}

export default Home