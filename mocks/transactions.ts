import { faker } from '@faker-js/faker';

import moment from 'moment';

export const mockTransactions = (size: number) => { 
    return [...Array(size)].map((el,key) => {
        return {
            create_at: moment(faker.date.past()).format("MM/DD/YYYY").toString(),
            id: faker.random.numeric(10),
            price: faker.commerce.price(undefined,undefined,3).concat('đ')  ,
            address: faker.address.streetAddress(true),
            type: faker.helpers.arrayElement(['Thẻ ATM', 'Ví Momo', 'Quét QR']),
            status: faker.helpers.arrayElement(['Thành công', 'Thất bại', 'Đang xử lí'])
        }
    })

}

export const mockHistoryTransaction = (size: number) => { 
    return [...Array(size)].map((el,key) => {
        return {
            create_at: moment(faker.date.past()).format("mm-hh, MM/DD/YYYY").toString(),
            id: faker.random.numeric(20),
            key,
            price: faker.commerce.price(undefined,undefined,3).concat('đ')  ,
            code: faker.random.numeric(4), 
            img: faker.helpers.arrayElement([1, 2, 0])
        }
    })

}