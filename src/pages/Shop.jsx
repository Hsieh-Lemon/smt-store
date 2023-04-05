import { Pagination } from 'antd';
import { Helmet } from "react-helmet-async"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Search from '../components/Search';
import NavBar2 from '../components/NavBar2'
import Dropdown from '../components/DropDown';
import ProductList from "../components/ProductList";
import products from "../json/products.json";

function Shop() {
    
    return (
        <div className="mainLayout">
            <Header className="layoutHeader" />
            <div className="layoutContent container">
                <h1>SHOP</h1>
                <Search />
                <NavBar2  />
                <Dropdown  />
                <ProductList products={products} />
                <Pagination defaultCurrent={1} total={50} />
                
            </div>
            
        </div>
        
        
    );
}
export default Shop;