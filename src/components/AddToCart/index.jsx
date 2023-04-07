import { Button } from "antd"
import styles from "./addtocart.module.css"

export default function AddToCart() {

  return (
    <Button type="primary" className={styles.btn}>
      Add To Bag
    </Button>
  );
}
