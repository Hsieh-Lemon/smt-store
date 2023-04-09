import { useState } from "react";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Badge, Button, Space } from 'antd';
import { ConfigProvider } from 'antd';

import AddToCart from "../AddToCart"
import styles from "./productdetail.module.css"
const { Option } = Badge;

function ProductDetail({ product }) {
    const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);

    const increase = () => {
        setQty(qty + 1);
    };
    const decline = () => {
        let newCount = qty - 1;
        if (newCount < 1) {
            newCount = 1;
        }
        setQty(newCount);
    };

    return (

        <div className={styles.info}>
            <section key={product.name} >
                <img
                    // style={{ width: '33rem', height: '33rem' }}
                    src={product.image}
                    alt={product.name} />
            </section>
            <section key={product.id} >
                <h3 className={styles.author}>
                    {product.author}
                </h3>
                <h2 className={styles.name}>
                    {product.name}
                </h2>
                <h3 className={styles.text}>
                    $ {product.price}
                </h3>
                {/* <p className={styles.status}>
                    Status: {product.countInStock > 0 ? "InStock" : "Unavailable."}
                </p> */}
                <Space size="large">
                    <Button onClick={decline} icon={<MinusOutlined />} />
                    <ConfigProvider theme={{
                        token: { fontSizeSM: "20px", },
                    }}>
                        <Badge count={qty}
                            key={qty}
                            onChange={val => setQty(val)}
                            color="white" style={{ color: "black", fontSizeSM: "16px" }} >
        
                        </Badge>
                    </ConfigProvider>

                    <Button onClick={increase} icon={<PlusOutlined />} />
                </Space>
                <div className={styles.sum}>
                    <p className={styles.word}>
                        TOTAL
                    </p>
                    <p className={styles.qty}>
                        $ {product.price * qty}
                    </p>
                </div>
                <AddToCart />
            </section>
        </div>

    );
}
export default ProductDetail;