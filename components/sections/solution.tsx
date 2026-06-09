import { MessageDelay01Icon, PromotionIcon, Time04Icon, UserGroupIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

export default function SolutionSection() {
  const featuresData = [
    {
      icon: <HugeiconsIcon icon={MessageDelay01Icon} color='white' />,
      title: "Fewer messages to manage",
      description: "Stop back-and-forth messaging. Automate confirmations and updates."
    },
    {
      icon: <HugeiconsIcon icon={Time04Icon} color='white' />,
      title: "Fewer scheduling errors",
      description: "Smart calendar sync prevents double bookings and missed cleanings."
    },
    {
      icon: <HugeiconsIcon icon={PromotionIcon} color='white' />,
      title: "Context AwarenessLess operational stress",
      description: "Let the app handle the logistics while you focus on your guests."
    },
    {
      icon: <HugeiconsIcon icon={UserGroupIcon} color='white' />,
      title: "Centralized organization",
      description: "All your properties, cleaners, tasks, and payments in one place."
    }
  ];
  return (
    <section className="py-20 px-4 bg-black flex flex-col justify-center items-center gap-6">
      <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-50 text-base text-slate-800">Our Advantages</span>
      <h2 className="text-3xl md:text-[40px]/12 font-medium text-gray-100 max-w-lg text-center leading-tight">Why use our solution?</h2>
      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {featuresData.map((feature, index) => (
          <div key={index} className='bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-lg p-6 space-y-3 hover:-translate-y-1 transition duration-300'>
            {feature.icon}
            <p className='font-medium text-lg text-gray-100'>{feature.title}</p>
            <p className='text-sm/5 text-gray-200'>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


