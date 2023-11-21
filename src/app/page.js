import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen  justify-center px-2 sm:px-4 md:px-8 bg-no-repeat bg-center bg-cover"
         style={{ backgroundImage: "url('/page.png')" }}>
      <Link href="/products">
        <p className="text-4xl font-bold text-red-500 cursor-pointer">
          Explore Space Goods
        </p>
      </Link>
    </div>
  );
}
