import React, { ReactElement, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, InputNumber, Button, Radio, message } from 'antd';
import { useAddOrder } from './hooks';


const AddOrder = (): ReactElement => {
  const { success, submit} = useAddOrder();
  const history = useHistory();
  const [form] = Form.useForm();
  
  useEffect(() => {
    if (success) {
      form.resetFields();
      message.success('提交成功!')
      history.replace('/order');
    }
  }, [success, form, history]);

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
          name="orderName"
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
          label="设备id" 
          name="deviceId"
          rules={[
            {
              type: 'number',
              message: '请输入数字'
            },
            {
              required: true,
              message: '请填写设备ID',
            }
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item 
          label="类型" 
          name="orderType"
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
          name="orderDesc"
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