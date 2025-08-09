export default function Pricing() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 mt-10">
      <section>
        <h1 className="text-black text-2xl font-bold uppercase">Pricing</h1>
      </section>

      {/*  */}

      <section className="flex items-center justify-center gap-10">
        {/* left */}
        <div className="bg-blue-100 w-[400px]  flex flex-col items-center  mt-10 p-5 rounded-lg">
          <h1 className="text-2xl font-bold text-blue-600 mt-8">Starter</h1>
          <h1 className="text-2xl font-bold text-blue-600">$97</h1>
          <h1 className="bg-blue-200 p-2 rounded-lg text-black mt-4">
            USD Per Month
          </h1>
          <ul className="mt-7 flex flex-col gap-3 text-blue-950  ml-5">
            <div className="flex">
              <span className="mr-2 text-blue-500">
                <i class="fa-solid fa-square-check"></i>
              </span>
              <li>All the tools to capture more leads</li>
            </div>
            <div className="flex">
              <span className="mr-2 text-blue-500">
                <i class="fa-solid fa-square-check"></i>
              </span>
              <li>Nurture & close leads into customers</li>
            </div>
            <div className="flex">
              <span className="mr-2 text-blue-500">
                <i class="fa-solid fa-square-check"></i>
              </span>
              <li>
                Full online booking, pipelines, social cal, website builder, and
                more!
              </li>
            </div>
            <div className="flex">
              <span className="mr-2 text-blue-500">
                <i class="fa-solid fa-square-check"></i>
              </span>
              <li>
                Unlimited contacts & users, add as many contacts & users as you
                need!
              </li>
            </div>
            <div className="flex">
              <span className="mr-2 text-blue-500">
                <i class="fa-solid fa-square-check"></i>
              </span>
              <li>Setup up to three sub-accounts</li>
            </div>
          </ul>
          <button className="bg-blue-500 mt-10 p-2 rounded-lg shadow-blue-800 shadow-md  ">
            <span className="text-lg font-bold uppercase">
              14 days free trial
            </span>
            <span className="block text-md italic">
              No obligations, no contracts, cancel at any time
            </span>
          </button>
        </div>
        {/* right */}
        <div className="bg-blue-950 w-[400px]  mt-10 flex flex-col items-center p-5 rounded-lg">
          <h1 className="text-2xl font-bold text-yellow-500 mt-8">Unlimited</h1>
          <h1 className="text-2xl font-bold text-yellow-500">$297</h1>
          <h1 className="bg-yellow-500 p-2 rounded-lg text-black mt-4">
            USD Per Month
          </h1>
          <ul className="mt-7 flex flex-col gap-3  ml-5 text-justify">
            <div className="flex">
              <span className="text-yellow-400 mr-2">
                <i class="fa-solid fa-plus"></i>
              </span>
              <li>Everything in the starter plan</li>
            </div>
            <div className="flex">
              <span className="text-yellow-400 mr-2">
                <i class="fa-solid fa-plus"></i>
              </span>
              <li>Api access - integrate with anything</li>
            </div>
            <div className="flex">
              <span className="text-yellow-400 mr-2">
                <i class="fa-solid fa-plus"></i>
              </span>
              <li>
                Unlimited sub-accounts - as many client accounts as you need for
                one price!
              </li>
            </div>
            <div className="flex">
              <span className="text-yellow-400 mr-2">
                <i class="fa-solid fa-plus"></i>
              </span>
              <li>
                Branded desktop app - custom domains and complete control over
                the look and feel of the platform!
              </li>
            </div>
          </ul>
          <button className="bg-amber-400 mt-10 p-2 rounded-lg shadow-yellow-800 shadow-md ">
            <span className="text-lg font-bold uppercase">
              14 days free trial
            </span>
            <span className="block text-md italic">
              No obligations, no contracts, cancel at any time
            </span>
          </button>
        </div>
      </section>
    </main>
  );
}
