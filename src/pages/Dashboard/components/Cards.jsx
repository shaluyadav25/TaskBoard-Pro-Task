import { cards as cardsData } from "../../../data/dashboard/cards/Cards";
const Cards = () => {
  return (
    <div className="p-2 overflow-x-hidden">
      <div className="flex justify-between ml-15">
        <div>
          <p className="text-xl mb-2">OVERVIEW</p>
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        </div>
        <div>
          {" "}
          <button
            type="submit"
            className="bg-blue-700 text-white text-center text-xl py-3 my-7 px-5 rounded-2xl border-none"
          >
            +New Task
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 ml-15">
        {cardsData.map((item) => (
          <div
            key={item.title}
            className={`bg-white p-6 w-75  h-40 rounded-xl shadow-xl ${item.css}`}
          >
            <div className="flex justify-between">
              <div>
                <p className="text-gray-500">{item.title}</p>

                <h2 className="text-3xl font-bold mt-2">{item.value}</h2>

                <p className="text-green-600 mt-4 font-semibold">
                  {item.change}
                </p>
              </div>

              <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex justify-between  ">
          <div className=" h-55 w-150 border-t-2 border-pink-500 rounded-2xl px-10 py-5 my-7 mx-10 shadow-2xl">
            <div className="flex justify-between mb-32">
              <h1 className="text-2xl font-bold">Weekly progress</h1>
              <p>Last 7 days</p>
            </div>
            <div className="flex  justify-between ">
              <p>M</p>
              <p>T</p>
              <p>W</p>
              <p>T</p>
              <p>F</p>
              <p>S</p>
              <p>S</p>
            </div>
          </div>
          <div className="shadow-2xl h-55 w-90 border-t-2 border-purple-700 rounded-2xl my-7 px-10 py-5">
            <h1 className="text-2xl font-bold">Completion rate</h1>

            <div className="flex justify-center mt-5">
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "conic-gradient(#10b981 0deg 236deg, #e5e7eb 236deg 360deg)",
                }}
              >
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">66%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="shadow-2xl h-120 w-150 p-7 m-5 rounded-2xl border-t-2 border-t-amber-400">
          <div className="flex justify-between m-5">
            <h1 className="font-bold text-2xl">Recent Tasks</h1>
            <p className="text-xl font-semibold text-blue-700">view all</p>
          </div>
          <div className="flex justify-between border-2 border-gray-400 rounded-2xl p-1 my-4">
            <div className="text-xl ">
              <h2 className="font-bold">Landing page redesign</h2>
              <p>2 hour ago</p>
            </div>
            <div className="bg-green-300 text-green-800 p-1 text-center rounded-2xl text-xl m-3 font-bold h-8 w-35">
              <h1>Completed</h1>
            </div>
          </div>
          <div className="flex justify-between border-2 border-gray-400 rounded-2xl p-1 my-3">
            <div className="text-xl ">
              <h2 className="font-bold">API Integration</h2>
              <p>Today</p>
            </div>
            <div className="bg-purple-300  text-blue-900 p-1 text-center rounded-2xl text-xl m-4 font-bold h-8 w-35">
              <h1>In Progress</h1>
            </div>
          </div>
          <div className="flex justify-between border-2 border-gray-400 rounded-2xl p-1 my-4">
            <div className="text-xl ">
              <h2 className="font-bold">Bug fix in login flow</h2>
              <p>yesterday</p>
            </div>
            <div className="bg-yellow-200 text-yellow-800 p-1 text-center rounded-2xl text-xl m-3 font-bold h-8 w-35">
              <h1>Pending</h1>
            </div>
          </div>
          <div className="flex justify-between border-2 border-gray-400 rounded-2xl p-1 my-4">
            <div className="text-xl ">
              <h2 className="font-bold">Client feedback review</h2>
              <p>2 day ago</p>
            </div>
            <div className="bg-green-300 text-green-800 p-1 text-center rounded-2xl text-xl m-3 font-bold h-8 w-35">
              <h1>Completed</h1>
            </div>
          </div>
        </div>
        <div className="shadow-2xl border-t-2 border-purple-900 h-120 w-95 p-7 m-2 rounded-2xl">
          <h1 className="font-bold text-2xl mb-7">Work split</h1>
          <div className="flex justify-between m-2">
            <p>Design</p>
            <p>36%</p>
          </div>
          <div className="bg-gray-300 h-5 w-80 rounded-3xl">
            <div className="bg-purple-800 w-36 h-5 rounded-3xl mb-10"></div>
          </div>
          <div className="flex justify-between m-2">
            <p>Development</p>
            <p>52%</p>
          </div>
          <div className="bg-gray-300 h-5 w-80 rounded-3xl">
            <div className="bg-sky-700 w-52 h-5 rounded-3xl mb-10"></div>
          </div>
          <div className="flex justify-between m-2">
            <p>Testing</p>
            <p>28%</p>
          </div>
          <div className="bg-gray-300 h-5 w-80 rounded-3xl">
            <div className="bg-green-700 w-28 h-5 rounded-3xl mb-10"></div>
          </div>
          <div className="flex justify-between m-2">
            <p>Review</p>
            <p>18%</p>
          </div>
          <div className="bg-gray-300 h-5 w-80 rounded-3xl">
            <div className="bg-yellow-600 w-18 h-5 rounded-3xl mb-10"></div>
          </div>
        </div>
      </div>
      <div className="shadow-2xl  m-10 p-10 w-250 h-120">
        <h1 className="text-2xl font-bold">Activity Logs</h1>
        <div className="m-7 border-l-2 border-l-gray-400">
          <h1 className="font-semibold"> 🔵 Aman marked "Landing page redesign" as complete</h1>
          <p className="ml-5 mb-10">10 min ago</p>
        </div>
         <div className="m-7 border-l-2 border-l-gray-400">
          <h1 className="font-semibold"> 🔵 New task assigned to UI team</h1>
          <p className="ml-5 mb-10">1 hour ago</p>
        </div>
         <div className="m-7 border-l-2 border-l-gray-400">
          <h1 className="font-semibold"> 🔵 Sprint review was updated</h1>
          <p className="ml-5 mb-10">3 min ago</p>
        </div>
         <div className="m-7 border-l-2 border-l-gray-400">
          <h1 className="font-semibold"> 🔵 Pending tasks were re-prioritized</h1>
          <p className="ml-5 mb-10">Yesterday</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
