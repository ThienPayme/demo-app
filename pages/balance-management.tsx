import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  ExportOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Layout,
  Row,
  Typography,
} from "antd";
import { Content } from "antd/lib/layout/layout";

import { mockHistoryTransaction } from "../mocks/transactions";
const { Title } = Typography;
const listImgs = [
  "http://dev-dashboard.payme.net.vn/assets/img/balances/history-withdraw.svg",
  "http://dev-dashboard.payme.net.vn/assets/img/balances/history-refund.svg",
  "http://dev-dashboard.payme.net.vn/assets/img/balances/ic-mailsms.svg",
];
const BalanceManagement = () => {
  const dataHistory = mockHistoryTransaction(4);
  const renderItemTransaction = (item: any) => (
    <div key={item.key}>
      <Row
        justify="space-between"
        style={{ padding: "10px 20px" }}
        align="middle"
      >
        <Col>
          <Row align="middle">
            <Col>
              <Avatar
                size={39}
                src={listImgs[item.img]}
                style={{ marginRight: 19 }}
              />
            </Col>
            <Col>
              <div>
                <Title level={5} style={{ margin: 0 }}>
                  Title
                </Title>
              </div>
              <div>
                <span>{item.create_at}</span>
                <span>Mã giao dịch : {item.id}</span>
              </div>
              <div> Nơi rút về: Ví PayME-{item.code}</div>
            </Col>
          </Row>
        </Col>
        <Col>
          <Title level={4}>{item.price}</Title>
        </Col>
      </Row>
      <Divider style={{ margin: "0" }} />
    </div>
  );

  const renderActionHistory = (
    <>
      <Button icon={<FilterOutlined />} style={{ margin: "0 15px" }}>
        Lọc
      </Button>
      <Button type="primary" ghost icon={<ExportOutlined />}>
        Xuất File
      </Button>
    </>
  );
  return (
    <Layout>
      <Content style={{ background: "white", height: "800px" }}>
        <Card title="Quản lí số dư" bordered={false} style={{ width: "100%" }}>
          <Row justify="center">
            <Col xl={13} lg={24}>
              <Card
                style={{ borderRadius: 12, height: 120, marginBottom: "20px" }}
              >
                <Row justify="space-between">
                  <Col style={{ display: "flex" }}>
                    <Avatar
                      size={62}
                      src="http://dev-dashboard.payme.net.vn/assets/img/balances/ic-balances.png"
                    />
                    <Row
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingLeft: 20,
                      }}
                    >
                      <Col>
                        <Title level={5}> Số dư hiện có</Title>
                      </Col>
                      <Col>
                        <Title level={2}> 296,271,400 đ</Title>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Button
                      size="large"
                      type="primary"
                      icon={<ArrowDownOutlined />}
                      style={{
                        borderRadius: 12,
                        background: "#e2fee5",
                        color: "#00be00",
                        border: "#fff",
                        margin: "0 10px",
                      }}
                    >
                      Nạp tiền
                    </Button>
                    <Button
                      size="large"
                      type="primary"
                      icon={<ArrowUpOutlined />}
                      style={{
                        borderRadius: 12,
                        background: "#e6f6fa",
                        color: "#39a7ff",
                        border: "#fff",
                        margin: "0 10px",
                      }}
                    >
                      Rút tiền
                    </Button>
                  </Col>
                </Row>
              </Card>
              <Card
                title="Lịch sử giao dịch"
                extra={renderActionHistory}
                style={{ padding: 0 }}
              >
                {dataHistory.map((item) => renderItemTransaction(item))}
              </Card>
            </Col>
          </Row>
        </Card>
      </Content>
    </Layout>
  );
};

export default BalanceManagement;
