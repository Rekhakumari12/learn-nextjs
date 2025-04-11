import Link from "next/link";

export const metadata = {
  title: "Blog",
};


export default async function Blog({params}) {
    console.log(await params);
  return (
    <div>
      <h1>All Blogs</h1>
      <p><Link href="blogs/1">Blog 1</Link></p>
      <p><Link href="blogs/2">Blog 2</Link></p>
      <p><Link href="blogs/3">Blog 3</Link></p>
    </div>
  );
}
