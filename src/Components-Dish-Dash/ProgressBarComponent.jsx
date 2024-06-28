import React from 'react'
import { Flex, Progress } from 'antd';

const ProgressBarComponent = ({percent}) => {
  return (
    <Flex gap="small" vertical>
    <Progress
      percent={percent}
      percentPosition={{ align: 'center', type: 'inner' }}
      size={[200, 20]}
      strokeColor={percent < 30 ? 'red' : percent < 60 ? 'yellow' : 'green'}
    />
  </Flex>
  )
}

export default ProgressBarComponent