import { Features } from '@/components/sections/features';
import FooterSection from '@/components/sections/footer-section';
import { ForEveryone } from '@/components/sections/for-everyone';
import HeroSection from '@/components/sections/hero-section';
import HowItWorks from '@/components/sections/how-it-work';
import LandingHeader from '@/components/sections/landing-header';
import SolutionSection from '@/components/sections/solution';

export default function Home() {
  return (
    <div className="">
      <LandingHeader />
      <HeroSection />
      <ForEveryone />
      <HowItWorks />
      <Features />
      <SolutionSection />
      <FooterSection />
    </div>
  );
}