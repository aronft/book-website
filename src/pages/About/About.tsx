import { AuthorBooksSection } from "@/components/Books/components/AuthorBooksSection/AuthorBooksSection";
import { ConfidenceSection } from "@/components/common/ConfidenceSection/ConfidenceSection";
import { HeroInfo } from "@/components/common/HeroInfo/HeroInfo";
import SubscriptionArticle from "@/components/common/SubscriptionArticle/SubscriptionArticle";
import stylesColor from "@/styles/settings/colors-map.module.scss";
import { AboutAuthorSection } from "./components/AboutAuthorSection/AboutAuthorSection";

export const About = () => {
  return (
    <>
      <HeroInfo title="About the Actor">
        There are many variations of passages of Lorem Ipsum available, have suffered alteration in
        some form.
      </HeroInfo>
      <AboutAuthorSection />
      <AuthorBooksSection color={stylesColor.thertiary} />
      <ConfidenceSection paddingBot={false} />
      <SubscriptionArticle />
    </>
  );
};
