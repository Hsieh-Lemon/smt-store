import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import { useSearchParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import LoginCard from '../components/LoginCard';

function Login() {
    const {
        token: { colorBg, colorTextBase },
    } = theme.useToken();

    const [searchParams] = useSearchParams();
    const redirect = searchParams.get('redirect');
    return (
        <div className="mainLayout">
            <Header className="layoutHeader" />
            <Helmet>
                <title>LOGIN</title>
                <style>{`
            body { 
                background-color: ${colorBg}; 
                color: ${colorTextBase}
                }
            `}</style></Helmet>
            <div className="layoutContent container">
                <title>LOGIN</title>
                <LoginCard redirect={redirect} />
            </div>
            <Footer className="layoutFooter" />
        </div>
    );
}
export default Login;