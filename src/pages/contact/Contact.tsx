import { Descriptions, DescriptionsProps } from "antd";
import { memo, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

const contactInfo: DescriptionsProps["items"] = [
  {
    key: "1",
    label: "Телефон",
    children: <p>89063824640</p>,
  },
  {
    key: "2",
    label: "Генеральный директор",
    children: <p>Краснов Николай Петрович</p>,
  },
  {
    key: "3",
    label: "Юридический адрес",
    children: (
      <p>
        428003, Чувашская Республика - Чувашия, Чебоксары г., Академика
        А.Н.Крылова ул., дом No 1, офис 60
      </p>
    ),
  },
  {
    key: "4",
    label: "Р/с",
    children: <p>40702810916100032762</p>,
  },
  {
    key: "5",
    label: "К/с",
    children: <p>30101810000000000201</p>,
  },
  {
    key: "6",
    label: "БИК",
    children: <p>044525201</p>,
  },
  {
    key: "7",
    label: "ОКАТО",
    children: <p>97401000000</p>,
  },
  {
    key: "8",
    label: "Банк",
    children: <p>ПАО АКБ «АВАНГАРД» г. Москва</p>,
  },
  {
    key: "9",
    label: "ИНН",
    children: <p>2130055364</p>,
  },
  {
    key: "10",
    label: "КПП",
    children: <p>213001001</p>,
  },
];

const Contact = memo(() => {
  const [layout, setLayout] = useState<"horizontal" | "vertical">(
    window.innerWidth <= 992 ? "vertical" : "horizontal"
  );

  const layoutRef = useRef(layout);

  const handleResize = () => {
    if (window.innerWidth <= 992) {
      if (layoutRef.current === "horizontal") {
        setLayout("vertical");
      }
    } else if (layoutRef.current === "vertical") {
      setLayout("horizontal");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      console.log("unmount");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    layoutRef.current = layout;
  }, [layout]);

  return (
    <main className={styles.main}>
      <Descriptions
        items={contactInfo}
        bordered
        column={1}
        layout={layout}
        size="small"
      />
    </main>
  );
});

export default Contact;
