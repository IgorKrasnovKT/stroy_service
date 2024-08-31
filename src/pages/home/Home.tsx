import { memo } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { routes } from "@/constants/routes";
import {
  AppstoreOutlined,
  InfoCircleOutlined,
  QuestionOutlined,
} from "@ant-design/icons";
import { ReactComponent as DeliveryIcon } from "../../assets/delivery.svg";
import '../../assets/main.jpg'

const Home = memo(() => {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <div>Компания «Строй-сервис»</div>
          <div className={styles.bannerTitle}>
            Продажа строительных материалов
          </div>
          <div>для любых целей</div>
          <Link to={routes.about.path} className={styles.aboutBtn}>
            Подробнее
          </Link>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.item}>
          <div className={styles.itemLabel}>C 2015 года на рынке</div>
          <InfoCircleOutlined className={styles.itemIcon} />
        </div>
        <div className={styles.item}>
          <div className={styles.itemLabel}>
            Большое количество видов товара
          </div>
          <AppstoreOutlined className={styles.itemIcon} />
        </div>
        <div className={styles.item}>
          <div className={styles.itemLabel}>Доставка и самовывоз</div>
          <DeliveryIcon className={styles.itemIcon} />
        </div>
        <div className={styles.item}>
          <div className={styles.itemLabel}>
            Работаем по Чувашии и Йошкар-оле
          </div>
          <QuestionOutlined className={styles.itemIcon} />
        </div>
      </div>
    </main>
  );
});

export default Home;
