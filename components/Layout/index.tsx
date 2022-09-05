import { Grid, Layout as LayoutApp } from "antd";

import HeaderApp from "../HeaderApp";
import SiderApp from "../SiderApp";

const { Content } = LayoutApp;
const { useBreakpoint } = Grid;

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  const screens = useBreakpoint();

  const { children } = props;
  const leftContert = screens.lg ? 280 : 80;
  return (
    <LayoutApp>
      <HeaderApp />
      <SiderApp />
      <Content
        style={{
          marginTop: 64,
          marginLeft: leftContert,
          overflow: "hidden",
          padding: 25,
        }}
      >
        {children}
      </Content>
    </LayoutApp>
  );
}
