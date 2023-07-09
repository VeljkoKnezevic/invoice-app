import Heading from "./Heading";
import Filters from "./Filters";
import Invoice from "./Invoice";
import { Invoices } from "@/types";

type HomeProps = {
  data: Invoices | undefined;
};

const Home = ({ data }: HomeProps) => {
  return (
    <>
      <Heading />
      <main>
        <Filters />
        <div className="mx-6 mt-8 pb-[105px] flex flex-col gap-4">
          {data?.map((invoice) => {
            return <Invoice key={invoice.id} data={invoice} />;
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
