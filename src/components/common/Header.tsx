import Reat from 'react';
import { Layout, Menu } from 'antd';
const { Header: HeaderAnt } = Layout;

const Header = () => {
  const onClickItem = (data: any) => {
    console.log(data);
  };
  const items = [
    {
      label: 'Deal',
      key: 1,
    },
    {
      label: 'Home',
      key: 2,
      path: '/',
      onClick: onClickItem,
    },
    {
      label: 'About',
      key: 3,
    },
    {
      label: 'Shop',
      key: 4,
    },
    {
      label: 'Vendors', 
      key: 5,
    },
    {
      label: 'Mega menu',
      key: 6,
    },
    {
      label: 'Blog',
      key: 7,
    },
    {
      label: 'Contact',
      key: 8,
    },
  ];

  return (
    <HeaderAnt>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items}></Menu>
    </HeaderAnt>
  );
};

export default Header;
