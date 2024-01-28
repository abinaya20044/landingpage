


const MidSection = () => {
    return (
      <div className="flex flex-col-reverse items-center lg:flex-row w-full justify-between text-white" >
          <div className="flex flex-col items-center lg:items-start" >
              <h3 className="text-[10vw] sm:text-[4rem] font-medium ">BEYOND THE STARS</h3>
              <p className="text-[4vw] sm:text-[1.4rem] font-light " > Let's learn about space!</p>
              <button className="px-8 py-2 mt-10 bg-white rounded-3xl text-[#210535] " >Get Started</button>
          </div>
  
  
          <div className="mb-6 lg:mb-0" >
              <img src={require("../images/space-man.png")} className="w-[24rem]" />
          </div>
  
      </div>
    )
  }
  
  export default MidSection

