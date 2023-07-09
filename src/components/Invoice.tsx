import { Status, TInvoice } from "@/types";

type InvoiceTypes = {
  data: TInvoice;
};

const Invoice = ({ data }: InvoiceTypes) => {
  const date = new Date(data.paymentDue).toUTCString();

  const handleStatusStyle = (status: Status) => {
    if (status === "draft") {
      return {
        color: "#373B53",
        backgroundColor: "rgba(55, 59, 83, 0.057)",
      };
    } else if (status === "paid") {
      return {
        color: "#FF8F00",
        backgroundColor: "rgba(255, 143, 0, 0.057)",
      };
    } else {
      return {
        color: "#33D69F",
        backgroundColor: "rgba(51, 214, 159, 0.057)",
      };
    }
  };

  const handleDotColor = (status: Status) => {
    if (status === "draft") {
      return {
        backgroundColor: "rgb(55, 59, 83)",
      };
    } else if (status === "paid") {
      return {
        backgroundColor: "rgb(255, 143, 0)",
      };
    } else {
      return {
        backgroundColor: "rgb(51, 214, 159)",
      };
    }
  };

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
        <div
          style={handleStatusStyle(data.status as Status)}
          className="flex items-center gap-2 w-[104px] h-10 justify-center rounded-md"
        >
          <div
            className="w-2 h-2 rounded-full mb-[2px]"
            style={handleDotColor(data.status as Status)}
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
