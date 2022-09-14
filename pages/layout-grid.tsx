import { Button, Col, Grid, Layout, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useEffect, useState } from "react";
const { useBreakpoint } = Grid;
import BalanceManagement from "./balance-management";
import Payment from "./index";
import TransactionsStatistics from "./transaction-statistics";
const ThreeColumn = () => {
	const [layout , setLayout] = useState<number>(12)
	const screens = useBreakpoint(); 
	const handleChangeLayout = () =>{
		if(layout===12) setLayout(24)
		else setLayout(12)
	}
	useEffect(()=>{
		console.log(screens)
		if(screens.xxl) setLayout(12)
		else setLayout(24)
	},[screens])
  return (
    <>
      <Layout>
        <Content style={{ minWidth: 800 }}>
				<Button type="ghost" onClick={handleChangeLayout}>Change layout</Button>
          <Row gutter={10}>
            <Col span={layout}>
              <Row style={{ marginTop: 10 }}>
                <Col span={24}>
                  <Payment />
                </Col>
              </Row>
            </Col>
            <Col span={layout || 12}>
              <Row style={{ marginTop: 10  }}>
                <BalanceManagement width={24}/>
              </Row>
            </Col>
            <Col span={24}>
              <Row style={{ marginTop: 10  }}>
                <Col span={24}>
                  <Row>
                    <TransactionsStatistics />
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default ThreeColumn;
