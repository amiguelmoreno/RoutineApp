import { useTimer } from "../../contexts/timerContext";
import formatedTime from "../../utils/formatedTime";

function TimerDisplayTime({ size }) {
  const { state } = useTimer();

  return (
    <div
      className={`flex items-center justify-center  font-medium gap-[0.2rem] ${
        size === "small"
          ? "w-[7rem] fixed top-[0] left-[0] bg-[#0095ff] text-[white] pt-[0rem] pr-[0.6rem] pb-[0] pl-[0.2rem] rounded-tl-[0] rounded-br-[10px] rounded-tr-[0] rounded-bl-[0] text-[1rem]"
          : "text-[3.2rem]"
      }`}
    >
      {formatedTime(state.time)}
    </div>
  );
}

export default TimerDisplayTime;
