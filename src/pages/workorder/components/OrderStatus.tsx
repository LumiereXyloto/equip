import React, { ReactElement } from 'react'
import { Tag } from 'antd';
import { Status } from '../types/order';
const RenderColor = {
  1: {
    color: '#2db7f5',
    message: '发起'
  },
  2: {
    color: '#108ee9',
    message: '处理中'
  },
  3: {
    color: '#87d068',
    message: '处理完成',
  },
  4: {
    color: '#f50',
    message: '结束'
  }
}

interface PropsType {
  status: Status;
}

const OrderTag = (props: PropsType): ReactElement => {
  const { color, message } = RenderColor[props.status];
  return (
    <Tag color={color} >{message}</Tag>
  )
}

export default OrderTag;