import React from 'react'
import CountUp from 'react-countup';

const CountUpComponent = ({start,end,duration}) => {
  return (
    
        <CountUp start={start} end={end} duration={10}/>
   
  )
}

export default CountUpComponent