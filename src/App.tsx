import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ViewInvoice from "./components/ViewInvoice";
import useInvoiceApi from "./hooks/useInvoiceApi";

function App() {
  const { data } = useInvoiceApi();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/:id" element={<ViewInvoice data={data} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
