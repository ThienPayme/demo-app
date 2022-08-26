import { Button, Card, Col, DatePicker, Input, Layout, Row, Tooltip } from "antd"
import { Content } from "antd/lib/layout/layout"
import { SearchOutlined } from '@ant-design/icons';
import LineChart from '../components/LineChart'
import moment from "moment";
const ThreeColumn = () => {
    return (<>
        <Layout>
            <Content style={{}}>

                <Row><Col span={24}><div className="box"> 1 column  
                </div>  </Col></Row>
                <Row >
                    <Col span={12}  > <div className="box">2 column
                    </div></Col>
                    <Col span={12} > <div className="box">2 column
                    </div></Col>
                </Row>
                <Row><Col span={8}><div className="box">3 column
                </div></Col>
                    <Col span={8}><div className="box">3 column
                    </div></Col>
                    <Col span={8}><div className="box">3 column
                    </div></Col></Row>
            </Content>
        </Layout>
    </>)
}

export default ThreeColumn