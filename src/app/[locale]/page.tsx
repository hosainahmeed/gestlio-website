import { Features } from '@/components/sections/features';
import { ForEveryone } from '@/components/sections/for-everyone';
import HeroSection from '@/components/sections/hero-section';
import HowItWorks from '@/components/sections/how-it-work';
import SolutionSection from '@/components/sections/solution';

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ForEveryone />
      <HowItWorks />
      <Features />
      <SolutionSection />
    </div>
  );
}