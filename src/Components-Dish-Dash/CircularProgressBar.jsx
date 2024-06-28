import React from 'react';
import { Flex, Progress } from 'antd';
const twoColors = {
  '0%': '#108ee9',
  '100%': '#87d068',
};

const CircularProgressBar = ({percent}) => {
  return (
    
  <Flex vertical gap="middle">  
  <Flex gap="small" wrap>
    <Progress type="dashboard" percent={percent} strokeColor={twoColors} />
    
  </Flex>
</Flex>
  )
}

export default CircularProgressBar