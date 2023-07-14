import { Invoices } from "@/types";
import Filters from "./Filters";
import Heading from "./Heading";
import Invoice from "./Invoice";

type HomeProps = {
  data: Invoices | undefined;
};

const Home = ({ data }: HomeProps) => {
  return (
    <>
      <Heading />
      <main>
        <Filters />
        <div className="mx-6 mt-8 flex flex-col gap-4 pb-[105px]">
          {data?.map((invoice) => {
            return <Invoice key={invoice.id} data={invoice} />;
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
