import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Layout, Popconfirm, Tag, Tooltip } from "antd";
import { Content } from "antd/lib/layout/layout";
import Table, { ColumnsType } from "antd/lib/table";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ModalEdit from "../components/ModalEdit";
import { useAppDispatch, useAppSelector } from "../redux/hook";

// import api
import Search from "antd/lib/input/Search";
import moment from "moment";
 
import {
  fetchData,
  updateData,
  deleteData,
  createData,
  searchById
} from "../features/transaction/transactionSlice";
import { useTranslation } from "react-i18next";

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
}, dataFieldName: any): ColumnsType<DataType> => {
  return [
    {
      title: dataFieldName.createdAt,
      dataIndex: "create_at",
      key: "create_at",
    },
    {
      title: dataFieldName.idOrder,
      dataIndex: "id",
      key: "id",
    },
    {
      title: dataFieldName.price,
      dataIndex: "price",
      key: "price",
    },
    {
      title: dataFieldName.address,
      dataIndex: "address",
      key: "address",
    },
    {
      title: dataFieldName.method,
      key: "type",
      dataIndex: "type",
    },
    {
      title: dataFieldName.status,
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
      title: dataFieldName.actions,
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
  const [openModelEdit, setOpenModelEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState<DataType>();
  const [onAdd, setOnAdd] = useState(false);
  
  const { t } = useTranslation();

  const { data, loading } = useAppSelector((selector) => selector.transaction);
  const dispatch = useAppDispatch();
  const dataFieldName = t('content.transactionFieldData', { returnObjects: true });

  useEffect(() => {
    dispatch(fetchData());
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
    if (updateValue.id) {
      dispatch(updateData(updateValue));
    } else {
      const newData = {
        ...updateValue,
        create_at: moment().format("MM/DD/YYYY").toString(),
        id: data.length.toString(),
      };
      
      dispatch(createData(newData));
    }
    handleToggleModalEdit(false);
  };
  const handleDelete = (id: string) => () => {
    dispatch(deleteData(id));
  };
  const handleAdd = () => {
    handleToggleModalEdit(true);
    setOnAdd(true);
  };
  const handleSearchById = (id: string) => {
    dispatch(searchById(id))
  };
  const columns = initColumns({ edit: handleEdit, delete: handleDelete }, dataFieldName);

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
          style={{ background: "white", height: "1000px", borderRadius: 10 }}
        >
          <Card
            title={t('content.transactionTitle')}
            bordered={false}
            style={{ width: "100%" }}
            extra={
              <Button
                type="primary"
                size="large"
                style={{ margin: "0 50px", borderRadius: 10 }}
                onClick={handleAdd}
              >
                {t('content.buttonAdd')}
              </Button>
            }
          >
            <Search
              addonBefore="Mã đơn hàng"
              placeholder=""
              allowClear
              onSearch={handleSearchById}
              style={{ width: 304, margin: 20 }}
            />
            <Table
              columns={columns}
              dataSource={data}
              scroll={{ y: 540, x: 1000 }}
              loading={loading}
            />
          </Card>
        </Content>
      </Layout>
    </>
  );
};

export default Payment;
