import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "src/app/layouts";
import theme from "src/app/theme";
import Loader from "src/app/components/Loader";

const Home = React.lazy(() => import("./views/home"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route path="" element={<Layout />}>
              <Route index element={<Home />}></Route>
            </Route>
          </Routes>
        </Router>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;
