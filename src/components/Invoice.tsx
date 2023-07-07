import { TInvoice } from "@/types";

type InvoiceTypes = {
  data: TInvoice;
};

const Invoice = ({ data }: InvoiceTypes) => {
  const date = new Date(data.paymentDue).toUTCString();

  return (
    <section className="bg-white rounded-lg px-6 pt-[25px] pb-[22px] shadow-[0_10px_10px_-10px_rgba(72,84,159,0.10)]">
      <div className="flex justify-between">
        <h3 className="text-8 text-[15px]/[1] -tracking-[0.25px] font-bold">
          <span className="text-7">#</span>
          {data.id}
        </h3>
        <p className="text-6 text-[13px]/[15px] -tracking-[0.1px] font-normal">
          {data.clientName}
        </p>
      </div>
      <div className="flex justify-between items-center mt-6">
        <div>
          <p className="text-6">Due {date.slice(4, 16)}</p>
          <p className="text-8 text-[15px]/[24px] -tracking-[0.25px] font-bold mt-[9px]">
            &pound; {data.total.toFixed(2)}
          </p>
        </div>
        <div>{data.status}</div>
      </div>
    </section>
  );
};

export default Invoice;
