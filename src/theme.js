import { theme } from "antd";

const darkTheme = {
    algorithm: theme.darkAlgorithm,
    token:{
        colorBgBase:"1A1A29",
        colorTextBase: "#ffffff",
        colorPrimary: "#F18BA2",
    },
    components: {
        Button: {
            colorBorder: "#F18BA2",
            lineWidth: "4",
            colorText: "#F18BA2",

        },
        Input:{
            colorBgContainer:" #696D8A",
            colorBorder:"#696D8A",
            colorTextQuaternary:"#FFFFF",
           
        },
        Badge:{fontSize:"16"}
    },
};

const lightTheme = {
    algorithm: theme.defaultAlgorithm,
    token: {
        colorPrimary: "#F18BA2",
        colorBgElevated:"#FEEEF2"
    },
    components: {
        Button: {
            colorBorder: "#F18BA2",
            lineWidth: "4",
            colorText: "#F18BA2",
        },
        Input:{
            colorBgContainer:"#696D8A",
            colorBorder:"#696D8A",
            colorTextQuaternary:"#FFFFF",
           
        },
        Badge:{fontSize:"16"}
    },
};

export { lightTheme, darkTheme };