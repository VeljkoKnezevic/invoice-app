import { useStatusStyling } from "@/hooks/useStatusStyling";
import { TStatus } from "@/types";

type StatusData = {
  status: TStatus;
};

const Status = ({ status }: StatusData) => {
  const { statusStyle, dotStyle } = useStatusStyling();
  if (status) {
    return (
      <div
        style={statusStyle(status)}
        className="flex h-10 w-[104px] items-center justify-center gap-2 rounded-md"
      >
        <div
          className="mb-[2px] h-2 w-2 rounded-full"
          style={dotStyle(status)}
        ></div>
        <p className="text-[15px]/[1] font-bold -tracking-[0.25px]">
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </p>
      </div>
    );
  }
};

export default Status;
