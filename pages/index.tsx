import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import { Card, Input, Layout, Space, Tag } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Table, { ColumnsType } from 'antd/lib/table';


import { mockTransactions } from '../mocks/transactions'
interface DataType {
  create_at: string;
  id: string;
  price: string;
  address: string;
  type: string;
  status: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Thời gian tạo',
    dataIndex: 'create_at',
    key: 'create_at',
  },
  {
    title: 'Mã đơn hàng',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Số tiền',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Phương thức thanh toán',
    key: 'type',
    dataIndex: 'type',
  },
  {
    title: 'Trạng thái',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => {

      let color = 'geekblue';
      if (status == 'Thất bại') {
        color = 'volcano';
      }
      else if (status == 'Thành công') color = 'green';
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );

    },
  },
];




const Payment: NextPage = () => {
  const [data, setData] = useState<DataType[]>([])
  useEffect(() => {
    setData(mockTransactions(300))
  },[])
  return (
    <>
      <Layout>
        <Content style={{ background: 'white', height: '800px', borderRadius: 10 }}>
          <Card title="Quản lí giao dịch" bordered={false} style={{ width: '100%' }}>
            {/* <Space>  <Input placeholder="Basic usage" /></Space> */}
            <Table columns={columns} dataSource={data} scroll={{ y: 540 }} />
          </Card>
        </Content>
      </Layout>
    </>
  )
}

export default Payment

