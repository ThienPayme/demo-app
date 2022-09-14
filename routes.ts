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
        label: 'Layout Grid',
        path: '/layout-grid'
    },
    {
        icon: TransactionOutlined,
        label: 'Push Notification',
        path: '/push-notification'
    },
]