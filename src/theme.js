import { theme } from "antd";

const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#1677ff",
    colorBgBase	: "#222222",
    colorTextBase: "#ffffff",
    colorTextFooter: "#ffffff",
    colorBgFooter: "#000000",
  },
  components: {
    Button: {
      colorPrimary: "#6366f2;",
      colorPrimaryHover: "#9192f5",
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
    colorBgBase	: "#FCE1E7",
    colorBgFooter: "#3e3f97",
    colorTextFooter: '#ffffff',
    colorBorder: "#F18BA2",
            lineWidth: "4",
            colorText: "#F18BA2",
  },
  components: {
    Button: {
      colorPrimary: "#6366f2;",
      colorPrimaryHover: "#9192f5",
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

