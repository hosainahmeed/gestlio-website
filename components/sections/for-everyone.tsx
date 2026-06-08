import Image from 'next/image';

export const ForEveryone = () => {
  return (
    <section className="w-full py-20 px-6 flex flex-col items-center">
      <div className="text-center mx-auto">
        <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-50 text-base text-slate-800">
          For Everyone
        </span>
        <h1 className="text-4xl md:text-5xl font-medium text-slate-900 mt-6">A simple solution for hosts and cleaners</h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 max-w-[530px] mx-auto">Build faster with powerful, flexible tools designed to simplify workflows and deliver results without complexity.</p>
      </div>

      {/* Features Grid */}
      <div className="w-full max-w-5xl mx-auto mt-16 relative grid grid-cols-1 md:grid-cols-2 border-x border-slate-100 md:divide-x divide-y md:divide-y-0 divide-slate-100">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-px bg-linear-to-r from-slate-50 via-slate-200 to-slate-50"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-px bg-linear-to-r from-slate-50 via-slate-200 to-slate-50"></div>

        <div className="flex flex-col items-start bg-transparent px-6 py-8 transition-colors relative">
          <div className="absolute top-0 left-0 -z-1 pointer-events-none w-full h-full">
            <Image src={"/solution-card.svg"} alt="airbnb" width={32} height={32} className='w-full h-full object-cover' />
          </div>
          <div className="size-13 relative z-10">
            <Image src={"/airbnb.svg"} alt="airbnb" width={32} height={32} className='w-full h-full' />
          </div>

          <h1 className='text-base font-medium my-4'>For Airbnb Hosts</h1>
          <h3 className="text-base font-medium text-slate-800">Manage your rentals effortlessly</h3>
          <p className="text-sm text-slate-600 mt-2.5">
            Everything you need to run your short-term rental without the hassle.
          </p>
          {
            [
              "Find reliable cleaners near your properties",
              "Automate cleaning schedules via iCal",
              "Automatically assign cleaning tasks",
              "Track each cleaning in real time",
              "Centralize payments and invoices",
              "Avoid oversights between bookings"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 mt-2">
                <Image src={"/check-blue.png"} alt="checkbox" width={24} height={24} />
                <span className="text-sm text-slate-600">{item}</span>
              </div>
            ))
          }
        </div>

        <div className="flex flex-col items-start bg-transparent px-6 py-8 transition-colors relative">
          <div className="absolute top-0 left-0 -z-1 pointer-events-none w-full h-full">
            <Image src={"/solution-card2.svg"} alt="airbnb" width={32} height={32} className='w-full h-full object-cover' />
          </div>
          <div className="size-13 relative z-10">
            <Image src={"/cleaner.svg"} alt="airbnb" width={32} height={32} className='w-full h-full' />
          </div>
          <h3 className="text-base font-medium my-4">Cleaners</h3>
          <h3 className="text-base font-medium text-slate-800">Find your next cleaning jobs</h3>
          <p className="text-sm text-slate-600 mt-2.5">
            Connect your booking platforms and automatically import reservations
          </p>
          {
            [
              "Automatically receive cleaning jobs",
              "Manage your schedule easily from the app",
              "Get notified in real time",
              "Track your payments easily",
              "Grow your business without prospecting",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 mt-2">
                <Image src={"/check-tia.svg"} alt="checkbox" width={24} height={24} />
                <span className="text-sm text-slate-600">{item}</span>
              </div>
            ))
          }
        </div>

      </div>
    </section>
  );
};

