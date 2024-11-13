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
        <li>
          <Link href="/image">Image</Link>
        </li>
        <li>
          <Link href="/css">CSS</Link>
        </li>
        <li>
          <Link href="props">Props</Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
}
