import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";

export default (): JSX.Element => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
