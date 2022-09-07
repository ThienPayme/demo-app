import { BellOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Layout, Popover, Row, Select, Typography } from "antd";
import { Option } from "antd/lib/mentions"; 
import React from "react";
import { useTranslation } from "react-i18next";

const { Header } = Layout;
const { Title } = Typography;

const HeaderApp = () => {
  const { i18n } = useTranslation()
  const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        background: "white",
        padding: "0 15px",
        boxShadow: "0px 2px 30px #9299b81a",
      }}
    >
      <Row justify="space-between" align="top">
        <Col span={18}>
          <Row align="middle">
            <Col>
              <Avatar
                size={50}
                src="http://10.8.36.251:5000/assets/img/settingProfiles/logo-payME.png"
              />
            </Col>
            <Col>
              <Title level={3} style={{ marginBottom: 0, paddingLeft: "15px" }}>
                {" "}
                Pham Anh Thien
              </Title>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row justify="end">
            <Col>
              <Select
                defaultValue="vi"
                size="large"
                onChange={handleChangeLanguage}
              >
                <Option value="vi">Vietnamese</Option>
                <Option value="en">English</Option>
              </Select>
            </Col>
            <Col>
              <Popover
                placement="bottomLeft"
                title={"Profile"}
                content={content}
                trigger="click"
              >
                <Avatar
                  size="large"
                  icon={<UserOutlined />}
                  style={{ margin: "0 15px" }}
                />
              </Popover>
            </Col>

            <Col>
              <Popover
                placement="bottomLeft"
                title={"Notification"}
                content={content}
                trigger="click"
              >
                <Avatar size="large" icon={<BellOutlined />} />
              </Popover>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

const DemoBox: React.FC<{ children: React.ReactNode; value: number }> = (
  props
) => <p className={`height-${props.value}`}>{props.children}</p>;

export default HeaderApp;
