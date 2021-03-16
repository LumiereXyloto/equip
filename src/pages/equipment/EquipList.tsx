import React from 'react';
import { Table, Tag, Space } from 'antd';
import { useList } from './useList';

const { Column, ColumnGroup } = Table;

export const Equipment = () => {
  useList();
  return (
    <div>
      {/* <Table dataSource={[]}>
    <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    </ColumnGroup>
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <>
          {tags.map([] => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <a>Invite {1}</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table> */}
    </div>
  );
};
