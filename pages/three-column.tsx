import { Col, Layout, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import BalanceManagement from "./balance-management";
import Payment from "./index";
import TransactionsStatistics from "./transaction-statistics";
const ThreeColumn = () => {
  return (
    <>
      <Layout>
        <Content style={{ minWidth: 800 }}>
          <Row>
            <Col span={24}>
              <Payment />
            </Col>
          </Row>
          <Row style={{ marginTop: 10 }}>
            <Col span={24}>
              <Row>
                <TransactionsStatistics />
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: 10 }}>
            <BalanceManagement />
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default ThreeColumn;
