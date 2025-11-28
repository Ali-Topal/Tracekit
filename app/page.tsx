import { CodeSnippetSection } from "@/components/sections/CodeSnippetSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeaderSection } from "@/components/sections/HeaderSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <main>
        <HeroSection />
        <SocialProofSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CodeSnippetSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <FooterSection />
    </>
  );
}
