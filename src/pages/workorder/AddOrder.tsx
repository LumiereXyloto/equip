import React, { ReactElement, useEffect } from 'react'
import { Form, Input, Button, Radio, message } from 'antd';
import { PostOrder } from './types/order';
import { useAddOrder } from './hooks/useAddOrder';


const AddOrder = (): ReactElement => {
  const { success, submit} = useAddOrder();
  const [form] = Form.useForm();
  
  useEffect(() => {
    if (success) {
      form.resetFields();
      message.success('提交成功!')
    }
  }, [success]);

  return (
    <>
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 6 }}
        layout="horizontal"
        form={form}
        onFinish={submit}
      >
        <Form.Item 
          label="工单名称" 
          name="order_name"
          rules={[
            {
              type: 'string',
              message: '请输入字符串'
            },
            {
              required: true,
              message: '请填写工单名称',
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          label="类型" 
          name="order_type"
          initialValue="1"
        >
          <Radio.Group>
            <Radio.Button value="1">采购设备</Radio.Button>
            <Radio.Button value="2">安装设备</Radio.Button>
            <Radio.Button value="3">维修设备</Radio.Button>
            <Radio.Button value="4">折旧设备</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item 
          label="工单详情" 
          name="order_desc"
          rules={[
            {
              type: 'string',
              message: '请输入字符串'
            },
            {
              required: true,
              message: '请填写工单详情',
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          label="发起人" 
          name="creator"
          rules={[
            {
              type: 'string',
              message: '请输入字符串'
            },
            {
              required: true,
              message: '请填写发起人',
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          label="执行人" 
          name="handler"
          rules={[
            {
              type: 'string',
              message: '请输入字符串'
            },
            {
              required: true,
              message: '请填写执行人',
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交工单
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default AddOrder;