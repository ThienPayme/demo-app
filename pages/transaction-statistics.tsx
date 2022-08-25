import { Button, Card, Col, DatePicker, Input, Layout, Row, Tooltip } from "antd"
import { Content } from "antd/lib/layout/layout"
import { SearchOutlined } from '@ant-design/icons';
import LineChart from '../components/LineChart'
import moment from "moment";
const TransactionsStatistics = () => {
  return (<>
    <Layout>
      <Content style={{ background: 'white', height: '800px', borderRadius: 10 }}>
        <Card title="Thông kê giao dịch" bordered={false} style={{ width: '100%' }}>
          <Row style={{ margin: '10px 0' }}>
            <DatePicker defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} />
            <DatePicker defaultValue={moment('2022/01/01', 'YYYY/MM/DD')} />
            <Tooltip title="search"  >
              <Button type="primary" shape="circle" icon={<SearchOutlined />} style={{ margin: '0 10px', background: '#00be00' }} />
            </Tooltip>
          </Row>
          <Row>
            <Col xl={12} lg={24}>
              <LineChart title='Thống kê giao dịch theo phương thức' />
            </Col>
            <Col xl={12} lg={24}>
              <LineChart title='Thống kê theo thời gian giao dịch' />
            </Col>
          </Row>
        </Card>
      </Content>
    </Layout>
  </>)
}

export default TransactionsStatistics