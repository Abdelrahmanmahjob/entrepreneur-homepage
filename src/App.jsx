import Header from "./components/Header"

import { MdArrowCircleRight } from "react-icons/md";
import { FaCircleArrowDown } from "react-icons/fa6";


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
              <img className="w-[150px] mt-4 mb-8" src="/imgs/entr-tv.svg" alt="" />
            </div>
            <div className="entr-tv-info flex justify-between items-center gap-2">
              <div className="text">
                <p className="flex items-center gap-2 uppercase text-sm text-[#777]">
                  <span className="left-line inline-block w-[4px] h-[15px] bg-blue-700 "></span>
                  Business Operations & Logistics
                </p>
                <a className="font-bold block text-[13px] my-4">
                  Your Remote Team Could Be Putting Your Company Data at Risk. Take These Steps to Protect It.
                </a>
              </div>
              <div className="info-image">
                <img className="rounded-lg w-[120px] " src="/imgs/putting-company.webp" alt="" />
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
              <a className="pl-5 relative text-md sm:text-2xl font-[800] before:bg-blue-500 head" href="">Latest</a>
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
          gap-x-12"
        >
          <div className="post flex justify-between gap-4">
            <a className="font-bold text-sm sm:text-md" href="">When Your Industry Is Losing Steam, Pivoting Is the Wrong Move. Do This Instead.</a>
            <img className="w-[100px] h-[100px] rounded-md shadow-lg" src="/imgs/post-1.webp" alt="" />
          </div>
          <div className="post flex justify-between gap-4">
            <a className="font-bold text-sm sm:text-md" href="">OpenAI Is Paying Ex-Investment Bankers $150 an Hour to Train Its AI</a>
            <img className="w-[100px] h-[100px] rounded-md shadow-lg" src="/imgs/post-2.webp" alt="" />
          </div>
          <div className="post flex justify-between gap-4">
            <a className="font-bold text-sm sm:text-md" href="">Airbnb Is a Social Network Now</a>
            <img className="w-[100px] h-[100px] rounded-md shadow-lg" src="/imgs/post-3.webp" alt="" />
          </div>
          <div className="post flex justify-between gap-4">
            <a className="font-bold text-sm sm:text-md" href="">3 Things Business Owners Should Know About the New Overtime Tax Deduction</a>
            <img className="w-[100px] h-[100px] rounded-md shadow-lg" src="/imgs/post-4.webp" alt="" />
          </div>
          <div className="post flex justify-between gap-4">
            <a className="font-bold text-sm sm:text-md" href="">Is Art an Asset Class? Here’s What You Need to Know Before You Buy</a>
            <img className="w-[100px] h-[100px] rounded-md shadow-lg" src="/imgs/post-5.webp" alt="" />
          </div>
          <div className="post flex justify-between gap-4">
            <a className="font-bold text-sm sm:text-md" href="">Their Restaurant Sign Is So Famous It Has 1 Million Followers. Here’s How They Turned a Viral Hit Into a Business.</a>
            <img className="w-[100px] h-[100px] rounded-md shadow-lg" src="/imgs/post-6.webp" alt="" />
          </div>
        </section>

        <section className="making-money bg-[#fbf9f7] text-black px-[1rem] sm:px-[2rem] mt-[3rem] pt-[3rem] pb-[1rem]">
          <div className="main-title flex justify-between items-center mb-4 border-b-2 border-double border-blue-200 pb-4">
              <a className="pl-5 relative text-md sm:text-2xl font-[800] before:bg-green-500 head" href="">Making Money</a>
              <a className="flex gap-2 items-center font-[600]" href="">See All <MdArrowCircleRight className="text-green-600" /></a>
          </div>
          <div className="bg-[url(/imgs/make-money.webp)] text-white bg-cover bg-center rounded-lg flex flex-col items-center text-center gap-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
              <div className="relative z-20 flex flex-col max-w-[750px] gap-4 py-[4rem] px-[1rem]">
                  <FaCircleArrowDown className="text-[#0fb076] p-[2px] bg-white rounded-[50%] text-4xl p-0 self-center mb-2" /> 
                  <p className="flex items-center mx-auto gap-2 uppercase text-sm mb-1">
                      <span className="inline-block w-1 h-[15px] bg-blue-700"></span>
                      Side Hustle
                  </p>
                  <a className="font-bold text-2xl md:text-4xl leading-tight hover:text-gray-200 transition-colors duration-300" href="#">
                      This Mom’s ‘Scrappy’ Side Hustle Started in Her Garage — Now It Makes $5 Million a Year
                  </a>
                  <p className="text-base md:text-lg leading-relaxed mt-1">
                      Carinne Meyrignac, 45, couldn’t find the products she’d grown up with — so she created them herself.
                  </p>
              </div>
          </div>

          <div className="success-stories my-[3rem] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
            <div className="story">
              <img className="rounded-lg w-full object-cover" src="/imgs/sus-1.webp" alt="" />
              <a className="font-bold text-lg my-4 block" href="">LeBron James Wants You to Rethink What It Means to Be Qualified for Success</a>
              <p className="text-gray-600">LeBron James and UNINTERRUPTED challenge traditional hiring standards, highlighting how skills-based hiring and real-world experience create new career opportunities beyond college degrees.</p>
            </div>
            <div className="story">
              <img className="rounded-lg w-full object-cover" src="/imgs/sus-2.webp" alt="" />
              <a className="font-bold text-lg my-4 block" href="">Sisters’ Savory Side Hustle Averages $7,000 a Month: ‘Reward We Didn’t Feel in a Corporate Job’</a>
              <p className="text-gray-600">The four Lertlumprasert sisters had wanted to start a business together since they were kids.</p>
            </div>
            <div className="story">
              <img className="rounded-lg w-full object-cover" src="/imgs/sus-3.webp" alt="" />
              <a className="font-bold text-lg my-4 block" href="">This Nurse With ‘No Business Background’ Started a Side Hustle on Instagram. Now It’s a Multimillion-Dollar Brand.</a>
              <p className="text-gray-600">Jordan Harper, 38, didn’t set out to build a brand — but it came naturally.</p>
            </div>
          </div>
        </section>

        <section className="entreprenurs bg-[#fbf9f7] text-black px-[1rem] sm:px-[2rem] pb-[3rem]">
          <div className="main-title flex justify-between items-center mb-4 border-b-2 border-double border-blue-200 pb-4">
              <a className="pl-5 relative text-md sm:text-2xl font-[800] before:bg-blue-500 head" href="">Entreprenurs</a>
              <a className="flex gap-2 items-center font-[600]" href="">See All <MdArrowCircleRight className="text-blue-600" /></a>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 pt-4">
            <div className="flex flex-col gap-4">
              <img className="w-screen object-cover rounded-lg" src="/imgs/entre-1.webp" alt="" />
              <p className="flex items-center gap-2 uppercase text-sm mb-1">
                  <span className="inline-block w-1 h-[15px] bg-blue-700"></span>
                  human resources
              </p>
              <a className="font-bold text-xl leading-tight" href="#">
                  Founder’s Syndrome Is the New Burnout — and It’s Killing Creativity
              </a>
              <p className="text-base text-gray-[500] leading-relaxed mt-1">
                When new ideas run dry, it may be time to shake things up and turn a slump into a springboard for fresh ideas.
              </p>
              <p className="uppercase text-sm">by <a href="" className="text-blue-500">Magdalena Nowicka Mook</a> </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row justify-between gap-4 pb-4 border-b border-b-gray-300 mb-4">
                <div className="info flex flex-col gap-2">
                  <p className="flex items-center gap-2 uppercase text-[12px] mb-1">
                  <span className="inline-block w-1 h-[15px] bg-blue-700"></span>
                      side hustle
                  </p>
                  <a className="font-bold text-xl leading-tight" href="#">
                      Sisters’ Savory Side Hustle Averages $7,000 a Month: ‘Reward We Didn’t Feel in a Corporate Job’
                  </a>
                  <p className="uppercase text-sm">by <a href="" className="text-blue-500">Amanda Breen</a> </p>
                </div>
                <div className="image order-first sm:order-last">
                  <img className="w-full sm:w-[130px] h-[200px] sm:max-w-[150px] sm:h-full rounded-lg object-cover" src="/imgs/sus-2.webp" alt="" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-4 pb-4 border-b border-b-gray-300 mb-4">
                <div className="info flex flex-col gap-2">
                  <p className="flex items-center gap-2 uppercase text-[12px] mb-1">
                  <span className="inline-block w-1 h-[15px] bg-blue-700"></span>
                      building a business
                  </p>
                  <a className="font-bold text-xl leading-tight" href="#">
                    Stop Following This Popular Startup Advice — It’s Quietly Destroying Businesses	
                  </a>
                  <p className="uppercase text-sm">by <a href="" className="text-blue-500">muralinethi</a> </p>
                </div>
                <div className="image order-first sm:order-last">
                  <img className="w-full sm:w-[130px] h-[200px] sm:max-w-[150px] sm:h-full rounded-lg object-cover" src="/imgs/entre-2.webp" alt="" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-4 pb-4 border-b border-b-gray-300 mb-4">
                <div className="info flex flex-col gap-2">
                  <p className="flex items-center gap-2 uppercase text-[12px] mb-1">
                  <span className="inline-block w-1 h-[15px] bg-blue-700"></span>
                      building branding
                  </p>
                  <a className="font-bold text-xl leading-tight" href="#">
                    How to Turn Personal Adversity Into a PR Strategy That Accelerates Your Growth
                  </a>
                  <p className="uppercase text-sm">by <a href="" className="text-blue-500">Jeremy Knauff</a> </p>
                </div>
                <div className="image order-first sm:order-last">
                  <img className="w-full sm:w-[130px] h-[200px] sm:max-w-[150px] sm:h-full rounded-lg object-cover" src="/imgs/entre-3.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="franchises bg-[#e7eefe] text-black px-[1rem] sm:px-[4rem] py-[4rem]">
          <div className="main-title flex justify-between items-center mb-4 border-b-2 border-double border-blue-200 pb-4">
              <a className="pl-5 relative text-md sm:text-2xl font-[800] before:bg-purple-600 head" href="">Franchises</a>
              <a className="flex gap-2 items-center font-[600]" href="">See All <MdArrowCircleRight className="text-purple-600" /></a>
          </div>

          <div className="trending-tags-btns mt-6 flex gap-3 flex-wrap justify-center">
            <a className="bg-black hover:bg-[#e7eefe] hover:text-black border-2 py-[8px] px-[25px] font-bold rounded-3xl text-white cursor-pointer">Buying a Franchise 101</a>
            <a className="bg-black hover:bg-[#e7eefe] hover:text-black border-2 py-[8px] px-[25px] font-bold rounded-3xl text-white cursor-pointer">Find Your Franchise</a>
            <a className="bg-black hover:bg-[#e7eefe] hover:text-black border-2 py-[8px] px-[25px] font-bold rounded-3xl text-white cursor-pointer">Speak to an Advisor</a>
            <a className="bg-black hover:bg-[#e7eefe] hover:text-black border-2 py-[8px] px-[25px] font-bold rounded-3xl text-white cursor-pointer">Franchise 500</a>
            <a className="bg-black hover:bg-[#e7eefe] hover:text-black border-2 py-[8px] px-[25px] font-bold rounded-3xl text-white cursor-pointer">Franchise Boot Camp</a>
          </div>

          <div className="my-[3rem] flex flex-col sm:flex-row flex-wrap gap-6">
            <div className="order-2 lg:order-1 sm:basis-[30%] lg:basis-[20%] sm:grow">
              <div className="flex flex-col gap-4">
                <div className="img-frame">
                  <img className="w-full rounded-lg object-cover" src="/imgs/fran-1.webp" alt="" />
                </div>
                <p className="flex items-center gap-2 uppercase text-sm text-[#777]">
                  <span className="left-line inline-block w-[4px] h-[15px] bg-blue-700 "></span>
                  buying a franchise
                </p>
                <a className="font-bold block text-[13px]">
                  A Major Restaurant Operator Just Cashed Out of One of Its Biggest Brands — Here’s Why
                </a>
              </div>
              <div className="flex flex-col gap-4 mt-6">
                <div className="img-frame">
                  <img className="w-full rounded-lg object-cover" src="/imgs/fran-2.webp" alt="" />
                </div>
                <p className="flex items-center gap-2 uppercase text-sm text-[#777]">
                  <span className="left-line inline-block w-[4px] h-[15px] bg-blue-700 "></span>
                  buying a franchise
                </p>
                <a className="font-bold block text-[13px]">
                  These Are the Top Retail Franchises for 2025, According to the Franchise 500
                </a>
              </div>

              <div className="bg-[url(/imgs/fran-3.webp)] text-white bg-cover bg-center mt-6 flex flex-col items-center text-center gap-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
                <div className="relative z-20 flex flex-col max-w-[750px] py-[1rem] px-[1rem]">
                    <p className="font-bold text-xl">Find your franchise match in 2 minutes!</p>
                    <button className="bg-blue-600 rounded-md block mx-auto mt-8 text-white font-[500] cursor-pointer border-0 outline-0 py-[10px] px-[3rem]">Take the quiz</button>
                </div>
            </div>

            </div>

            <div className="order-1 lg:order-2 flex flex-col items-center sm:basis-[60%] lg:basis-[50%] text-center gap-4 ">
              <div className="building-image">
                <img className="rounded-lg" src="/imgs/fran-4.webp" alt="" />
              </div>
              <p className="flex items-center gap-2 uppercase text-sm"><span className="left-line inline-block w-[4px] h-[15px] bg-blue-700 "></span>buying a franchise</p>
              <p className="font-bold sm:text-3xl sm:font-bolder px-[1rem] ">This Family-Friendly Brand Is Snapping Up Vacant Stores — And Building a $600 Million Business in the Process</p>
              <p className="text-[#777] px-[1rem]">
                As national retailers shutter locations, Urban Air Adventure Park is transforming empty big-box stores into family destinations that drive foot traffic and revenue for retail centers.
              </p>
              <p className="text-sm">BY <span className="text-blue-500">CARL STOFFERS</span></p>
            </div>

            <div className="order-3 w-full sm:basis-[100%] lg:basis-[20%] lg:mt-0 sm:grow mt-4">
              <div className="main-title flex justify-between items-center mb-4">
                <a className="pl-5 relative text-md sm:text-2xl font-[800] before:bg-blue-500 head" href="">Featured-F</a>
                <a className="flex gap-2 items-center font-[600]" href="">See All <MdArrowCircleRight className="text-blue-600" /></a>
              </div>
              <div className="lg:flex lg:flex-col grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                <div className="flex items-center gap-3">
                  <img className="max-w-[150px] max-h-[120px] object-cover rounded-lg" src="/imgs/fran-5.webp" alt="" />
                  <div>
                    <p className="text-blue-700 mb-[10px] font-semibold">Kumon</p>
                    <p className="font-italic">Tutoring</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <img className="max-w-[150px] max-h-[120px] object-cover rounded-lg" src="/imgs/fran-6.webp" alt="" />
                  <div>
                    <p className="text-blue-700 mb-[10px] font-semibold">PuroClean</p>
                    <p className="font-italic">Restoration</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <img className="max-w-[150px] max-h-[120px] object-cover rounded-lg" src="/imgs/fran-7.webp" alt="" />
                  <div>
                    <p className="text-blue-700 mb-[10px] font-semibold">Angry Crab Shack</p>
                    <p className="font-italic">Seafood Boil Restaurant</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <img className="max-w-[150px] max-h-[120px] object-cover rounded-lg" src="/imgs/fran-8.webp" alt="" />
                  <div>
                    <p className="text-blue-700 mb-[10px] font-semibold">Mathnasimum</p>
                    <p className="font-italic">Math Tutoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="franchise-lists">
            <h2 className="text-2xl font-bold mb-5">Franchise Lists</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
              <div>
                <a className="block font-bold mb-1 text-lg" href="">📈 Fastest-Growing Franchises</a>
                <p className="text-[#777]">Meet the companies scaling quickly across the U.S. and Canada in our annual ranking</p>
              </div>
              <div>
                <a className="block font-bold mb-1 text-lg" href="">💫 Top New & Emerging Franchises</a>
                <p className="text-[#777]">Get in on the ground floor with top companies franchising for five years or less.</p>
              </div>
              <div>
                <a className="block font-bold mb-1 text-lg" href="">💳 Top Franchises for Less Than $50,000</a>
                <p className="text-[#777]">Looking for a franchise on a budget? Explore top options under $50,000.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
