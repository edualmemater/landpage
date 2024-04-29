import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./assets/css/globalStyle";
import { GlobalColorsStyle } from "./assets/css/colorsLib";
import PageLoader from "./components/PageLoader";
 

function App() {
  return (
    <>
    <GlobalStyle />
      <GlobalColorsStyle />
      <PageLoader />
      <main>
       <Outlet />
      </main>
    </>
  );
}

export default App;
