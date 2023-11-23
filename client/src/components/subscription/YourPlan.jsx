import upgradeImg from "../../assets/upgradePlan.png";
import { MdOutlineDone } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
const YourPlan = ({ showPlan, setShowPlan }) => {
  return (
    <>
      <div className="absolute w-screen h-screen bg-blue-300 top-0 left-0 z-40 bg-opacity-25 flex justify-center items-center">
        <div className="w-[450px] md:w-[650px] max-w-[1120px] lg:w-[85%] h-[650px] bg-gray-100 rounded-lg shadow-2xl shadow-blue-950 flex flex-row justify-between items-center px-2 md:px-6 gap-1 lg:gap-2 relative scale-75 md:scale-100">
          <div
            onClick={() => setShowPlan(!showPlan)}
            className=" absolute top-3 right-3 text-4xl cursor-pointer z-50"
          >
            <FaTimes />
          </div>

          <div className="h-[90%] lg:w-[380px] w-[250px] bg-slate-900 rounded-lg flex flex-col items-center text-white p-2 lg:p-5 relative">
            <h1 className="text-4xl lg:text-5xl font-extralight">
              Save your <span className=" font-medium">money now</span>
            </h1>
            <p className="font-light my-3 text-slate-200">
              start your 15 day free plan, you can always upgrade it or stay on
              the lite version for free.
            </p>
            <img
              src={upgradeImg}
              alt="upgrade image"
              className=" absolute bottom-6 text-center scale-125"
            />
          </div>

          <div className="flex h-full flex-col w-full relative m-0 p-0  py-6">
            <div className="h-[90%] ml-3  lg:py-2 ">
              <h1 className=" text-lg lg:text-5xl font-extralight">
                Start now <br /> your{" "}
                <span className=" font-medium">free plan.</span>
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row h-[600px] lg:h-[450px] pb-8 justify-between items-center lg:px-10 ">
              <div className="w-[280px] h-[400px] bg-gray-300 lg:scale-100 rounded-lg relative scale scale-75">
                <div className="flex flex-row p-3  justify-between">
                  <h1 className="text-2xl font-medium underline-offset-8 underline ">
                    Lite
                  </h1>

                  <h1 className="text-xl font-medium text-right m-0 ">
                    Free <br />{" "}
                    <p className="text-xs font-light ">with restrictions</p>
                  </h1>
                </div>
                <article className="p-4  ">
                  <p className="text-light text-xs flex flex-row gap-2 mt-2 ">
                    <MdOutlineDone /> <span>Lorem ipsum dolor sit amet.</span>
                  </p>
                  <p className="text-light text-xs flex flex-row gap-2 mt-2">
                    <MdOutlineDone />{" "}
                    <span>
                      Lorem ipsum dolor sit amet. ipsum dolor sit amet.
                    </span>
                  </p>
                  <p className="text-light text-xs flex flex-row gap-2 mt-2">
                    <MdOutlineDone />{" "}
                    <span>
                      Lorem ipsum dolor sit amet ipsum dolor sit amet.ipsum
                      dolor sit amet..
                    </span>
                  </p>
                  <p className="text-light text-xs flex flex-row gap-2 mt-2">
                    <MdOutlineDone />{" "}
                    <span>
                      Lorem ipsum dolor sit amet ipsum dolor sit amet.
                    </span>
                  </p>
                </article>
                <div className="w-full flex justify-center">
                  <button className="bg-slate-800 rounded-lg text-white font-light hover:bg-slate-900 py-2 px-4 mx-auto lg:absolute bottom-6 text-center">
                    {" "}
                    Start 15 days free Pro plan
                  </button>
                </div>
              </div>
              <div className="w-[280px] h-[400px] bg-slate-800 lg:scale-100 rounded-lg relative scale scale-75 text-white">
                <div className="flex flex-row p-3 justify-between re">
                  <h1 className="text-2xl font-medium underline-offset-8 underline">
                    Pro
                  </h1>

                  <h1 className="text-xl font-medium text-right m-0">
                    Paied <br />{" "}
                    <p className="text-xs font-light ">no restrictions</p>
                  </h1>
                </div>
                <article className="p-4 ">
                  <p className="text-light text-xs flex flex-row gap-2 mt-2 ">
                    <MdOutlineDone /> <span>Lorem ipsum dolor sit amet.</span>
                  </p>
                  <p className="text-light text-xs flex flex-row gap-2 mt-2">
                    <MdOutlineDone />{" "}
                    <span>
                      Lorem ipsum dolor sit amet. ipsum dolor sit amet.
                    </span>
                  </p>
                  <p className="text-light text-xs flex flex-row gap-2 mt-2">
                    <MdOutlineDone />{" "}
                    <span>
                      Lorem ipsum dolor sit amet ipsum dolor sit amet.ipsum
                      dolor sit amet..
                    </span>
                  </p>
                  <p className="text-light text-xs flex flex-row gap-2 mt-2">
                    <MdOutlineDone />{" "}
                    <span>
                      Lorem ipsum dolor sit amet ipsum dolor sit amet.
                    </span>
                  </p>
                </article>
                <div className="w-full flex justify-center">
                  <button className="bg-green-500 rounded-lg text-black font-medium hover:cursor-not-allowed py-2 px-4 mx-auto lg:absolute bottom-6 text-center flex flex-row justify-center items-center gap-2">
                    {" "}
                    <MdOutlineDone className="text-green-500 rounded-full bg-white text-2xl font-bold" />{" "}
                    your subscribed to Pro
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourPlan;
