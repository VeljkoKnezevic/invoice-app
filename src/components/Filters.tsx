import useInvoiceApi from "@/hooks/useInvoiceApi";

const Filters = () => {
  const { data } = useInvoiceApi();

  return (
    <section className="flex items-center px-6 pt-8">
      <div>
        <h2 className="text-2xl font-bold -tracking-[0.75px] text-8 dark:text-white">
          Invoices
        </h2>
        <p className="text-[13px]/[15px] font-normal -tracking-[0.1px] text-6 dark:text-5">
          {data?.length} invoices
        </p>
      </div>
      <button className="ml-auto mr-[19px] h-[15px] w-[54px] bg-[url(/assets/icon-arrow-down.svg)] bg-[right_top_50%] bg-no-repeat text-left text-[15px]/[1] font-bold -tracking-[0.25px] dark:text-white">
        Filter
      </button>
      <button className="rounded-3xl bg-1 bg-[url(/assets/icon-new-button.svg)] bg-[left_6px_top_6px] bg-no-repeat pb-[13px] pl-[46px] pr-[15px] pt-4 text-right text-[15px]/[1] -tracking-[0.25px] text-white">
        New
      </button>
    </section>
  );
};

export default Filters;
