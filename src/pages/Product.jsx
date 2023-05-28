import { Helmet } from "react-helmet-async"
import { useParams } from 'react-router-dom';
import { theme } from 'antd';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductDetail from "../components/ProductDetail"
import { useProductById } from '../react-query';


function Product() {
    const {
        token: { colorBg},
    } = theme.useToken();
    
    const { productId } = useParams();
    const { data, isLoading } = useProductById(productId);
    const product = data || {};
    return (
        <div className="mainLayout">
            <ScrollToTopOnMount />
            <Header className="layoutHeader" />
            <Helmet><style>{`
               body { 
                  background-color: ${colorBg}; 
               }
            `}</style></Helmet>
            <div className="layoutContent container">
                <ProductDetail product={product} />

            </div>
            <Footer className="layoutFooter" />
        </div>


    );
}
export default Product;