import { TStatus } from "@/types";

export function useStatusStyling() {
  const statusStyle = (status: TStatus) => {
    if (status === "draft") {
      return {
        color: "#373B53",
        backgroundColor: "rgba(55, 59, 83, 0.057)",
      };
    } else if (status === "paid") {
      return {
        color: "#33D69F",
        backgroundColor: "rgba(51, 214, 159, 0.057)",
      };
    } else {
      return {
        color: "#FF8F00",
        backgroundColor: "rgba(255, 143, 0, 0.057)",
      };
    }
  };

  const dotStyle = (status: TStatus) => {
    if (status === "draft") {
      return {
        backgroundColor: "rgb(55, 59, 83)",
      };
    } else if (status === "paid") {
      return {
        backgroundColor: "rgb(51, 214, 159)",
      };
    } else {
      return {
        backgroundColor: "rgb(255, 143, 0)",
      };
    }
  };

  return { statusStyle, dotStyle };
}
