"use client"

import Image from "next/image";
import { useEffect, useState, useRef } from "react"
import clsx from "clsx"

export default function Home() {
  const percents: number[] = [5, 10, 15, 25, 50]
  const [custom, setCustom] = useState<number>(0)
  const [bill, setBill] = useState<number>(0)
  const [person, setPerson] = useState<number|null>()
  const[tipAmount, setTipAmount] = useState<number>(0)
  const[perPerson, setPerPerson] = useState<number>(0)

  const billInput = useRef<HTMLInputElement>(null)
  const customInput = useRef<HTMLInputElement>(null)
  const personInput = useRef<HTMLInputElement>(null)

  const [percent, setPercent] = useState(0)

  function handleCustomChange(e:any){
    const customInput:number = parseInt(e.target.value)
    setCustom(customInput)
  }
  function handleBillChange(e:any){
    const customInput:number = parseInt(e.target.value)
    setBill(customInput)
  }
  function handlePersonChange(e:any){
    const customInput:number = parseInt(e.target.value)
    setPerson(customInput)
  }

  let isEmpty = null

  useEffect(()=>{

    let percentages:number = 0
    if(custom || percent){
      if(custom){
        percentages = custom
      }
      if(percent){
        percentages = percent
      }
    }else{
      setTipAmount(0)
      setPerPerson(0)
    }

    isEmpty = personInput.current?.value

    if(percentages && bill && person){
      const tip = percentages / 100      
      const tipAmount = bill * tip
      const tipDistribute = tipAmount / person
      const total = bill + tipAmount
      const totalDistributed = total / person
      setTipAmount(Math.floor(tipDistribute * 100) / 100)
      setPerPerson(Math.floor(totalDistributed * 100) / 100)
    }

  },[custom,bill,person, percent])

  function getPercent(percents: number){
    if(percent === percents){
      setPercent(0)
    }else{
      setPercent(percents)
    }
  }
  function reset(){
    if(billInput.current){
      billInput.current.value = ''
    }
    if(customInput.current){
      customInput.current.value = ''
    }
    if(personInput.current){
      personInput.current.value = ''
    }
    setTipAmount(0)
    setPerPerson(0)
    setCustom(0)
    setBill(0)
    setPerson(null)
    setPercent(0)
  }
  
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
              <div className="rounded-[5px] bg-[#F3F9FA] py-[6px] pl-[19.26px] pr-[17.48px] flex justify-between items-center focus-within:border-[#26C2AE] border-2">
                <Image
                  src={"/icon-dollar.svg"}
                  alt="dollar icon"
                  width={11}
                  height={17}
                />
                <input ref={billInput} onChange={handleBillChange} type="number" dir="rtl" className="text-[#00474B] text-2xl w-full bg-[#F3F9FA] outline-none  hover:cursor-pointer " placeholder="0" />
              </div>
            </div>
            <div>
              <p className="text-[#5E7A7D] mb-[16px]">Select Tip %</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-2xl leading-9">
                {
                  percents.map((per: number, index: number) => {
                    return (
                      <button onClick={()=>{getPercent(per)}} key={index} className={clsx("py-[6px] rounded-[5px] hover:bg-[#26C2AE] hover:text-[#00474B]",
                        percent === per ? "bg-[#26C2AE] text-[#00474B]" : "bg-[#00474B] text-white" 
                      )}>
                        {`${per}`}{"%"}
                      </button>
                    )
                  })
                }
                <input ref={customInput} onChange={handleCustomChange} type="number" className=" hover:cursor-pointer focus:border-[#26C2AE] border-2 border-[#F3F9FA] bg-[#F3F9FA] rounded-[5px]  outline-none text-[#00474B] text-2xl font-bold pr-[19px]" placeholder="Custom" dir="rtl" />
              </div>
            </div>
            <div>
              <div className="flex justify-between w-full">
              <p className="text-[#5E7A7D] mb-[6px]">Number of People</p>
              <p className={clsx("text-[#E17457] mb-[6px]", person === 0 ? "" : "hidden" )}>{"Can't"} be zero</p>
              </div>
              <div className={clsx("flex items-center justify-between py-[6px] bg-[#F3F9FA] pl-[17px] pr-[16.72px] rounded-[5px]  focus-within:border-[#26C2AE] border-2",
                person === 0 ? "border-[#E17457]" : "border-[#F3F9FA]"
              )}>
                <Image
                  src={"/icon-person.svg"}
                  alt="person icon"
                  width={13}
                  height={16}
                />
                <input ref={personInput} onChange={handlePersonChange} type="number" min={0} placeholder="0" className=" hover:cursor-pointer focus:border-blue-400 text-2xl text-[#00474B] outline-none bg-[#F3F9FA] w-full " dir="rtl" />
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
                <p className="text-[32px] md:text-5xl text-[#26C2AE]">{"$"}{perPerson}</p>
              </div>
            </div>
            <button onClick={reset} className="bg-[#26C2AE] text-[#00474B] w-full text-xl py-[9px] rounded-[5px]">RESET</button>
          </div>
        </div>
      </div>
    </main>
  );
}
