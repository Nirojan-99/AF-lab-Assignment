import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./Pages/Pages";

function app() {
  return (
    <>
      <Router>
        <Pages />
      </Router>
    </>
  );
}

export default app;
