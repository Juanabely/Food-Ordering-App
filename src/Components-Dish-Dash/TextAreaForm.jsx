import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
  
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const TextAreaForm = () => (
  <Form
    {...layout}
    className='flex flex-col gap-7'
    style={{
        height:1000
    }}
    name="nest-messages"
    onFinish={onFinish}
    validateMessages={validateMessages}
  >
    <Form.Item
    className='text-yellow-500 h-[50px]'
      name={['food-name']}
      label={<label className='text-white'>Food Name</label>}
      rules={[
        {
          required: true,
        },
      ]}
      
    >
      <Input />
    </Form.Item>

    <Form.Item
      name={['price']}
      label={<label className='text-white'>Price</label>}
      rules={[
        {
          type: 'number',
          min: 0,
          max: 5000,
          required:true
        },
      ]}
    >
      <InputNumber />
    </Form.Item>
    
    <Form.Item name={['detail']}
     label={<label className='text-white'>Food Detail</label>}
     rules={[
        {
            required:true
        }
     ]}
     >
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit" className='bg-red-700 hover:!bg-orange-700 w-[180px] h-[50px]'>
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default TextAreaForm;