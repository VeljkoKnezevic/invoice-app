import { useWindowSize } from "@/hooks/useWindowSize";

const HeadingItems = () => {
  return (
    <>
      <img src="/assets/logo-group.svg" alt="Logo" />
      <button
        className="bg-[url(/assets/icon-moon.svg)] bg-no-repeat p-4 bg-center ml-auto mr-6"
        aria-label="Turn on/off dark mode"
      ></button>
      <div className="border-l-[1px] h-[72px] border-[#494e6e]"></div>
      <img
        className="rounded-full w-8 h-8 mx-6 border-l-[1px]"
        src="/assets/image-avatar.jpg"
        alt="Avatar"
      />
    </>
  );
};

const Heading = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width < 1440 ? (
        // For mobile and tablet
        <header className="bg-3 flex items-center">
          <HeadingItems />
        </header>
      ) : (
        // For desktop
        <aside className="bg-3 flex items-center">
          <HeadingItems />
        </aside>
      )}
    </>
  );
};

export default Heading;
