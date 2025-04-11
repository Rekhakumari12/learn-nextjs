import Link from "next/link";
export const metadata = {
  title: "Home",
};
export default async function Home() {
  return (
    <div>
      <h1> Welcome to Home</h1>
      <div>
        <Link href={"/about"}>About</Link>
      </div>
      <div>
        <Link href={"/services"}>Service</Link>
      </div>
      <div>
        <Link href={"/blogs"}>Blog</Link>
      </div>
    </div>
  );
}
