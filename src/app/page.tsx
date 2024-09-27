import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello, Next.js</h1>
      <Link href="/posts">Posts</Link>
      <br />
      <Link href="/users">Users</Link>
      <br />
    </>
  );
}
