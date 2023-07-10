import { TStatus, TInvoice } from "@/types";
import { Link } from "react-router-dom";
import Status from "./Status";

type InvoiceTypes = {
  data: TInvoice;
};

const Invoice = ({ data }: InvoiceTypes) => {
  const date = new Date(data.paymentDue).toUTCString();

  return (
    <section className="relative rounded-lg bg-white px-6 pb-[22px] pt-[25px] shadow-[0_10px_10px_-10px_rgba(72,84,159,0.10)]">
      <Link
        to={`/${data.id}`}
        className="absolute left-0 top-0 h-full w-full"
      />
      <div className="flex justify-between">
        <h3 className="text-[15px]/[1] font-bold -tracking-[0.25px] text-8">
          <span className="text-7">#</span>
          {data.id}
        </h3>
        <p className="text-[13px]/[15px] font-normal -tracking-[0.1px] text-6">
          {data.clientName}
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-6">Due {date.slice(4, 16)}</p>
          <p className="mt-[9px] text-[15px]/[24px] font-bold -tracking-[0.25px] text-8">
            &pound; {data.total.toFixed(2)}
          </p>
        </div>
        <Status status={data.status as TStatus} />
      </div>
    </section>
  );
};

export default Invoice;
