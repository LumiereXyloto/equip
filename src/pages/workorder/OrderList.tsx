import React, { ReactElement } from 'react'
import { Table, Space, Button } from 'antd';
import { Order, Status } from './types/order';
import { getOrders } from './api/order';
import { useOrderList } from './hooks/useOrderList';
import { OrderStatus } from './components';

const { Column } = Table;



const OrderList = (): ReactElement => {
  const { loading, list } = useOrderList();
  return (
    <>
      <Table 
        dataSource={list} 
        loading={loading} 
        rowKey="id"
        expandable={{
          expandedRowRender: record => <p>工单详情:{record.order_desc}</p>
        }}
      >
        <Column title="工单ID" dataIndex="id" key="id" />
        <Column title="工单名称" dataIndex="order_name" key="order_name" />
        <Column title="设备ID" dataIndex="equip_id" key="equip_id" />
        <Column title="类型" dataIndex="order_type" key="order_type" />
        <Column title="发起人" dataIndex="creator" key="creator" />
        <Column title="执行人" dataIndex="handler" key="handler" />
        <Column 
          title="状态" 
          dataIndex="order_status" 
          key="order_status"
          render={(text: Status) => {
            return <OrderStatus status={text} />
          }
          }
        />
        <Column 
          title="操作" 
          key="action"
          render={(text, record: Order) => (
            <Space size="middle">
              <Button type="link" disabled={record.order_status === 4}>通过</Button>
              <Button type="link" disabled={record.order_status === 4}>拒绝</Button>
            </Space>
          )}
        />
      </Table>
    </>
  )
}

export default OrderList;