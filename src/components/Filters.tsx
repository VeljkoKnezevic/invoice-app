import useInvoiceApi from "@/hooks/useInvoiceApi";

const Filters = () => {
  const { data } = useInvoiceApi();

  return (
    <section className="flex px-6 mt-8 items-center">
      <div>
        <h2 className="text-2xl text-8 font-bold -tracking-[0.75px]">
          Invoices
        </h2>
        <p className="text-[13px]/[15px] text-6 -tracking-[0.1px] font-normal">
          {data?.length} invoices
        </p>
      </div>
      <button className="ml-auto bg-[url(/assets/icon-arrow-down.svg)] bg-no-repeat w-[54px] bg-[right_top_50%] text-left h-[15px] text-[15px]/[1] font-bold -tracking-[0.25px] mr-[19px]">
        Filter
      </button>
      <button className="text-right pt-4 pr-[15px] pb-[13px] pl-[46px] bg-1 rounded-3xl text-white text-[15px]/[1] -tracking-[0.25px] bg-[url(/assets/icon-new-button.svg)] bg-no-repeat bg-[left_6px_top_6px]">
        New
      </button>
    </section>
  );
};

export default Filters;
