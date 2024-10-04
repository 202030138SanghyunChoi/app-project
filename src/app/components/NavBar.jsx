import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <hr />
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/router">Router</Link>
        </li>
        <li>
          <Link href="/test-api">Test_API</Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
}
