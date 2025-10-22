import Header from "./components/Header"

import { MdArrowCircleRight } from "react-icons/md";


function App() {
  return (
    <>
      <Header />
      <main>
        <section className="trending-tags-btns px-[1rem] sm:px-[2rem] mt-6 flex gap-3 flex-wrap justify-center">
          <a className="bg-black hover:bg-[#fff7ed] hover:text-black border-2 py-[8px] px-[25px] font-bold rounded-3xl text-white cursor-pointer">Success Stories</a>
          <a className="bg-black hover:bg-[#fff7ed] hover:text-black border-2 py-[8px] px-[25px] font-bold rounded-3xl text-white cursor-pointer">Business Ideas</a>
          <a className="bg-black hover:bg-[#fff7ed] hover:text-black border-2 py-[8px] px-[25px] font-bold rounded-3xl text-white cursor-pointer">Franchising 101</a>
          <a className="bg-black hover:bg-[#fff7ed] hover:text-black border-2 py-[8px] px-[25px] font-bold rounded-3xl text-white cursor-pointer">Mom & Pop</a>
        </section>

        <section className="hero-section mb-[2rem] flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8 px-[1rem] sm:px-[2rem] mt-[3rem]">
          <div className="order-2 lg:order-1 sm:basis-[30%] lg:basis-[20%] sm:grow">
            <div className="video-frame">
              <video src="/videos/hero-v.mp4" autoPlay controls loop ></video>
            </div>
            <div className="entr-tv-image">
              <img className="w-[200px] mt-4 mb-8" src="/imgs/entr-tv.svg" alt="" />
            </div>
            <div className="entr-tv-info flex justify-between items-center gap-2">
              <div className="text">
                <p className="flex items-center gap-2 uppercase text-sm text-[#777]">
                  <span className="left-line inline-block w-[4px] h-[15px] bg-blue-700 "></span>
                  Business Operations & Logistics
                </p>
                <a className="font-bold block my-4">
                  Your Remote Team Could Be Putting Your Company Data at Risk. <br /> Take These Steps to Protect It.
                </a>
              </div>
              <div className="info-image">
                <img className="rounded-lg w-[120px] " src="/public/imgs/putting-company.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col items-center sm:basis-[60%] lg:basis-[50%] text-center gap-4 ">
            <div className="building-image">
              <img className="rounded-lg" src="/imgs/building-company.webp" alt="" />
            </div>
            <p className="flex items-center gap-2 uppercase text-sm"><span className="left-line inline-block w-[4px] h-[15px] bg-blue-700 "></span> Thought Leaders</p>
            <p className="font-bold sm:text-3xl sm:font-bolder">What a Company With Near-Zero Turnover Taught Me About Building Culture That Lasts</p>
            <p className="text-[#777] ">
              The best leaders know customer service isn’t a department, it’s a culture.
              I saw one company prove it beyond question, and it reaffirmed everything I believe about real leadership.
            </p>
            <p className="text-sm">BY <span className="text-blue-500">Scott Deming</span></p>
          </div>
          <div className="order-3 w-full sm:basis-[100%] lg:basis-[20%] lg:mt-0 sm:grow mt-4">
            <div className="main-title flex justify-between items-center mb-4">
              <a className="pl-5 relative text-2xl font-[800] head" href="">Latest</a>
              <a className="flex gap-2 items-center font-[600]" href="">See All <MdArrowCircleRight className="text-blue-600" /></a>
            </div>
            <ul>
              <li className="mb-6">
                <h5 className="uppercase text-[#777] text-sm mb-2">about 9 hours ago</h5>
                <a className="font-bold" href="">How Being ‘Real’ Can Backfire for Leaders — and What True Authenticity Looks Like</a>
              </li>
              <li className="mb-6">
                <h5 className="uppercase text-[#777] text-sm mb-2">about 10 hours ago</h5>
                <a className="font-bold" href="">Your Remote Team Could Be Putting Your Company Data at Risk. Take These Steps to Protect It.</a>
              </li>
              <li className="mb-6">
                <h5 className="uppercase text-[#777] text-sm mb-2">about 10 hours ago</h5>
                <a className="font-bold" href="">When Your Industry Is Losing Steam, Pivoting Is the Wrong Move. Do This Instead.</a>
              </li>
              <li className="mb-6">
                <h5 className="uppercase text-[#777] text-sm mb-2">about 11 hours ago</h5>
                <a className="font-bold" href="">When Your Industry Is Losing Steam, Pivoting Is the Wrong Move. Do This Instead.</a>
              </li>
              <li className="mb-6">
                <h5 className="uppercase text-[#777] text-sm mb-2">about 11 hours ago</h5>
                <a className="font-bold" href="">This Family-Friendly Brand Is Snapping Up Vacant Stores — And Building a $600 Million Business in the Process</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="news-post px-[1rem] sm:px-[2rem] my-[3rem] max-w-7xl 
          mx-auto 
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          gap-y-8 
          gap-x-12">
          <div className="post flex justify-between gap-4">
            <a className="font-bold text-sm sm:text-md" href="">When Your Industry Is Losing Steam, Pivoting Is the Wrong Move. Do This Instead.</a>
            <img className="w-[100px] h-[100px] rounded-md shadow-lg" src="/public/imgs/post-1.webp" alt="" />
          </div>
          <div className="post flex justify-between gap-4">
            <a className="font-bold text-sm sm:text-md" href="">OpenAI Is Paying Ex-Investment Bankers $150 an Hour to Train Its AI</a>
            <img className="w-[100px] h-[100px] rounded-md shadow-lg" src="/public/imgs/post-2.webp" alt="" />
          </div>
          <div className="post flex justify-between gap-4">
            <a className="font-bold text-sm sm:text-md" href="">Airbnb Is a Social Network Now</a>
            <img className="w-[100px] h-[100px] rounded-md shadow-lg" src="/public/imgs/post-3.webp" alt="" />
          </div>
          <div className="post flex justify-between gap-4">
            <a className="font-bold text-sm sm:text-md" href="">3 Things Business Owners Should Know About the New Overtime Tax Deduction</a>
            <img className="w-[100px] h-[100px] rounded-md shadow-lg" src="/public/imgs/post-4.webp" alt="" />
          </div>
          <div className="post flex justify-between gap-4">
            <a className="font-bold text-sm sm:text-md" href="">Is Art an Asset Class? Here’s What You Need to Know Before You Buy</a>
            <img className="w-[100px] h-[100px] rounded-md shadow-lg" src="/public/imgs/post-5.webp" alt="" />
          </div>
          <div className="post flex justify-between gap-4">
            <a className="font-bold text-sm sm:text-md" href="">Their Restaurant Sign Is So Famous It Has 1 Million Followers. Here’s How They Turned a Viral Hit Into a Business.</a>
            <img className="w-[100px] h-[100px] rounded-md shadow-lg" src="/public/imgs/post-6.webp" alt="" />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
