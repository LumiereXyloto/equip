import React from 'react';
import { Table, Tag, Space } from 'antd';
import { useList } from './useList';

const { Column, ColumnGroup } = Table;

export const Equipment = () => {
  const { loading, data } = useList();
  return (
    <div>
      <Table dataSource={data} loading={loading}>
        <Column title='ID' dataIndex='id' key='id' />
        <Column title='设备名称' dataIndex='name' key='name' />
        <Column title='设备类型' dataIndex='type' key='type' />
        <Column title='负责人' dataIndex='duty' key='duty' />
        <Column title='设备状态' dataIndex='status' key='status' />
        <Column title='设备地址' dataIndex='location' key='location' />
        <Column title='安装时间' dataIndex='installTime' key='installTime' />
        <Column title='生产厂家' dataIndex='producer' key='producer' />
        <Column title='生产时间' dataIndex='produceTime' key='produceTime' />
      </Table>
    </div>
  );
};
