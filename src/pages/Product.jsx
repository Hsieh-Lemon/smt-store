import { Helmet } from "react-helmet-async"
import { useParams } from 'react-router-dom';
import { theme } from 'antd';

import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductDetail from "../components/ProductDetail"
import products from "../json/Products.json";


function Product() {
    const {
        token: { colorBgBase,colorTextBase },
      } = theme.useToken();
    const { productId } = useParams();
    const product = products.find(
        (x) => x.id === productId
     );
    return (
        <div className="mainLayout">
            
            {/* <Header className="layoutHeader" /> */}
            <Helmet><style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
            `}</style></Helmet>
            <div className="layoutContent container">
                <ProductDetail product={product} />


            </div>

        </div>


    );
}
export default Product;