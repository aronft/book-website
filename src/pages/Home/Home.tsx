import { HeroSection } from "@/pages/Home/components/HeroSection/HeroSection";
import { AboutAuthorSection } from "./components/AboutAuthorSection/AboutAuthorSection";
import { ConfidenceSection } from "./components/ConfidenceSection/ConfidenceSection";
import SubscriptionArticle from "@/components/common/SubscriptionArticle/SubscriptionArticle";
import { ArticlesSection } from "./components/ArticlesSection/ArticlesSection";
import { TestimonialSection } from "./components/TestimonialSection/TestimonialSection";
import { EducationalGoalsSection } from "./components/EducationalGoalsSection/EducationalGoalsSection";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutAuthorSection />
      <ConfidenceSection />
      <EducationalGoalsSection />
      <TestimonialSection />
      <ArticlesSection />
      <SubscriptionArticle level="h2" />
    </>
  );
};
