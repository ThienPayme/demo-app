
import { Button, Cascader, Form, Input, InputNumber, Modal, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Option } from 'antd/lib/mentions';

interface DataType {
	create_at: string;
	id: string;
	price: string;
	address: string;
	type: string;
	status: string
}

const ModalEdit = (props: Props) => {
	const { isModalVisible, onSave, onCancel, defaultData, onAdd } = props

	useEffect(() => {
		if (onAdd) {
			form.setFieldsValue({
				status: "Thành công",
				type: "Quét QR",
				address: '',
				price: ''
			})
		}
		else {
			form.setFieldsValue({ ...defaultData })
		}


	}, [defaultData, onAdd])


	const onFinish = (values: any) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	const [form] = Form.useForm();


	return (
		<>
			<Modal title={onAdd ? 'Thêm' : 'Sửa'} visible={isModalVisible} onCancel={onCancel} onOk={() => {
				form
					.validateFields()
					.then(values => {
						form.resetFields();
						onSave(values);
					})
					.catch(info => {
						console.log('Validate Failed:', info);
					});
			}}>
				<Form
					form={form}
					name="basic"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"

				>
					<Form.Item label='So tien' name={"price"} rules={[{ required: true, message: 'Field is required' }]}>
						<Input placeholder="số tiền " addonBefore={'Số tiền: '} />
					</Form.Item>
					<Form.Item label='Dia chi' name={"address"} rules={[{ required: true, message: 'Field is required' }]}>
						<Input placeholder="địa chỉ" addonBefore={'Địa chỉ: '} />
					</Form.Item>

					<Form.Item
						label="Phương thức thanh toán"
						name="type"
					>
						<Select defaultValue="Thẻ ATM" >
							<Option value="Ví Momo">Ví Momo</Option>
							<Option value="Thẻ ATM">Thẻ ATM</Option>
							<Option value="Quét QR">Quét QR</Option>
						</Select>

					</Form.Item>

					<Form.Item
						label="Trạng thái"
						name="status"
					>
						<Select defaultValue="Thành công" >
							<Option value="Thành công">Thành công</Option>
							<Option value="Thất bại">Thất bại</Option>
							<Option value="Đang xử lí">Đang xử lí</Option>
						</Select>

					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

interface Props {
	isModalVisible: boolean,
	onCancel: any,
	onSave: any,
	defaultData: DataType | undefined,
	onAdd: any,

}

export default ModalEdit;