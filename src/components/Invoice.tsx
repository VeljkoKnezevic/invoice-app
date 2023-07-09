import { useStatusStyling } from "@/hooks/useStatusStyling";
import { Status, TInvoice } from "@/types";
import { Link } from "react-router-dom";

type InvoiceTypes = {
  data: TInvoice;
};

const Invoice = ({ data }: InvoiceTypes) => {
  const { statusStyle, dotStyle } = useStatusStyling();
  const date = new Date(data.paymentDue).toUTCString();

  return (
    <section className="bg-white relative rounded-lg px-6 pt-[25px] pb-[22px] shadow-[0_10px_10px_-10px_rgba(72,84,159,0.10)]">
      <Link
        to={`/${data.id}`}
        className="w-full top-0 left-0 h-full absolute"
      />
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
        <div
          style={statusStyle(data.status as Status)}
          className="flex items-center gap-2 w-[104px] h-10 justify-center rounded-md"
        >
          <div
            className="w-2 h-2 rounded-full mb-[2px]"
            style={dotStyle(data.status as Status)}
          ></div>
          <p className="text-[15px]/[1] -tracking-[0.25px] font-bold">
            {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Invoice;
