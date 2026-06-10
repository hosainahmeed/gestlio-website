import { Instagram, Linkedin, Twitter } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Image from "next/image";
import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

const productLinks: FooterLink[] = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Integrations", href: "/integrations" },
  { label: "Mobile App", href: "/mobile-app" },
];

const legalLinks: FooterLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Legal Notice", href: "/legal" },
];

const contact: FooterLink[] = [
  { label: "+1 (555) 123-4567", href: "" },
  { label: "hello@gestlio.com", href: "/contact" },
  { label: "123 Clean Street, NY 10001", href: "/faqs" },
];

const bottomLinks: FooterLink[] = [
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

export default function FooterSection() {
  return (
    <footer className="w-full bg-white border-t text-gray-700">
      <div className="px-6 sm:px-8 lg:px-12 py-14">

        {/* TOP GRID */}
        <div className="mx-auto container  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-16 pb-10 border-b">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <Image
              src="/brand-logo.svg"
              alt="Gestlio"
              width={140}
              height={40}
              priority
            />

            <p className="mt-5 text-sm leading-6 text-gray-600 max-w-md">
              Professional cleaning management for hotels and apartments.
              Schedule, track, and manage cleaning services effortlessly with a modern workflow.
            </p>

            {/* App Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <Image
                src="/googlePlayBtnBlack.svg"
                alt="Google Play"
                width={140}
                height={42}
                className="rounded-md border hover:opacity-80 transition"
              />
              <Image
                src="/appleStoreBtnBlack.svg"
                alt="App Store"
                width={140}
                height={42}
                className="rounded-md border hover:opacity-80 transition"
              />
            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              {productLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-black transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-black transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              {contact.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-black transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 mt-4 bg-gray-200 p-1 rounded-md justify-evenly">
              <div className="w-full h-full bg-white p-2 rounded-md flex items-center justify-center">
                <HugeiconsIcon size={16} icon={Twitter} />
              </div>
              <div className="w-full h-full bg-white p-2 rounded-md flex items-center justify-center">
                <HugeiconsIcon size={16} icon={Instagram} />
              </div>
              <div className="w-full h-full bg-white p-2 rounded-md flex items-center justify-center">
                <HugeiconsIcon size={16} icon={Linkedin} />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mx-auto container  flex flex-col md:flex-row items-center justify-between gap-4 pt-6">

          <p className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Gestlio. All rights reserved.
          </p>

          <ul className="flex flex-wrap justify-center md:justify-end gap-5 text-xs sm:text-sm text-gray-600">
            {bottomLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-black transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}