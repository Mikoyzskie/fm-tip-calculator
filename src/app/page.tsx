"use client"

import Image from "next/image";
import { useEffect, useState } from "react"

const percents = ["5%", "10%", "15%", "25%", "50%"]



export default function Home() {
  const [custom, setCustom] = useState(0)
  const [bill, setBill] = useState(0)
  const [person, setPerson] = useState(0)
  const[tipAmount, setTipAmount] = useState(0)
  const[perPerson, setPerPerson] = useState(0)
  function handleCustomChange(e:any){
    const customInput = e.target.value
    setCustom(customInput)
  }
  function handleBillChange(e:any){
    const customInput = e.target.value
    setBill(customInput)
  }
  function handlePersonChange(e:any){
    const customInput = e.target.value
    setPerson(customInput)
  }

  useEffect(()=>{
    if(custom && bill && person){
      const tipAmount = bill * (custom / 100)
      const tipDistribute = tipAmount / person
      setTipAmount(Math.floor(tipDistribute * 100) / 100)

    }

  },[custom,bill,person])
  
  return (
    <main className="min-h-screen h-full px-0 sm:px-5 flex flex-col items-center justify-center">
      <div className="flex items-center h-full grow md:grow-0 md:mb-[87.86px]">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={87}
          height={54}
          className="mx-auto"
        />
      </div>
      <div className="bg-white rounded-t-[25px] md:rounded-b-[25px] shadow-2xl p-8 max-w-[920px] md:max-h-[481px] w-full mx-auto flex">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 h-fit">
          <div className="flex flex-col gap-8 justify-between basis-1/2">
            <div>
              <p className="text-[#5E7A7D] mb-[6px]">Bill</p>
              <div className="rounded-[5px] bg-[#F3F9FA] py-[6px] pl-[19.26px] pr-[17.48px] flex justify-between items-center  group-active:border-[#26C2AE] border-2">
                <Image
                  src={"/icon-dollar.svg"}
                  alt="dollar icon"
                  width={11}
                  height={17}
                />
                <input onChange={handleBillChange} type="number" dir="rtl" className="text-[#00474B] text-2xl w-full bg-[#F3F9FA] outline-none group" placeholder="0" />
              </div>
            </div>
            <div>
              <p className="text-[#5E7A7D] mb-[16px]">Select Tip %</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-2xl leading-9">
                {
                  percents.map((per: string, index: number) => {
                    return (
                      <button key={index} className="bg-[#00474B] text-white py-[6px] rounded-[5px] hover:bg-[#26C2AE] hover:text-[#00474B]">{per}</button>
                    )
                  })
                }
                <input onChange={handleCustomChange} type="number" className="bg-[#F3F9FA] outline-none text-[#00474B] text-2xl font-bold pl-[17.33px] pr-[19px]" placeholder="Custom" dir="rtl" />
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
                <input onChange={handlePersonChange} type="number" min={0} placeholder="0" className="text-2xl text-[#00474B] outline-none bg-[#F3F9FA] w-full " dir="rtl" />
              </div>
            </div>
          </div>
          <div className="bg-[#00474B] text-white p-6 pt-[37px] md:p-10 rounded-[15px] flex flex-col gap-8 md:justify-between md:basis-1/2 ">
            <div className="flex flex-col gap-[22px] md:gap-[41px]">
              <div className="flex justify-between items-center">
                <div>
                  <p>Tip Amount</p>
                  <p className="text-[13px] text-[#7F9D9F]">/ person</p>
                </div>
                <p className="text-[32px] md:text-5xl text-[#26C2AE]">{"$"}{tipAmount}</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p>Total</p>
                  <p className="text-[13px] text-[#7F9D9F]">/ person</p>
                </div>
                <p className="text-[32px] md:text-5xl text-[#26C2AE]">$32.79</p>
              </div>
            </div>
            <button className="bg-[#26C2AE] text-[#00474B] w-full text-xl py-[9px] rounded-[5px]">RESET</button>
          </div>
        </div>
      </div>
    </main>
  );
}
