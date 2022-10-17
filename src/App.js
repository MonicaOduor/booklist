import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Books from "./pages/Books";
import Create from "./pages/Create";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { pink } from "@material-ui/core/colors";
import Layout from "./components/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f44336",
    },
    secondary: pink,
  },
  typography: {
    fontFamily: "Inconsolata",
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 500,
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/books">
              <Books />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
