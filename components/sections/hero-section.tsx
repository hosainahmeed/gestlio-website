import Image from 'next/image';
import { Button } from '../ui/button';

export default function HeroSection() {
  return (
    <section className='h-screen w-full relative'>
      <main className="flex flex-col max-md:gap-20 md:flex-row items-center justify-between container mx-auto h-full overflow-hidden">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-center md:text-left text-4xl leading-[46px] md:text-6xl md:leading-[68px] font-bold max-w-xl text-slate-900">
            Find Cleaners and <span className='text-[#0088FF]'>Automate</span> your Airbnb <span className='text-[#9BE3BF]'>Cleaning</span>
          </h1>
          <p className="text-center md:text-left text-sm text-slate-700 max-w-lg mt-2">
            Sync your bookings via iCal, find reliable cleaners and automate scheduling, payments and invoices in a few clicks
          </p>
          <div className="flex items-center gap-4 mt-8 text-sm">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 transition rounded-md px-7 h-11">
              Create an account
            </Button>
          </div>
        </div>
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
          }}
        />
        <div className="h-full z-99 py-12">
          <Image width={400} height={1200} src="/gestlio.svg" alt="hero" className='w-auto h-full z-99' />
        </div>
      </main>
    </section>
  );
}