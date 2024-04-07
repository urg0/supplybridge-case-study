import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./routes";

import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
