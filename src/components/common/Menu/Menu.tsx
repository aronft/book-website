import { Link } from "@/components/ui/atoms/Link/Link";
import { UiList } from "@/components/ui/objects/UiList/UiList";

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
        <Link href="#" color="white">
          Services
        </Link>
        <Link href="#" color="white">
          Contact
        </Link>
      </UiList>
    </div>
  );
};
