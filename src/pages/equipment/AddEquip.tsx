import React, { useEffect } from 'react';
import { Form, Button, Input, message } from 'antd';
import { useAdd } from './useAdd';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};

export const Add = () => {
  const { submit, success } = useAdd();

  const [form] = Form.useForm();

  useEffect(() => {
    if (success) {
      message.success('录入成功');
      form.resetFields();
    }
  }, [success]);

  const handleFinish = (values: any) => {
    submit(values);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#fff',
      }}
    >
      <Form
        onFinish={handleFinish}
        {...layout}
        style={{ width: 560 }}
        form={form}
      >
        <Form.Item
          label='设备名称'
          name='name'
          rules={[{ required: true, message: '必填' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='设备类型'
          name='type'
          rules={[{ required: true, message: '必填' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='生产厂家'
          name='producer'
          rules={[{ required: true, message: '必填' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='生产时间'
          name='produceTime'
          rules={[{ required: true, message: '必填' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='设备地址'
          name='location'
          rules={[{ required: true, message: '必填' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='设备状态'
          name='status'
          rules={[{ required: true, message: '必填' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='负责人'
          name='duty'
          rules={[{ required: true, message: '必填' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='安装时间'
          name='installTime'
          rules={[{ required: true, message: '必填' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout} label='' name=''>
          <Button type='primary' htmlType='submit'>
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
