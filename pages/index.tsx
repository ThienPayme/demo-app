import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Layout, Popconfirm, Tag, Tooltip } from "antd";
import { Content } from "antd/lib/layout/layout";
import Table, { ColumnsType } from "antd/lib/table";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

import ModalEdit from "../components/ModalEdit";

// import api
import Search from "antd/lib/input/Search";
import moment from "moment";
import {
  addTransaction,
  delTransaction,
  editTransaction,
  getTransaction,
} from "../apis/transactions";

interface DataType {
  create_at: string;
  id: string;
  price: string;
  address: string;
  type: string;
  status: string;
}

const initColumns = (action: {
  delete: any;
  edit: any;
}): ColumnsType<DataType> => {
  return [
    {
      title: "Thời gian tạo",
      dataIndex: "create_at",
      key: "create_at",
    },
    {
      title: "Mã đơn hàng",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Số tiền",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phương thức thanh toán",
      key: "type",
      dataIndex: "type",
    },
    {
      title: "Trạng thái",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => {
        let color = "geekblue";
        if (status == "Thất bại") {
          color = "volcano";
        } else if (status == "Thành công") color = "green";
        return (
          <Tag color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Thao tác",
      key: "action",
      dataIndex: "action",
      render: (_, data) => {
        return (
          <>
            <Tooltip title="sửa">
              <Button
                shape="circle"
                icon={<EditOutlined />}
                size="large"
                onClick={action.edit(data)}
              />
            </Tooltip>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={action.delete(data.id)}
            >
              <Button
                shape="circle"
                icon={<DeleteOutlined />}
                size="large"
                style={{ marginLeft: 10 }}
              />
            </Popconfirm>
          </>
        );
      },
    },
  ];
};

const Payment: NextPage = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [openModelEdit, setOpenModelEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState<DataType>();
  const [onAdd, setOnAdd] = useState(false);
  useEffect(() => {
    setLoading(true);
    getTransaction({}).then((res) => {
      setData(res.map((item: any, idx: number) => ({ ...item, key: idx })));
      setLoading(false);
    });
  }, []);

  const handleToggleModalEdit = (value: boolean) => {
    setOpenModelEdit(value);
  };

  const handleEdit = (data: DataType) => () => {
    handleToggleModalEdit(true);
    setOnAdd(false);
    setDataEdit(data);
  };
  const handleSave = (updateValue: DataType) => {
    console.log(updateValue);
    if (updateValue.id) {
      setData([
        ...data.map((item) => {
          if (item.id == dataEdit?.id) return updateValue;
          return item;
        }),
      ]);
      editTransaction(updateValue.id, updateValue);
    } else {
      const newData = {
        ...updateValue,
        create_at: moment().format("MM/DD/YYYY").toString(),
        id: data.length.toString(),
      };
      addTransaction(newData);
      setData([newData, ...data]);
    }
    handleToggleModalEdit(false);
  };
  const handleDelete = (id: string) => () => {
    setData([...data.filter((item) => item.id !== id)]);
    delTransaction(id);
  };
  const handleAdd = () => {
    handleToggleModalEdit(true);
    setOnAdd(true);
  };
  const handleSearchById = (id: string) => {
    setLoading(true);
    getTransaction({ id }).then((res) => {
      setData(res);
      setLoading(false);
    });
  };
  const columns = initColumns({ edit: handleEdit, delete: handleDelete });

  return (
    <>
      <ModalEdit
        isModalVisible={openModelEdit}
        onCancel={() => handleToggleModalEdit(false)}
        onSave={handleSave}
        defaultData={dataEdit}
        onAdd={onAdd}
      />
      <Layout>
        <Content
          style={{ background: "white", height: "800px", borderRadius: 10 }}
        >
          <Card
            title="Quản lí giao dịch"
            bordered={false}
            style={{ width: "100%" }}
            extra={
              <Button
                type="primary"
                size="large"
                style={{ margin: "0 50px", borderRadius: 10 }}
                onClick={handleAdd}
              >
                Thêm
              </Button>
            }
          >
            <Search
              addonBefore="id"
              placeholder="input search text"
              allowClear
              onSearch={handleSearchById}
              style={{ width: 304, margin: 20 }}
            />
            <Table
              columns={columns}
              dataSource={data}
              scroll={{ y: 540 }}
              loading={loading}
            />
          </Card>
        </Content>
      </Layout>
    </>
  );
};

export default Payment;
