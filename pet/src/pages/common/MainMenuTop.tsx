import React, { useState } from 'react';
import { HomeOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
    {
        label: 'Home',
        key: 'mail',
        icon: <HomeOutlined />,
    },
    {
        label: 'Pets',
        key: 'pets',


    },
    {
        label: 'About Us',
        key: 'about',


    },
    {
        label: 'Contact Us',
        key: 'contact',
    },
    {
        label: 'Sign In',
        key: 'signIn',
    },
];

const MainMenuTop: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <>
        <Menu className='menu' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    </>;
};
export default MainMenuTop;