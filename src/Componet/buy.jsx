import double from "../assets/double.png"
import single from "../assets/single.png"
import triple from "../assets/triple.png"

function Buy() {
  return (
   <div className="buy  bg-white">
       <div className="container  m-auto px-8 py-12 grid ms:grid-cols-2 md:grid-cols-3 gap-4 ">
        <div className=" cart mb-8 shadow-xl py-2 px-4  rounded-sm flex flex-col items-center justify-center">
            <img src={single} alt="" className="w-[80px]  translate-x-2  " />
            <h3>single User </h3>
            <div className="font-bold text-4xl my-2">$149</div>
            <div className="content  divide-y-2 w-[70%] text-center ">
                <div className="py-2">500Gb stroge </div>
                <div className="py-2">1 granted user  </div>
                <div className="py-2"> sedn up to 2GB</div>
            </div>
            <button className="btn bg-green-500 text-black min-w-[200px] w-full capitalize" >start trial </button>
        </div>
        <div className=" cart mb-8 shadow-xl py-2 px-4  rounded-sm  flex flex-col items-center justify-center">
            <img src={double} alt="" className="w-[80px]  translate-x-2  " />
            <h3>single User </h3>
            <div className="font-bold text-4xl my-2">$149</div>
            <div className="content  divide-y-2 w-[70%] text-center ">
                <div className="py-2">500Gb stroge </div>
                <div className="py-2">1 granted user  </div>
                <div className="py-2"> sedn up to 2GB</div>
            </div>
            <button className="btn bg-green-500 text-black min-w-[200px] w-full capitalize" >start trial </button>
        </div>
        <div className=" cart mb-8 shadow-xl px-4 py-2 rounded-sm  flex flex-col items-center justify-center">
            <img src={triple} alt="" className="w-[80px]  translate-x-2  " />
            <h3>single User </h3>
            <div className="font-bold text-4xl my-2">$149</div>
            <div className="content  divide-y-2 w-[70%] text-center ">
                <div className="py-2">500Gb stroge </div>
                <div className="py-2">1 granted user  </div>
                <div className="py-2"> sedn up to 2GB</div>
            </div>
            <button className="btn bg-green-500 text-black min-w-[200px] w-full capitalize" >start trial </button>
        </div>
       </div>
   </div>
  )
}

export default Buy