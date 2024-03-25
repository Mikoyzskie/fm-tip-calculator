import Image from "next/image";

const percents = ["5%", "10%", "15%", "25%", "50%", "Custom"]

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={87}
        height={54}
        className="mx-auto pt-[50px] mb-[40.86px]"
      />
      <div className="bg-white h-full rounded-t-[25px] grow p-8">
        <p className="text-[#5E7A7D] mb-[6px]">Bill</p>
        <div className="flex flex-col gap-8">
          <div className="rounded-[5px] bg-[#F3F9FA] py-[6px] pl-[19.26px] pr-[17.48px] flex justify-between items-center  group-active:border-[#26C2AE] border-2">
            <Image
              src={"/icon-dollar.svg"}
              alt="dollar icon"
              width={11}
              height={17}
            />
            <input type="number" dir="rtl" className="text-[#00474B] text-2xl w-full bg-[#F3F9FA] outline-none group" placeholder="0" />
          </div>
          <div>
            <p className="text-[#5E7A7D] mb-[16px]">Select Tip %</p>
            <div className="grid grid-cols-2 gap-4">
              {
                percents.map((per: string, index: number) => {
                  return (
                    <button key={index} className="bg-[#00474B] text-white py-[6px] rounded-[5px] text-2xl hover:bg-[#26C2AE] hover:text-[#00474B]">{per}</button>
                  )
                })
              }
            </div>
          </div>
          <div>
            <p className="text-[#5E7A7D] mb-[6px]">Number of People</p>
            <div className="flex items-center justify-between py-[6px] bg-[#F3F9FA] pl-[17px] pr-[16.72px] rounded-[5px]">
              <Image
                src={"/icon-person.svg"}
                alt="person icon"
                width={13}
                height={16}
              />
              <input type="number" min={0} placeholder="0" className="text-2xl text-[#00474B] outline-none bg-[#F3F9FA] w-full " dir="rtl" />
            </div>
          </div>
          <div className="bg-[#00474B] text-white p-6 pt-[37px] rounded-[15px] flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <div>
                  <p>Tip Amount</p>
                  <p className="text-[13px] text-[#7F9D9F]">/ person</p>
                </div>
                <p className="text-[32px] text-[#26C2AE]">$4.27</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p>Total</p>
                  <p className="text-[13px] text-[#7F9D9F]">/ person</p>
                </div>
                <p className="text-[32px] text-[#26C2AE]">$32.79</p>
              </div>
            </div>
            <button className="bg-[#26C2AE] text-[#00474B] w-full text-xl py-[9px] rounded-[5px]">RESET</button>
          </div>
        </div>
      </div>
    </main>
  );
}
