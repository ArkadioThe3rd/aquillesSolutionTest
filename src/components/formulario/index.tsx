/* eslint-disable no-unused-vars */
import { Button, Form, Input, Select, Checkbox, InputNumber } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { IConfiguracionDataBase } from '../../services/interface';
// import { IConfiguracionDataBase } from '../../services/interface';

interface Iformulario {
  crearData(e: IConfiguracionDataBase): void;
}

const Formulario = ({ crearData }: Iformulario) => {
  const handlerFinish = (e: any) => {
    const variables = {
      name: e.name,
      code: e.code,
      type: e.type,
      description: e.description,
      active: e.active,
    };
    crearData(variables);
  };

  return (
    <Form onFinish={handlerFinish} name="CreacionConfig" labelCol={{ span: 4 }}>
      <Form.Item label="Name" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Code" name="code" rules={[{ required: true }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Type"
        name="type"
        rules={[{ required: true }]}
        wrapperCol={{ span: 5 }}
      >
        <Select>
          <Select.Option value="Type1">Type 1</Select.Option>
          <Select.Option value="Type2">Type 2</Select.Option>
          <Select.Option value="Type3">Type 3</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true }]}
      >
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item
        name="active"
        valuePropName="checked"
        wrapperCol={{ offset: 4, span: 16 }}
      >
        <Checkbox className="text-red-600">
          (Este campo no se podra editar)
        </Checkbox>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Formulario;
