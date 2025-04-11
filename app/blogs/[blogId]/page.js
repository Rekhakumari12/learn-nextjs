import React from "react";

export default async function Blog({ params }) {
  const { blogId } = await params;
  console.log(await params);
  return <div>blog {blogId}</div>;
}
