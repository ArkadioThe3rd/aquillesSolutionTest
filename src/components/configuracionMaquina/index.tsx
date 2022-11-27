/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Col, Row, Checkbox, Form, Input, Button, Select } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { IServicioDataBase } from '../../services/interface';

export interface IConfiguracionMaquina extends IServicioDataBase {
  eliminar(id: number): void;
  editar({
    name,
    code,
    active,
    description,
    type,
    id,
  }: IServicioDataBase): void;
}

const ConfiguracionMaquina = ({
  id,
  name,
  code,
  active,
  description,
  type,
  eliminar,
  editar,
}: IConfiguracionMaquina) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleDelete = () => {
    eliminar(id);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handlerFinish = (e: any) => {
    const variables = {
      name: e.name,
      code: e.code,
      type: e.type,
      description: e.description,
      id,
      active,
    };
    editar(variables);
    handleEdit();
  };

  return (
    <div className="w-full">
      <Form onFinish={handlerFinish}>
        <Row className="bg-white px-2 py-4 text-4xl">
          <Col span={4}>
            {isEdit ? (
              <Form.Item
                name="name"
                rules={[{ required: true }]}
                wrapperCol={{ span: 20 }}
              >
                <Input />
              </Form.Item>
            ) : (
              <span className="text-blue-700 text-base">{name}</span>
            )}
          </Col>
          <Col span={4}>
            {isEdit ? (
              <Form.Item
                name="code"
                rules={[{ required: true }]}
                wrapperCol={{ span: 20 }}
              >
                <Input />
              </Form.Item>
            ) : (
              <span className="bg-red-400 py-0.5 px-3 rounded-md border-2 border-red-700 text-red-900 text-base">
                {code}
              </span>
            )}
          </Col>
          <Col span={4}>
            {isEdit ? (
              <Form.Item
                name="type"
                rules={[{ required: true }]}
                wrapperCol={{ span: 20 }}
              >
                <Select>
                  <Select.Option value="Type1">Type 1</Select.Option>
                  <Select.Option value="Type2">Type 2</Select.Option>
                  <Select.Option value="Type3">Type 3</Select.Option>
                </Select>
              </Form.Item>
            ) : (
              <span className="py-0.5 px-3 bg-green-400 border-2 rounded-md border-green-700 text-green-900 text-base">
                {type}
              </span>
            )}
          </Col>
          <Col span={6}>
            {isEdit ? (
              <Form.Item
                name="description"
                rules={[{ required: true }]}
                wrapperCol={{ span: 20 }}
              >
                <Input />
              </Form.Item>
            ) : (
              <span className="text-base">{description}</span>
            )}
          </Col>
          <Col span={4} className="flex justify-center">
            <Checkbox />
          </Col>
          <Col span={2} className="flex justify-center">
            {isEdit ? (
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            ) : (
              <span>
                <button type="button" aria-label="Edit graph">
                  <EditFilled
                    style={{ fontSize: '25px' }}
                    onClick={handleEdit}
                  />
                </button>
                <button type="button" aria-label="Delete graph">
                  <DeleteFilled
                    onClick={handleDelete}
                    style={{ fontSize: '25px' }}
                  />
                </button>
              </span>
            )}
          </Col>
        </Row>
      </Form>
      <hr />
    </div>
  );
};

export default ConfiguracionMaquina;
