import { memo } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Footer = memo(() => {
  return (
    <footer>
      <div className={styles.leftSide}>
        <div className={styles.logo}></div>
        <span>1992–2024 г. «RTSoft» Все права защищены</span>
      </div>
      <div className={styles.rightSide}>
        <div>
          428033, г. Чебоксары,
          <br />
          ул. Крылова, д.1
        </div>
        <div>
          <Link
            to={"mailto:str_service@mail.ru"}
            className={styles.contact_link}
          >
            str_service63@mail.ru
          </Link>
        </div>
        <div>
          <Link to={"tel:+79063824640"} className={styles.contact_link}>
            +7 (906) 382-46-40
          </Link>
        </div>  
      </div>
    </footer>
  );
});

export default Footer;
