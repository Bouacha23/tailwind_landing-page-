

function Tips() {
  return (
    <div className="Tips text-white min-h-[400px]  items-center flex flex-col">
        <div className="container  m-auto grid  md:grid-cols-2 gap-4 py-8 px-4 ">
            <div className="content text-center ">
                <h1>want tips & tricks to optimize your flow ?</h1>
                <p>sign up to our newsitter and stay up to date </p>
            </div>
           <form action="  " className="flex flex-col justify-center items-center ">
            <input  className="px-4 py-2 min-w-[300px] w-full rounded-xl "  type="text "  placeholder="Enter Email" />
            <input type="submit" value="notify me " className="btn  bg-green-500" />
           </form>
           <p className="text-center ">we care about the pretection of your data our <span className="text-green-500 underline  ">Privacy Policy </span></p>
        </div>

    </div>
  )
}

export default Tips