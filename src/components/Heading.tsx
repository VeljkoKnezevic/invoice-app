import useDarkMode from "@/hooks/useDarkMode";
import useWindowWidth from "@/hooks/useWindowWidth";

useWindowWidth;
const HeadingItems = () => {
  const { toggleDark } = useDarkMode();
  return (
    <>
      <h1>
        <img src="/assets/logo-group.svg" alt="Logo" />
      </h1>
      <button
        className="ml-auto mr-6 bg-[url(/assets/icon-moon.svg)] bg-center bg-no-repeat p-4"
        aria-label="Turn on/off dark mode"
        onClick={() => toggleDark()}
      ></button>
      <div className="h-[72px] border-l-[1px] border-[#494e6e]"></div>
      <img
        className="mx-6 h-8 w-8 rounded-full border-l-[1px]"
        src="/assets/image-avatar.jpg"
        alt="Avatar"
      />
    </>
  );
};

const Heading = () => {
  const { windowWidth } = useWindowWidth();

  return (
    <>
      {windowWidth < 1440 ? (
        // For mobile and tablet
        <header className="flex items-center bg-3">
          <HeadingItems />
        </header>
      ) : (
        // For desktop
        <aside className="flex items-center bg-3">
          <HeadingItems />
        </aside>
      )}
    </>
  );
};

export default Heading;
