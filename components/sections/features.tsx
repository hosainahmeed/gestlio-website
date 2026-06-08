import { Calendar04Icon, CreditCardIcon, FlashIcon, Invoice02Icon, RepeatIcon, Search02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

export const Features = () => {
  const features = [
    {
      icon: <HugeiconsIcon icon={Calendar04Icon} />,
      title: "Automatic iCal Sync",
      description: "We design with real users in mind, focusing on clarity, usability and accessibility from day one.",
      hasAccent: false
    },
    {
      icon: <HugeiconsIcon icon={Search02Icon} />,
      title: "Fully responsive",
      description: "Interfaces that look and feel great on desktop, tablet and mobile, no compromises.",
      hasAccent: true
    },
    {
      icon: <HugeiconsIcon icon={FlashIcon} />,
      title: "Global-ready UX",
      description: "Clean files, clear specs and developer-friendly documentation - ready to build.",
      hasAccent: false
    },
    {
      icon: <HugeiconsIcon icon={CreditCardIcon} />,
      title: "Scalable systems",
      description: "Consistent components, tokens and patterns built to grow with your product.",
      hasAccent: false
    },
    {
      icon: <HugeiconsIcon icon={Invoice02Icon} />,
      title: "Easy to iterate",
      description: "Flexible designs that adapt quickly as your product, users and goals evolve.",
      hasAccent: false
    },
    {
      icon: <HugeiconsIcon icon={RepeatIcon} />,
      title: "Performance-aware",
      description: "Optimized layouts and interactions that support fast load times and smooth experiences.",
      hasAccent: false
    }
  ]

  return (
    <>
      <div className="bg-white px-8 lg:px-20 xl:px-[120px] py-20 flex flex-col items-center">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ease-out `}
        >
          <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-50 text-base text-slate-800">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl max-w-3xl font-bold text-gray-900 tracking-tight">
            Everything is automated, from scheduling to payment
          </h2>
        </div>

        {/* Features Grid with Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl w-full border-t border-l border-zinc-200 relative">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative p-6 md:p-8 flex flex-col gap-4 border-r border-b border-zinc-200 transition-all duration-300 cursor-pointer ${index === 0
                ? 'bg-linear-to-b from-white to-[#EEF0FF]'
                : 'bg-white hover:bg-linear-to-b hover:from-white hover:to-[#EEF0FF]'
                }`}
            >
              {feature.hasAccent && (
                <div className="absolute left-0 top-12 bottom-12 md:top-17 md:bottom-17 w-1.5 bg-indigo-500 rounded-r" />
              )}

              <div className="flex items-center gap-2.5 mb-1">
                <div>
                  {feature.icon}
                </div>
                <h3 className="text-sm font-medium text-zinc-800 leading-snug">
                  {feature.title}
                </h3>
              </div>

              <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}