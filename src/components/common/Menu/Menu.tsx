import { Link } from "@/components/ui/atoms/Link/Link";
import { UiList } from "@/components/ui/objects/UiList/UiList";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <div>
      <UiList>
        <Link href="/" color="white">
          Home
        </Link>
        <Link href="/pages" color="white">
          Pages
        </Link>
        <Link href="/about" color="white">
          About
        </Link>
        <Link href="/services" color="white">
          Services
        </Link>
        <Link href="/contact-us" color="white">
          Contact
        </Link>
      </UiList>
    </div>
  );
};
