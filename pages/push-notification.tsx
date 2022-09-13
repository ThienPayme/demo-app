import { Button, Card, Form, Input, Layout } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Content } from "antd/lib/layout/layout";
import { useEffect } from "react";
import OneSignal from "react-onesignal";
import { pushNoti } from "../apis/pushNotification";
const PushNotfication = () => {
  useEffect(() => {
    OneSignal.init({
      appId: "86273b1f-c191-4744-8452-dcd35e049a97",
    });
  }, []);

  const handleSubmitSuccess = (value: any) => {
    pushNoti(value);
  };
  const handleSubmitFail = (value: any) => {};
  return (
    <>
      <Layout>
        <Content
          style={{ background: "white", height: "800px", borderRadius: 10 }}
        >
          <Card
            title="Push Notification"
            bordered={false}
            style={{ width: "100%" }}
          >
            <Form
              name="basic"
              labelCol={{ span: 2 }}
              wrapperCol={{ span: 22 }}
              initialValues={{
                remember: true,
                title: "Your Title",
                content: "This is content",
              }}
              onFinish={handleSubmitSuccess}
              onFinishFailed={handleSubmitFail}
              autoComplete="off"
            >
              <Form.Item
                label="Title"
                name="title"
                rules={[
                  { required: true, message: "Please input your Title!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Content" name="content">
                <TextArea rows={4} />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Content>
      </Layout>
    </>
  );
};

export default PushNotfication;
