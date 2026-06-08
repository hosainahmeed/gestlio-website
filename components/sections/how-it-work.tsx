"use client";

import { Recycle03Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useEffect, useRef, useState } from "react";

interface Step {
  id: number;
  title: string;
  description: string;
  side: "left" | "right";
}

const steps: Step[] = [
  {
    id: 1,
    title: "Create your listing",
    description:
      "Create your listing on the platform and add the necessary information about your property.",
    side: "left",
  },
  {
    id: 2,
    title: "Add a cleaner",
    description:
      "Add a cleaner to your listing according to your preferences and requirements.",
    side: "right",
  },
  {
    id: 3,
    title: "Connect your iCal",
    description:
      "Connect your Airbnb calendar (iCal) to automatically sync your bookings in real time.",
    side: "left",
  },
  {
    id: 4,
    title: "Auto-detect check-outs",
    description:
      "The app detects check-outs and automatically recommends cleanings to be performed.",
    side: "right",
  },
  {
    id: 5,
    title: "Confirm the cleaning",
    description:
      "You confirm the cleaning and validate the service with the cleaner directly in the app.",
    side: "left",
  },
  {
    id: 6,
    title: "Photo proof sent",
    description:
      "The cleaning is completed and a photo proof is sent to you for verification.",
    side: "right",
  },
  {
    id: 7,
    title: "Automatic payment",
    description:
      "Once the cleaning is validated, payment is automatically sent to the cleaner.",
    side: "left",
  },
];


function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

interface StepCardProps {
  step: Step;
  index: number;
}

const StepCard = ({ step, index }: StepCardProps) => {
  const { ref, inView } = useInView(0.15);

  return (
    <div
      ref={ref}
      className={`
        flex items-center gap-4 md:gap-6 w-full
        transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* LEFT SIDE CARD */}
      <div
        className={`
          flex-1 
          ${step.side === "left" ? "flex justify-end" : "invisible pointer-events-none"}
          hidden md:flex
        `}
      >
        {step.side === "left" && (
          <div className="flex items-start gap-2">
            <div className="bg-gray-50 rounded-2xl px-6 py-5 max-w-lg w-full shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-gray-800 text-base mb-1.5 text-right">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed text-right">
                {step.description}
              </p>
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#A5D4A9] flex items-center justify-center shadow-lg shadow-[#A5D4A9] flex-shrink-0">
              <HugeiconsIcon icon={Recycle03Icon} color='#fff' />
            </div>
          </div>
        )}
      </div>

      {/* RIGHT SIDE CARD */}
      <div
        className={`
          flex-1
          ${step.side === "right" ? "flex justify-start" : "invisible pointer-events-none"}
          hidden md:flex
        `}
      >
        {step.side === "right" && (
          <div className="flex items-start gap-2">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#A5D4A9] flex items-center justify-center shadow-lg shadow-[#A5D4A9] flex-shrink-0">
              <HugeiconsIcon icon={Recycle03Icon} color='#fff' />
            </div>
            <div className="bg-gray-50 rounded-2xl px-6 py-5 max-w-lg w-full shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-gray-800 text-base mb-1.5 text-left">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed text-left">
                {step.description}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* MOBILE: card always on the right of icon */}
      <div className="flex-1 md:hidden">
        <div className="bg-gray-50 rounded-2xl px-4 py-4 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 text-sm mb-1">
            {step.title}
          </h3>
          <p className="text-gray-500 text-xs leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function HowItWorks() {
  const { ref: headerRef, inView: headerInView } = useInView(0.2);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ease-out ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-50 text-base text-slate-800">
            The Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            How does it work?
          </h2>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Vertical line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#A5D4A9] to-transparent -translate-x-1/2 pointer-events-none" />

          {/* Mobile vertical line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#A5D4A9] to-transparent pointer-events-none" />

          <div className="flex flex-col gap-6 md:gap-8 w-full">
            {steps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}