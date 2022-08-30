
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

    const [data, setData] = useState<Partial<DataType>>()

    useEffect(() => {
        if (onAdd) setData({
            status: "Thành công",
            type: "Quét QR"
        })
        else setData({
            ...defaultData
        })

    }, [defaultData, onAdd])


    const handleChangeInput = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [`${key}`]: e.target.value })

    }
    return (
        <>

            <Modal title={onAdd ? 'Thêm' : 'Sửa'} visible={isModalVisible} onOk={() => onSave(data)} onCancel={onCancel}>
                <Input placeholder="số tiền " addonBefore={'Số tiền: '} value={data?.price} onChange={handleChangeInput('price')} />
                <br />
                <br />
                <Input placeholder="địa chỉ " addonBefore={'Địa chỉ: '} value={data?.address} onChange={handleChangeInput('address')} />
                <br />
                <br />
                <Form.Item
                    label="Phương thức thanh toán"
                    name="username"
                >
                    <Input.Group compact>
                        <Select defaultValue="Thẻ ATM" onChange={(value) => { setData({ ...data, type: value }) }}>
                            <Option value="Ví Momo">Ví Momo</Option>
                            <Option value="Thẻ ATM">Thẻ ATM</Option>
                            <Option value="Quét QR">Quét QR</Option>
                        </Select>

                    </Input.Group>
                </Form.Item>

                <Form.Item
                    label="Trạng thái"
                    name="username"
                >
                    <Input.Group compact>
                        <Select defaultValue="Thành công" onChange={(value) => { setData({ ...data, status: value }) }}>
                            <Option value="Thành công">Thành công</Option>
                            <Option value="Thất bại">Thất bại</Option>
                            <Option value="Đang xử lí">Đang xử lí</Option>
                        </Select>

                    </Input.Group>
                </Form.Item>


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