import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProfileCard from '../components/ProfileCard';

function Profile() {
    const {
        token: { colorBg, colorTextBase },
    } = theme.useToken();
    return (
        <div className="mainLayout">
            <Header className="layoutHeader" />
            <Helmet>
                <title>Profile</title>
                <style>{`
            body { 
                background-color: ${colorBg}; 
                color: ${colorTextBase}
                }
            `}</style></Helmet>
            <div className="layoutContent container">
                <title>PROFILE</title>
                <ProfileCard />
            </div>
            <Footer className="layoutFooter" />
        </div>
    );
}
export default Profile;