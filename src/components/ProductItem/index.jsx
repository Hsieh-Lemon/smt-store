import styles from './productitem.module.css';
import Link from '../Link';
import { Button,theme } from "antd"

export default function ProductItem({ product }) {
    const {
        token: { colorBgBase,colorTextBase },
      } = theme.useToken();
    return (
        <div className={styles.item}>
            
            <section>
            
                <Link to={`/products/id/${product.id}`}>
                    <img
                        style={{ width: '17rem', height: '17rem' }}
                        src={product.image}
                        alt={product.name} />
                </Link>
                
                <div className={styles.info}>
                    <h4 className={styles.author}>
                        {product.author}
                    </h4>
                    <h3 className={styles.name}>
                        {product.name}
                    </h3>
                    <span className={styles.text}>
                        $ {product.price}
                        <Button type="link" className={styles.btn}>
                        <Link to={`/products/id/${product.id}`}><img className={styles.image} src="/images/bags.svg" /></Link>
                        </Button>
                    </span>
                </div>
            </section>
        </div>
    );
}