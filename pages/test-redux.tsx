import { Button } from "antd";
import { useTranslation } from 'react-i18next';
const TestRedux = () => {
  const {t} = useTranslation()
  return <>
    <Button type="primary">{t('content.login')}</Button>
  </>;
};

export default TestRedux;
