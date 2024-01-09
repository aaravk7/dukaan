import ArrowDown from "./assets/ArrowDown.svg";
import LogoImg from "./assets/logo.svg";
import WalletImg from "./assets/Wallet.svg";
import { NAVITEMS } from "./data";

function Sidebar() {
  return (
    <div className="bg-[#1E2640] py-4 px-[10px] w-[224px] flex flex-col justify-between text-white h-screen fixed top-0 left-0">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between px-2">
          <div className="flex gap-3 items-center">
            <img
              className="h-[39px] w-[39px] rounded-[4px] object-cover"
              height={39}
              width={39}
              src={LogoImg}
              alt="logo"
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-[15px]">Nishyan</h3>
              <a className="text-[13px] underline opacity-80">Visit store</a>
            </div>
          </div>
          <img src={ArrowDown} />
        </div>
        <div className="flex flex-col gap-1">
          {NAVITEMS.map((item) => (
            <div key={item.name} className="px-4 py-2 flex gap-3 opacity-80">
              <img src={item.icon} />
              <h4 className="leading-[20px] text-[14px] font-[500]">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div className="justify-self-end bg-[#353C53] py-1.5 px-3 rounded flex gap-2.5">
        <span className="h-9 w-9 p-1.5 rounded bg-[#ffffff10] grid place-content-center">
          <img src={WalletImg} />
        </span>
        <div>
          <h3 className="text-[13px] leading-[16px] opacity-80">
            Available Credits
          </h3>
          <p className="text-[16px] leading-[24px] font-[500]">222.10</p>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
