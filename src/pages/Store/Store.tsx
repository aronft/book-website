import { HeroInfo } from "@/components/common/HeroInfo/HeroInfo";
import { StoreRoutes } from "./routes/StoreRoutes";

export const Store = () => {
  return (
    <>
      <HeroInfo title="My Store">
        There are many variations of passages of Lorem Ipsum available, have suffered alteration in
        some form.
      </HeroInfo>
      <StoreRoutes />
    </>
  );
};
