import React, { ReactElement } from 'react'
import { Table, Space, Button, notification } from 'antd';
import { Order, Status } from './types/order';
import { useOrderList } from './hooks';
import { OrderStatus } from './components';

const { Column } = Table;



const OrderList = (): ReactElement => {
  const { loading, list, submit } = useOrderList();


  const excute = async (status: string, order: Order) => {
    const result = await submit({...order, orderStatus: status});
    if (result) {
      notification.open({
        message: '执行成功',
        description: '你已经成功执行了工单!',
        type: 'success',
      });
    } else {
      notification.open({
        message: '执行失败',
        description: '执行出现问题，请联系管理员',
        type: 'error',
      })
    }
  }
  return (
    <>
      <Table 
        dataSource={list} 
        loading={loading} 
        rowKey="id"
        expandable={{
          expandedRowRender: record => <p>工单详情:{record.orderDesc}</p>
        }}
      >
        <Column title="工单ID" dataIndex="id" key="id" />
        <Column title="工单名称" dataIndex="orderName" key="order_name" />
        <Column title="设备ID" dataIndex="deviceId" key="equip_id" />
        <Column title="类型" dataIndex="orderType" key="order_type" />
        <Column title="发起人" dataIndex="creator" key="creator" />
        <Column title="执行人" dataIndex="handler" key="handler" />
        <Column 
          title="状态" 
          dataIndex="orderStatus" 
          key="orderStatus"
          render={(text: Status) => {
            return <OrderStatus status={text ? text : 1} />
          }
          }
        />
        <Column 
          title="操作" 
          key="action"
          render={(text, record: Order) => (
            <Space size="middle">
              <Button type="link" disabled={record.orderStatus === 4} onClick={() => {excute('4', record)}}>执行</Button>
              {/* <Button type="link" disabled={record.order_status === 4}>拒绝</Button> */}
            </Space>
          )}
        />
      </Table>
    </>
  )
}

export default OrderList;