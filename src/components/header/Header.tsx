import { memo, useCallback, useState } from "react";
import styles from "./styles.module.scss";
import { Link, Location, useLocation } from "react-router-dom";
import { routes, RoutesNames } from "@/constants/routes";
import { Menu, MenuProps } from "antd";
import {
  AppstoreOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { ReactComponent as DeliveryIcon } from "../../assets/delivery.svg";

type MenuItem = Required<MenuProps>["items"][number];

const menuItems: MenuItem[] = [
  {
    label: (
      <Link to={routes.home.path} className={`${styles.homeLink} link`}>
        <HomeOutlined />
        <span className={styles.linkLabel}>{routes.home.name}</span>
      </Link>
    ),
    key: routes.home.name,
  },
  {
    label: (
      <Link to={routes.products.path} className="link">
        <AppstoreOutlined />
        <span className={styles.linkLabel}>{routes.products.name}</span>
      </Link>
    ),
    key: routes.products.name,
  },
  {
    label: (
      <Link to={routes.about.path} className="link">
        <InfoCircleOutlined />
        <span className={styles.linkLabel}>{routes.about.name}</span>
      </Link>
    ),
    key: routes.about.name,
  },
  {
    label: (
      <Link to={routes.delivery.path} className="link">
        <DeliveryIcon />
        <span className={styles.linkLabel}>{routes.delivery.name}</span>
      </Link>
    ),
    key: routes.delivery.name,
  },
  {
    label: (
      <Link to={routes.contact.path} className="link">
        <PhoneOutlined />
        <span className={styles.linkLabel}>{routes.contact.name}</span>
      </Link>
    ),
    key: routes.contact.name,
  },
];

const getCurrentActiveKey = (location: Location): string | undefined => {
  let activeKey: RoutesNames | undefined;

  Object.keys(routes).find((key) => {
    const currentRoute = routes[key as RoutesNames];

    if (location.pathname.includes(currentRoute.path)) {
      activeKey = key as RoutesNames;
      return true;
    } else {
      return false;
    }
  });

  if (activeKey) {
    return routes[activeKey].name;
  } else {
    return undefined;
  }
};

const ContactLinks = memo(() => (
  <>
    <Link to={"mailto:str_service@mail.ru"} className={styles.contact_link}>
      str_service63@mail.ru
    </Link>
    <Link to={"tel:+79063824640"} className={styles.contact_link}>
      +7 (906) 382-46-40
    </Link>
  </>
));

const Logo = memo(({ onClick }: { onClick: () => void }) => (
  <Link to={routes.home.path} className={styles.logo} onClick={onClick}>
    STR_SERVICE
  </Link>
));

const Header = memo(() => {
  const location = useLocation();
  const [activeKey, setActiveKey] = useState<string | undefined>(() =>
    getCurrentActiveKey(location)
  );

  const handleClick: MenuProps["onClick"] = (e) => {
    setActiveKey(e.key);
  };

  const clearActiveKey = useCallback(() => setActiveKey(undefined), []);

  return (
    <>
      <div className={styles.shortHeader}>
        <Logo onClick={clearActiveKey} />
        <div>
          <ContactLinks />
        </div>
      </div>
      <header>
        <div className={styles.left_side}>
          <Logo onClick={clearActiveKey} />
          <Menu
            onClick={handleClick}
            selectedKeys={activeKey ? [activeKey] : undefined}
            mode="horizontal"
            items={menuItems}
            theme="dark"
          />
        </div>
        <div className={styles.right_side}>
          <ContactLinks />
          {/* <Button size="small">
          <Link to={routes.login.path}>{routes.login.name}</Link>
        </Button>
        <Button size="small">
          <Link to={routes.signup.path}>{routes.signup.name}</Link>
        </Button> */}
        </div>
      </header>
    </>
  );
});

export default Header;
