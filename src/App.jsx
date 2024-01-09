import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ArrowDown from "./assets/ArrowDown2.svg";
import Download from "./assets/Download.svg";
import Left from "./assets/Left.svg";
import Right from "./assets/Right.svg";
import SearchIcon from "./assets/Search.svg";
import Triangle from "./assets/Triangle.svg";
import UpDown from "./assets/UpDown.svg";
import IIcon from "./assets/iicon.svg";

function App() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="bg-[#fafafa] min-h-screen ml-[224px]">
        <Navbar />
        <div className="p-10">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h2 className="text-[20px] leading-[28px] font-[500]">
                  Overview
                </h2>
                <button className="border border-[#D9D9D9] rounded flex items-center py-1.5 px-[14px] text-[16px] leading-[24px] gap-2 bg-white">
                  Last Month
                  <img width={12} src={ArrowDown} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-white p-5 flex flex-col gap-4 justify-between rounded-lg shadow-[0_2px_6px_0_#1A181E04]">
                  <h3 className="text-[16px] leading-[24px] text-[#4D4D4D]">
                    Online Orders
                  </h3>
                  <h4 className="text-[32px] leading-[38px] text-[#1A181E] font-[500]">
                    231
                  </h4>
                </div>
                <div className="bg-white p-5 flex flex-col gap-4 justify-between rounded-lg shadow-[0_2px_6px_0_#1A181E04]">
                  <h3 className="text-[16px] leading-[24px] text-[#4D4D4D]">
                    Amount Received
                  </h3>
                  <h4 className="text-[32px] leading-[38px] text-[#1A181E] font-[500]">
                    ₹23,92,312.19
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-[20px] leading-[28px] font-[500]">
                Transactions | This Month
              </h2>
              <div className="bg-white rounded-[8px] p-3 pb-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="py-[10px] px-[16px] flex items-center gap-2 rounded border border-[#D9D9D985]">
                      <img
                        src={SearchIcon}
                        height={16}
                        width={16}
                        className="opacity-85"
                      />
                      <input
                        className="text-[15px] leading-[22px] w-[194px] bg-transparent outline-none flex-1 "
                        type="text"
                        placeholder="Search by order ID..."
                      />
                    </div>
                    <div className="flex gap-3 items-center">
                      <button className="flex rounded py-1.5 px-3 items-center gap-2 text-[16px] leading-[24px] border border-[#d9d9d985]">
                        Sort
                        <img height={16} width={16} src={UpDown} />
                      </button>
                      <button className="h-9 w-9 grid place-content-center  rounded  gap-2 border border-[#d9d9d985]">
                        <img height={20} width={20} src={Download} alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="bg-[#F2F2F295] py-2.5 px-3 rounded text-[#4D4D4D] font-[500] text-[14px] leading-[20px] grid grid-cols-4 gap-10">
                    <h3>Order ID</h3>
                    <h3 className="flex items-center gap-1">
                      Order Date <img src={Triangle} />
                    </h3>
                    <h3 className="text-right">Order Amount</h3>
                    <h3 className="flex justify-end items-center gap-1 text-right">
                      Transaction fees
                      <img height={14} width={14} src={IIcon} />
                    </h3>
                  </div>
                </div>
                <div className="mb-8">
                  {new Array(10).fill(1).map((item, index) => (
                    <div
                      key={index}
                      className="py-[14px] mx-3 grid grid-cols-4 gap-10 border-b border-[#00000010]"
                    >
                      <a className="text-[#146EB4] font-[500] text-[14px] leading-[20px]">
                        #281209
                      </a>
                      <span className="text-[14px] leading-[20px] text-[#1A181E]">
                        7 July, 2023
                      </span>
                      <span className="text-[14px] text-right leading-[20px] text-[#1A181E]">
                        ₹1,278.23
                      </span>
                      <span className="text-[14px] text-right leading-[20px] text-[#1A181E]">
                        ₹22
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center">
                  <div className="flex gap-6">
                    <button className="flex rounded p-1.5 pr-3 items-center gap-2 text-[16px] leading-[24px] border border-[#d9d9d985]">
                      <img height={16} width={16} src={Left} />
                      Previous
                    </button>
                    <div className="flex gap-2 items-center">
                      <button className="h-7 w-7 rounded text-[14px] leading-[20px]">
                        1
                      </button>
                      <button className="h-7 w-7 rounded text-[14px] leading-[20px]">
                        ...
                      </button>
                      <button className="h-7 w-7 rounded text-[14px] leading-[20px] bg-[#146EB4] text-white">
                        10
                      </button>
                      <button className="h-7 w-7 rounded text-[14px] leading-[20px]">
                        11
                      </button>
                      <button className="h-7 w-7 rounded text-[14px] leading-[20px]">
                        12
                      </button>
                      <button className="h-7 w-7 rounded text-[14px] leading-[20px]">
                        13
                      </button>
                      <button className="h-7 w-7 rounded text-[14px] leading-[20px]">
                        14
                      </button>
                      <button className="h-7 w-7 rounded text-[14px] leading-[20px]">
                        15
                      </button>
                      <button className="h-7 w-7 rounded text-[14px] leading-[20px]">
                        16
                      </button>
                      <button className="h-7 w-7 rounded text-[14px] leading-[20px]">
                        17
                      </button>
                      <button className="h-7 w-7 rounded text-[14px] leading-[20px]">
                        18
                      </button>
                    </div>
                    <button className="flex rounded p-1.5 pl-3 items-center gap-2 text-[16px] leading-[24px] border border-[#d9d9d985]">
                      Next
                      <img height={16} width={16} src={Right} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
