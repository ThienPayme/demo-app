import {
    AppstoreOutlined,
    TransactionOutlined,
    ControlOutlined
  } from '@ant-design/icons';

export const routes = [
    {
        icon: AppstoreOutlined,
        label: 'Quản lí giao dịch',
        path: '/'
    },
    {
        icon: ControlOutlined,
        label: 'Thống kê giao dịch',
        path: '/transaction-statistics'
    },
    {
        icon: TransactionOutlined,  
        label: 'Quản lí số dư',
        path: '/balance-management'
    },
    {
        icon: TransactionOutlined,
        label: 'Layout 3 row',
        path: '/three-column'
    },
    {
        icon: TransactionOutlined,
        label: 'Push Notification',
        path: '/push-notification'
    },
    {
      icon: TransactionOutlined,
      label: 'Webcam Detection',
      path: '/webcam-detection'
  },
]