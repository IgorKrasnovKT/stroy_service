import { memo, useState } from 'react'
import styles from './styles.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '@/constants/routes';
import { Button, Tabs, TabsProps } from 'antd';
import { AppstoreOutlined, HomeOutlined, InfoCircleOutlined, PhoneOutlined } from '@ant-design/icons';
import { ReactComponent as DeliveryIcon } from '../../assets/delivery.svg'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: <Link to={routes.home.path} className='link'>
      <HomeOutlined />
      {routes.home.name}
    </Link>,
  },
  {
    key: '2',
    label: <Link to={routes.products.path} className='link'>
      <AppstoreOutlined />
      {routes.products.name}
    </Link>,
  },
  {
    key: '3',
    label: <Link to={routes.about.path} className='link'>
      <InfoCircleOutlined />
      {routes.about.name}
    </Link>,
  },
  {
    key: '4',
    label: <Link to={routes.delivery.path} className='link'>
      <DeliveryIcon />
      {routes.delivery.name}
    </Link>,
  },
  {
    key: '5',
    label: <Link to={routes.contact.path} className='link'>
      <PhoneOutlined />
      {routes.contact.name}
    </Link>
  },
];

const Header = memo(() => {
  const location = useLocation();
  const [activeKey, setActiveKey] = useState(() => items.find((item) => location.pathname.includes(item.key))?.key);

  return (
    <header>
      <div className={styles.left_side}>
        <div className={styles.logo}>
          Logo
        </div>
        <Tabs
          items={items}
          activeKey={activeKey}
          onChange={(activeKey) => setActiveKey(activeKey)}
        />
      </div>
      <div className={styles.right_side}>
        <Link to={"mailto:str_service@mail.ru"} className={styles.contact_link}>
          str_service63@mail.ru
        </Link>
        <Link to={"tel:+79063824640"} className={styles.contact_link}>
          +7 (906) 382-46-40
        </Link>
        <Button size='small'>
          <Link to={routes.login.path}>
            {routes.login.name}
          </Link>
        </Button>
        <Button size='small'>
          <Link to={routes.signup.path}>
            {routes.signup.name}
          </Link>
        </Button>
      </div>

    </header>
  )
})

export default Header