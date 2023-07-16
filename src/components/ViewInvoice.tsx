import { Invoices, TInvoice, TStatus } from "@/types";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "./Heading";
import { useEffect, useState } from "react";
import Status from "./Status";

type ViewInvoiceProps = {
  data: Invoices | undefined;
};

const ViewInvoice = ({ data }: ViewInvoiceProps) => {
  const [invoice, setInvoice] = useState<TInvoice>();
  const navigate = useNavigate();
  const { id } = useParams();
  let invoiceDate;
  let paymentDue;

  useEffect(() => {
    data?.forEach((invoice) => {
      if (invoice.id === id) {
        setInvoice(invoice);
      }
    });
  }, [data, id]);

  if (invoice) {
    invoiceDate = new Date(invoice.createdAt).toUTCString();
    paymentDue = new Date(invoice.paymentDue).toUTCString();
  }

  if (invoice) {
    return (
      <>
        <Heading />
        <main className="mx-6 mt-[33px]">
          <button
            className="-tarcking-[0.25px] h-[15px] w-20 bg-[url(/assets/icon-arrow-left.svg)] bg-[left_top_1px] bg-no-repeat text-right text-[15px]/[1] font-bold text-8 dark:text-white"
            onClick={() => navigate("/")}
          >
            Go back
          </button>
          <div className="mt-[31px] flex items-center justify-between rounded-lg bg-white p-6 shadow-[0_10px_10px_-10px_rgba(72,84,159,0.1)] dark:bg-3">
            <span className="text-[13px]/[15px] font-normal -tracking-[0.1px] text-6 dark:text-5">
              Status
            </span>
            <Status status={invoice.status as TStatus} />
          </div>
          <section className="mt-4 rounded-lg bg-white p-6 text-[13px]/[18px] -tracking-[0.1px] text-7 shadow-[0_10px_10px_-10px_rgba(72,84,159,0.1)] dark:bg-3 dark:text-5">
            <div>
              <h2 className="text-[15px]/[1] font-bold -tracking-[0.25px] text-8 dark:text-white">
                <span className="mt-1 text-7">#</span>
                {invoice.id}
              </h2>
              <span>{invoice.description}</span>
            </div>
            <address className="mt-[30px] not-italic">
              {invoice.senderAddress.street} <br />
              {invoice.senderAddress.city} <br />
              {invoice.senderAddress.postCode} <br />
              {invoice.senderAddress.country}
            </address>
            <div className="mt-[30px] grid  grid-cols-2">
              <div className="flex flex-col">
                <span>Invoice Date</span>
                <span className="mt-[13px] text-[15px]/[20px] font-bold -tracking-[0.25px] text-8 dark:text-white">
                  {invoiceDate?.slice(4, 16)}
                </span>
              </div>
              <div>
                <span className="flex flex-col gap-[13px]">Payment Due</span>
                <span className="mt-[7px] block text-[15px]/[20px] font-bold -tracking-[0.25px] text-8 dark:text-white">
                  {paymentDue?.slice(4, 16)}
                </span>
              </div>
              {/* padding bottom applied to the div below instead of margin top on sent to span */}
              <div className="col-start-2 row-span-2 row-start-1 flex flex-col pb-8">
                <span>Bill To</span>
                <span className="mt-[13px] text-[15px]/[20px] font-bold -tracking-[0.25px] text-8 dark:text-white">
                  {invoice.clientName}
                </span>
                <address className="mt-[7px] not-italic">
                  {invoice.clientAddress.street} <br />
                  {invoice.clientAddress.city} <br />
                  {invoice.clientAddress.postCode} <br />
                  {invoice.clientAddress.country}
                </address>
              </div>
            </div>
            <div className="flex flex-col">
              <span>Sent to</span>
              <span className="mt-[10px] text-[15px]/[20px] font-bold -tracking-[0.25px] text-8 dark:text-white">
                {invoice.clientEmail}
              </span>
            </div>
            <div>
              <div className="mt-[38px] flex flex-col gap-6 rounded-t-lg bg-[#F9FAFE] p-6 dark:bg-4">
                {invoice.items.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <span className="text-[15px]/[15px] font-bold -tracking-[0.25px] text-8 dark:text-white">
                          {item.name}
                        </span>
                        <div className="mt-2">
                          {item.quantity} x &pound; {item.price.toFixed(2)}
                        </div>
                      </div>
                      <span className="text-[15px]/[15px] font-bold -tracking-[0.25px] text-8 dark:text-white">
                        &pound; {item.total.toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-between rounded-b-lg bg-[#373B53] p-6 text-white dark:bg-8">
                <span className="text-[13px]/[18px] font-normal -tracking-[0.1px] ">
                  Grand Total
                </span>
                <span className="text-2xl font-bold -tracking-[0.5px]">
                  &pound; {invoice.total.toFixed(2)}
                </span>
              </div>
            </div>
          </section>
        </main>
        <footer className="mt-14 flex justify-between gap-2 bg-white p-6 dark:bg-3">
          <button className="rounded-3xl bg-[#F9FAFE] px-6 py-4 text-[15px]/[1] font-bold -tracking-[0.25px] text-7 dark:bg-4 dark:text-5">
            Edit
          </button>
          <button className="rounded-3xl bg-9 px-6 py-4 text-[15px]/[1] font-bold -tracking-[0.25px] text-white">
            Delete
          </button>
          <button className="rounded-3xl bg-1 px-6 py-4 text-[15px]/[1] font-bold -tracking-[0.25px] text-white">
            Mark as Paid
          </button>
        </footer>
      </>
    );
  }
};

export default ViewInvoice;
