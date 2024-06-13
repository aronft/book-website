import { Link } from "@/components/ui/atoms/Link/Link";
import { UiList } from "@/components/ui/objects/UiList/UiList";

export const Menu = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <UiList>
        <Link href="/" color="white">
          Home
        </Link>
        <Link href="/about" color="white">
          About
        </Link>
        <Link href="/pages" color="white">
          Pages
        </Link>
        <Link href="/contact-us" color="white">
          Contact
        </Link>
      </UiList>
    </div>
  );
};
