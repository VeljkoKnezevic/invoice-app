import { Invoices } from "@/types";
import Heading from "./Heading";

type ViewInvoiceProps = {
  data: Invoices | undefined;
};

const ViewInvoice = ({ data }: ViewInvoiceProps) => {
  return (
    <>
      <Heading />
      <main>
        <button>Go back</button>
        {data?.map((invoice) => {
          return <div key={invoice.id}></div>;
        })}
      </main>
    </>
  );
};

export default ViewInvoice;
