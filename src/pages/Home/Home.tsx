import { HeroSection } from "@/pages/Home/components/HeroSection/HeroSection";
import { AboutAuthorSection } from "./components/AboutAuthorSection/AboutAuthorSection";
import SubscriptionArticle from "@/components/common/SubscriptionArticle/SubscriptionArticle";
import { ArticlesSection } from "./components/ArticlesSection/ArticlesSection";
import { TestimonialSection } from "./components/TestimonialSection/TestimonialSection";
import { EducationalGoalsSection } from "./components/EducationalGoalsSection/EducationalGoalsSection";
import { ChapterOverviewSection } from "./components/ChapterOverviewSection/ChapterOverviewSection";
import { GetBookSection } from "./components/GetBookSection/GetBookSection";
import { AuthorBooksSection } from "@/components/Books/components/AuthorBooksSection/AuthorBooksSection";
import { ConfidenceSection } from "@/components/common/ConfidenceSection/ConfidenceSection";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <AuthorBooksSection />
      <AboutAuthorSection />
      <ConfidenceSection />
      <GetBookSection />
      <EducationalGoalsSection />
      <ChapterOverviewSection />
      <TestimonialSection />
      <ArticlesSection />
      <SubscriptionArticle level="h2" />
    </>
  );
};
