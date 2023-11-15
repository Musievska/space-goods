import Link from "next/link";
import {
  HomeIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="bg-space flex justify-between items-center px-6 py-3">
      <div className="flex relative px-6 py-3">
        <Link href="/">
          <HomeIcon className="icon-bounce" />
        </Link>
        <Link href="/products" className="link-style">
          Products
        </Link>
      </div>
      <div className="relative ml-auto flex">
        <Link href="/wishlist">
          <HeartIcon className="icon-pulse" />
        </Link>
        <Link href="/cart">
          <ShoppingCartIcon className="icon-pulse" />
        </Link>
        <Link href="/user">
          <UserIcon className="icon-pulse" />
        </Link>
        {/* <Link> */}
        <GlobeEuropeAfricaIcon className="icon-spin" />
        {/* </Link> */}
      </div>
    </header>
  );
};

export { Header };
