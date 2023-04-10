import { theme } from "antd";

const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#1677ff",
    colorBgBase	: "#F18BA2",
    colorBg:"#1A1A29",
    colorTextBase: "#ffffff",
    colorBgHeader: "#F18BA2",
  },
  components: {
    Button: {
      colorPrimary: "#6366f2;",
      colorPrimaryHover: "#9192f5",
    }
  },
};

const lightTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorBgBase	: "#FCE1E7",
    colorBg:"#ffffff",
    colorTextBase: "#434868",
    colorBgHeader: "#FCE1E7",
  },
  components: {
    Button: {
      colorPrimary: "#6366f2;",
      colorPrimaryHover: "#9192f5",
    },
  },
};

export { lightTheme, darkTheme };
