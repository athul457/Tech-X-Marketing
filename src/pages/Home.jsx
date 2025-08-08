export default function Home() {
  return (
    <main className="overflow-x-hidden relative">
      {/* top header */}
      <header className="flex items-center justify-center bg-gray-100 p-10 text-black w-screen h-[800px]">
        {/*  left side */}
        <div className="flex-col basis-[50%] mr-100">
          <div className="bg-blue-400 w-[260px] h-[60px] p-2  rounded-4xl mt-5 font-bold flex items-center justify-center">
            <span className="text-3xl">⚡</span> Power Up Your Business:
          </div>

          <div className="mt-10 text-5xl font-bold">
            Elevate Your Marketing and Sales with TechX-Marketing All-in-One
            Platform!
          </div>

          <div className="mb-30">
            <button className="bg-amber-400 mt-10 w-[380px] h-[80px] rounded-lg shadow-yellow-800 shadow-lg  ">
              <span className="text-xl font-bold uppercase">
                14 days free trial
              </span>
              <span className="block text-md italic">
                No obligations, no contracts, cancel at any time
              </span>
            </button>
          </div>
        </div>

        {/* right side */}
        <div>
          <h1>right side</h1>
        </div>
      </header>

      {/* OVERLAY div*/}
      <div className="absolute left-[23px]   w-[97%] top-150 z-10 text-black">
        <div className="  bg-gray-200 bg-opacity-70  flex flex-col  font-semibold rounded-3xl shadow-xl">
          <div className="mt-10 flex justify-center items-center">
            <h1 className="text-black text-xl">AWARDS</h1>
          </div>
          <div className="flex flex-wrap justify-around mt-15">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div
                key={num}
                className="w-[100px] h-[100px] border-2 flex justify-center items-center rounded-lg shadow-md"
              >
                {num}
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center ">
            <div>
              <h3>watch demo</h3>
              <div className="w-[450px] h-[300px] border-4 rounded-lg mb-5"></div>
            </div>
            <div className="ml-20">
              <div className=" text-justify ml-40 mt-10">
                <div className="text-2xl text-blue-600 font-bold ml-10">
                  We're In The Business Of
                </div>
                <div className="text-2xl text-blue-600 font-bold">
                  Helping You Grow Your Business
                </div>
              </div>
              <div className="text-justify w-[750px] mt-2">
                <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg ">
                  HighLevel is the first-ever all-in-one platform that will give
                  you the tools, support, and resources you need to succeed and
                  crush your marketing goals. Currently serving:
                </p>
              </div>
              {/* grids */}
              <div className="grid grid-cols-4  gap-2 items-center justify-center mt-5 mb-10">
                <div className="bg-gray-300 flex flex-col items-center justify-center w-[200px] h-[150px] rounded-md hover:bg-gray-400 transform translate duration-300 ease-in-out delay-150">
                  <h1 className="text-3xl font-bold text-blue-600">19M</h1>
                  <p className="ml-10 mt-2 text-yellow-400">
                    <span className="ml-7">MONTHLY</span>{" "}
                    <span>CONVERSATIONS</span>
                  </p>
                </div>
                <div className="bg-gray-300 flex flex-col items-center justify-center w-[200px] h-[150px] rounded-md hover:bg-gray-400 transform translate duration-300 ease-in-out delay-150">
                  <h1 className="text-3xl font-bold text-blue-600">2M+</h1>
                  <p className="mt-2 text-yellow-400">
                    <span>BUSINESSES</span>
                    <br />
                    <span className="ml-2">POWERED</span>
                  </p>
                </div>
                <div className="bg-gray-300 flex flex-col items-center justify-center w-[200px] h-[150px] rounded-md hover:bg-gray-400 transform translate duration-300 ease-in-out delay-150">
                  <h1 className="text-3xl font-bold text-blue-600">1.37B</h1>
                  <p className="mt-2 text-yellow-400">
                    <span>MONTHLY</span>
                    <br />
                    <span>MESSAGES</span>
                  </p>
                </div>
                <div className="bg-gray-300 flex flex-col items-center justify-center w-[200px] h-[150px] rounded-md hover:bg-gray-400 transform translate duration-300 ease-in-out delay-150">
                  <h1 className="text-3xl font-bold text-blue-600">194M</h1>
                  <p className="mt-2 text-yellow-400">
                    <span>MONTHLY</span>
                    <br />
                    <span className="ml-3"> LEADS</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TechX-Marketing: Everything
You Need To Succeed */}

      <div className="  mt-140 ">
        <div className="ml-110 ">
          <h1 className="text-5xl font-bold text-yellow-400">
            TechX-Marketing: Everything
          </h1>
          <h1 className="text-5xl font-bold mt-4 ml-17 text-yellow-400">
            You Need To Succeed
          </h1>
          <p className="mt-5 ml-26 text-lg">
            We help you consolidate all of your marketing tools.
          </p>
        </div>
        {/* over view 2nd div */}
        <div className="mt-10 overflow-hidden ml-100  ">
          <div className="flex">
            <div className="mt-5 text-3xl mr-3">🔷</div>
            <div className="w-[650px] h-[80px]  ">
              <h1 className="text-xl font-bold">Do you want more customers?</h1>
              <p className="text-justify italic">
                With the support of our community, you will know the best
                strategies the most successful digital marketers are using to
                make a ton of money online.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="mt-19 text-3xl mr-3">🔷</div>
            <div className="mt-10 w-[650px] h-[100px] ">
              <h1 className="text-xl font-bold">
                Do you want to keep your clients longer?
              </h1>
              <p className="text-justify italic">
                With our all-in-one marketing and sales platform, you will be
                able to keep your tools in one place (while saving a fortune)
                and streamline your entire delivery process so you can focus on
                keeping your clients happy
              </p>
            </div>
          </div>

          <div className="flex mb-40">
            <div className="mt-18 text-3xl mr-3">🔷</div>
            <div className="mt-10 w-[650px] h-[100px] mb-14">
              <h1 className="text-xl font-bold">
                Do you want to scale your business?
              </h1>
              <p className="text-justify italic ">
                HighLevel will help you grow your business by connecting you
                with the most successful digital marketers on the planet who
                will be able to help you close more deals or allow you to offer
                more services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* customer support */}

      <section className=" bg-gray-100 text-black h-[300px]">
        <div className="flex items-center justify-center w-[98%] bg-gray-300 p-3 rounded-2xl relative bottom-40">
          <div className="flex items-center justify-center w-[600px] p-3 ">
            <img
              src="https://images.pexels.com/photos/8867439/pexels-photo-8867439.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="image"
              className="mr-20 rounded-md shadow-gray-800 shadow-lg"
            />
          </div>
          <div>
            <div className="">
              <h1 className="text-3xl font-bold text-blue-600">
                Award-Winning Support
              </h1>
              <p className="text-xl">
                We are striving to offer the best possible support to our
                customers.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="mt-5">
                <h1 className="text-xl text-blue-600 font-bold">
                  Makes Switching Easy
                </h1>
                <p className="italic">
                  Within the platform we can one-click import from your previous
                  marketing tools.
                </p>
              </div>
              <div className="mt-5">
                <h1 className="text-xl text-blue-600 font-bold">
                  Multi-channel Support
                </h1>
                <p className="italic">
                  Reach out to our support team with our Live Chat options,
                  Email or even Phone to assist even further.
                </p>
              </div>
              <div className="mt-5 mr-50">
                <h1 className="text-xl text-blue-600 font-bold">
                  24/7 Support
                </h1>
                <p className="italic">
                  Our support team is 24/7 with world-wide support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
