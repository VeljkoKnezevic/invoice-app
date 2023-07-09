import "./App.css";
import useInvoiceApi from "./hooks/useInvoiceApi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewInvoice from "./components/ViewInvoice";
import Home from "./components/Home";

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
