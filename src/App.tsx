import "./App.css";
import Filters from "./components/Filters";
import Heading from "./components/Heading";
import useInvoiceApi from "./hooks/useInvoiceApi";
import Invoice from "./components/Invoice";

function App() {
  const { data } = useInvoiceApi();

  return (
    <>
      <Heading />
      <Filters />
      <div className="mx-6 mt-8 pb-[105px] flex flex-col gap-4">
        {data?.map((invoice) => {
          return <Invoice key={invoice.id} data={invoice} />;
        })}
      </div>
    </>
  );
}

export default App;
