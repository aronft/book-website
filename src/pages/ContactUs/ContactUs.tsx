import { HeroInfo } from "@/components/common/HeroInfo/HeroInfo";
import { ContactDetailsSection } from "./components/ContactDetailsSection/ContactDetailsSection";
import { FrequentQuestions } from "./components/FrequentQuestions/FrequentQuestions";

export const ContactUs = () => {
  return (
    <>
      <HeroInfo title="Contact Us">
        There are many variations of passages of Lorem Ipsum available, have suffered alteration in
        some form.
      </HeroInfo>
      <ContactDetailsSection />
      <FrequentQuestions />
    </>
  );
};
