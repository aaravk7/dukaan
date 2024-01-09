import ArrowDownFilledImg from "./assets/Polygon 2.png";
import QuestionImg from "./assets/Question.svg";
import SearchIcon from "./assets/Search.svg";
import ChatImg from "./assets/Vector1.png";

function Navbar() {
  return (
    <div className="bg-white flex justify-between shadow-sm px-8 py-3 relative">
      <div className="flex items-center gap-4">
        <h3 className="text-[15px] leading-[22px] text-[#1A181E]">Payments</h3>
        <a className="text-[#4D4D4D] flex gap-1.5 text-[12px] leading-[16px] text-nowrap items-center">
          <img height={14} width={14} src={QuestionImg} />
          How it works
        </a>
      </div>
      <div className="absolute top-[50%] left-[50%] py-[9px] px-[16px] bg-[#F2F2F2] w-[400px] translate-x-[-50%] translate-y-[-50%] flex gap-2 rounded-md">
        <img src={SearchIcon} height={16} width={16} />
        <input
          className="text-[15px] leading-[22px] bg-transparent outline-none flex-1"
          type="text"
          placeholder="Search features, tutorials, etc."
        />
      </div>
      <div className="flex justify-end gap-2">
        <span className="bg-[#E6E6E6] h-10 w-10 rounded-full grid place-content-center">
          <img src={ChatImg} />
        </span>
        <span className="bg-[#E6E6E6] h-10 w-10 rounded-full grid place-content-center">
          <img src={ArrowDownFilledImg} />
        </span>
      </div>
    </div>
  );
}
export default Navbar;
