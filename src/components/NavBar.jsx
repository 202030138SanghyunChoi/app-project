import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <hr />
      <ul>
        <li>
          <Link href="/app-project">HOME</Link> |
          <Link href="/">Local HOME</Link>
        </li>
        <li>
          <Link href="/app-project/router">Router</Link> |
          <Link href="/router">Local Router</Link>
        </li>
        <li>
          <Link href="/app-project/test-api">Test_API</Link> |
          <Link href="/test-api">Local Test_API</Link>
        </li>
        <li>
          <Link href="/app-project/image">Image</Link> |
          <Link href="/image">Local Image</Link>
        </li>
        <li>
          <Link href="/app-project/css">CSS</Link> |
          <Link href="/css">Local CSS</Link>
        </li>
        <li>
          <Link href="/app-project/props">Props</Link> |
          <Link href="/props">Local Props</Link>
        </li>
        <li>
          <Link href="/app-project/redux">Redux</Link> |
          <Link href="/redux">Local Redux</Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
}
