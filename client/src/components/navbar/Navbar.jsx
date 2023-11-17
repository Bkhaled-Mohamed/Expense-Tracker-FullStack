import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GiReceiveMoney, GiPayMoney, GiTakeMyMoney } from "react-icons/gi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log("the location is: ", location.pathname);
  return (
    <nav className=" bg-white bg-opacity-60 w-64 h-screen   relative">
      <div className="flex flex-row justify-center rounded-b-md pt-5 pb-5 pl-3  ">
        <h1 className="text-xl text-black flex flex-row relative ">
          <span className=" absolute left-[-30px] top-1 scale-150 ">
            {<GiTakeMyMoney />}
          </span>
          <span className="text-xl">MyExpense</span>
        </h1>
      </div>

      <div className="w-[250px] m-auto flex flex-col p-8">
        <Link
          to="/"
          className={`flex items-center   mb-2   hover:bg-gray-900 hover:text-white p-2 px-6 rounded ${
            location.pathname == "/" ? "bg-gray-900 text-white" : ""
          }`}
        >
          <MdOutlineDashboardCustomize />
          <span className="ml-4">Dashboard</span>
        </Link>
        <Link
          to="/income"
          className={`flex items-center mb-2 text-black hover:bg-gray-900 hover:text-white p-2 px-6 rounded ${
            location.pathname == "/income" ? "bg-gray-900 text-white" : ""
          }`}
        >
          <GiReceiveMoney />
          <span className="ml-4">Incomes</span>
        </Link>
        <Link
          to="/expense"
          className={`flex items-center mb-2 text-black hover:bg-gray-900 hover:text-white p-2 px-6 rounded ${
            location.pathname == "/expense" ? "bg-gray-900 text-white" : ""
          }`}
        >
          <GiPayMoney />
          <span className="ml-4">Expenses</span>
        </Link>
        <Link
          to="/transactions"
          className={`flex items-center mb-2 text-black hover:bg-gray-900 hover:text-white p-2 px-6 rounded ${
            location.pathname == "/transactions" ? "bg-gray-900 text-white" : ""
          }`}
        >
          <FaMoneyBillTransfer />
          <span className="ml-4">Transactions</span>
        </Link>
        <Link
          to="/logout"
          className={`flex items-center mb-2 text-black hover:bg-gray-900 hover:text-white p-2 px-6 rounded ${
            location.pathname == "/logout" ? "bg-gray-900 text-white" : ""
          }`}
        >
          <TbLogout />
          <span className="ml-4">Sign out</span>
        </Link>
      </div>

      <div className=" absolute bottom-5 w-full">
        <div className=" relative bg-gray-900 w-10/12 h-fit p-3 pt-10 text-center m-auto rounded-md ">
          <div className=" absolute top-[-80px] left-[25%] bg-white rounded-full w-28 h-28">
            <div className=" translate-x-[-12px]">
              <svg
                width="120px"
                height="120px"
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M599.18848 470.48704m-345.18528 0a345.18528 345.18528 0 1 0 690.37056 0 345.18528 345.18528 0 1 0-690.37056 0Z"
                  fill="#FFEC43"
                />
                <path
                  d="M599.18336 823.5264c-194.66752 0-353.04448-158.37696-353.04448-353.04448S404.52096 117.4528 599.18336 117.4528s353.04448 158.36672 353.04448 353.02912-158.37696 353.04448-353.04448 353.04448z m0-690.37568c-186.00448 0-337.33632 151.33696-337.33632 337.33632 0 186.0096 151.32672 337.34656 337.33632 337.34656s337.33632-151.33696 337.33632-337.34656c0-185.99936-151.32672-337.33632-337.33632-337.33632z"
                  fill="#6B0204"
                />
                <path
                  d="M203.83232 770.58048c4.26496 5.56032 2.176 14.32064-4.66944 19.56864l-65.33632 50.10944c-6.84544 5.248-15.8464 4.99712-20.11136-0.5632-4.26496-5.56032-2.176-14.32064 4.66944-19.56864l65.33632-50.10944c6.84032-5.248 15.8464-4.99712 20.11136 0.5632zM218.85952 852.56704c4.26496 5.56032 2.176 14.32064-4.66944 19.56864l-65.33632 50.10944c-6.84544 5.248-15.8464 4.99712-20.11136-0.5632-4.26496-5.56032-2.176-14.32064 4.66944-19.56864l65.33632-50.10944c6.84544-5.25312 15.8464-4.99712 20.11136 0.5632zM128.55296 734.81216c4.26496 5.56032 2.176 14.32064-4.66944 19.56864l-65.33632 50.10944c-6.84544 5.248-15.8464 4.99712-20.11136-0.5632-4.26496-5.56032-2.176-14.32064 4.66944-19.56864l65.33632-50.10944c17.48992-13.41952 21.73952 2.688 20.11136 0.5632z"
                  fill="#6C0000"
                />
                <path
                  d="M336.03584 451.57376S241.68448 394.15808 71.5264 538.3168l164.0192 72.28928 100.49024-159.03232z"
                  fill="#BED5E9"
                />
                <path
                  d="M238.5664 620.52864l-181.69344-80.09216 9.57952-8.1152c97.44896-82.55488 171.008-99.8912 215.552-99.8912 37.248 0 57.27232 11.92448 58.112 12.43648l6.81984 4.15232-108.36992 171.50976z m-152.2688-84.28032l146.22208 64.44544 92.05248-145.67424c-7.98208-2.96448-22.34368-6.87616-42.56768-6.87616-40.45824 0-106.7776 15.55456-195.70688 88.10496z"
                  fill="#6C0000"
                />
                <path
                  d="M538.85952 716.04224s30.98624 106.0096-152.36608 232.96512l-27.28448-177.152 179.65056-55.81312z"
                  fill="#BED5E9"
                />
                <path
                  d="M380.64128 962.60608l-30.22848-196.2496 193.74592-60.17536 2.23744 7.66976c1.33632 4.55168 30.4384 112.92672-155.43808 241.6128l-10.3168 7.1424z m-12.64128-185.25696l24.31488 157.93152c138.07616-99.41504 142.6688-183.49568 140.26752-209.05984l-164.5824 51.12832z"
                  fill="#6C0000"
                />
                <path
                  d="M581.10464 683.12064c151.43424-116.13696 228.90496-269.3376 173.04064-342.18496-55.86944-72.84736-223.91808-37.75488-375.35744 78.38208-98.62656 75.63776-165.8368 166.98368-185.31328 241.63328l0.0512 0.01536a4.06016 4.06016 0 0 0-0.41472 1.49504c-0.1792 2.53952 93.87008 32.74752 100.48512 131.67616 0.0768 1.14176 0.53248 2.2528 1.23392 3.16928 0.896 1.16736 2.19648 2.01728 3.60448 2.22208a3.82976 3.82976 0 0 0 1.3568-0.09216c77.12768 0.50688 182.72768-40.71424 281.31328-116.31616z"
                  fill="#BED5E9"
                />
                <path
                  d="M298.81344 807.40864l-1.6128-0.128c-3.28704-0.47104-6.46656-2.39104-8.6272-5.22752a13.4144 13.4144 0 0 1-2.816-7.4496c-3.56864-53.248-34.176-94.38208-90.98752-122.20416-5.74464-2.81088-9.89696-4.84352-9.50272-10.48064 0.07168-1.024 0.27648-2.01728 0.62464-3.01568 20.77184-79.52896 91.08992-171.4176 188.11392-245.81632 96.32256-73.87648 202.75712-117.9904 284.71296-117.9904 45.90592 0 81.05472 14.20288 101.65248 41.05728 58.40384 76.16512-19.87072 234.60864-174.4896 353.20832-96.29696 73.84064-202.71616 117.9392-284.672 117.9392h-0.00512l-2.39104 0.10752z m-96.55808-148.82816c61.14304 30.12608 94.44864 74.86464 99.02592 133.00736 78.60736-0.0256 181.41696-42.89536 275.04128-114.70336 147.74784-113.32096 224.72192-261.88288 171.58656-331.17184-17.5104-22.83008-48.35328-34.90816-89.1904-34.90816-78.61248 0-181.47328 42.89536-275.15392 114.75456-92.58496 70.9888-160 157.73696-181.30944 233.02144z"
                  fill="#6C0000"
                />
                <path
                  d="M503.3216 728.69376L312.61696 477.37856a598.7328 598.7328 0 0 0-29.91616 33.96608l180.04992 237.28128a595.5584 595.5584 0 0 0 40.57088-19.93216z"
                  fill="#FFFFFF"
                />
                <path
                  d="M460.2624 758.32832L272.7168 511.1808l3.89632-4.79232a613.08416 613.08416 0 0 1 30.30016-34.42176l6.36416-6.71232 201.85088 266.01472-8.08448 4.34688a605.71648 605.71648 0 0 1-41.09824 20.18304l-5.6832 2.52928zM292.7104 511.55456l172.51328 227.34848a601.32864 601.32864 0 0 0 26.24512-12.82048L311.99232 489.54368a587.58656 587.58656 0 0 0-19.28192 22.01088z"
                  fill="#6C0000"
                />
                <path
                  d="M419.3792 774.8352l-171.10528-223.10912c-6.89152 8.62208-14.73536 20.84864-20.15232 33.6896l152.36096 200.97536c10.88512-1.45408 28.77952-7.13728 38.89664-11.55584z"
                  fill="#FFFFFF"
                />
                <path
                  d="M376.9856 794.76736l-157.86496-208.22528 1.7664-4.17792c5.06368-12.01664 12.80512-24.96512 21.248-35.5328l6.26176-7.84896 183.31648 239.03232-9.1904 4.01408c-10.58304 4.62848-29.27616 10.58304-41.00608 12.14464l-4.5312 0.59392z m-139.8016-210.39616l146.688 193.47456c6.85568-1.36704 15.47264-3.91168 22.912-6.53312L248.39168 564.7872a143.44704 143.44704 0 0 0-11.20768 19.584z"
                  fill="#6C0000"
                />
                <path
                  d="M556.5184 492.27264m-71.2192 0a71.2192 71.2192 0 1 0 142.4384 0 71.2192 71.2192 0 1 0-142.4384 0Z"
                  fill="#ECF3FE"
                />
                <path
                  d="M556.5184 571.33056c-43.5968 0-79.07328-35.456-79.07328-79.0528s35.47648-79.06816 79.07328-79.06816 79.06816 35.47136 79.06816 79.06816-35.46624 79.0528-79.06816 79.0528z m0-142.42304c-34.93888 0-63.36512 28.42624-63.36512 63.37024 0 34.93376 28.42624 63.36 63.36512 63.36s63.36-28.42624 63.36-63.36c0-34.944-28.42112-63.37024-63.36-63.37024z"
                  fill="#6C0000"
                />
                <path
                  d="M577.90464 436.29056c19.53792 10.0096 27.80672 33.41824 25.20064 56.7296-5.67808 50.88256-65.88416 56.3712-71.92576 54.3488a60.13952 60.13952 0 0 0 27.50976 6.6304c33.37216 0 60.42624-27.05408 60.42624-60.42624 0-26.6496-17.26464-49.2544-41.21088-57.28256z"
                  fill="#BED5E9"
                />
                <path
                  d="M953.2416 170.83392m-38.42048 0a38.42048 38.42048 0 1 0 76.84096 0 38.42048 38.42048 0 1 0-76.84096 0Z"
                  fill="#FFC700"
                />
                <path
                  d="M953.24672 217.09824c-25.51808 0-46.2848-20.75648-46.2848-46.26944s20.7616-46.26944 46.2848-46.26944 46.27456 20.75648 46.27456 46.26944-20.75648 46.26944-46.27456 46.26944z m0-76.84096a30.60736 30.60736 0 0 0-30.57152 30.57152 30.60736 30.60736 0 0 0 30.57152 30.57152 30.60224 30.60224 0 0 0 30.5664-30.57152 30.60736 30.60736 0 0 0-30.5664-30.57152z"
                  fill="#6C0000"
                />
                <path
                  d="M219.4944 205.66016m-28.81536 0a28.81536 28.81536 0 1 0 57.63072 0 28.81536 28.81536 0 1 0-57.63072 0Z"
                  fill="#6C0000"
                />
              </svg>
            </div>
          </div>
          <div>
            <h1 className="text-white text-xl mb-2">Upgrade to PRO</h1>
            <p className=" text-gray-300 text-xs mb-2">
              Unlock all features and <br />
              get more facilities
            </p>
            <button className="rounded-md py-2 px-5 text-sm font-medium bg-green-400 hover:bg-green-600">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;