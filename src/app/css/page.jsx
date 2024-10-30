import Link from "next/link";

export default function Css() {
  return (
    <>
      <ul>
        <li>
          <Link href="/css/styledjsx">StyledJSX</Link>
        </li>
        <li>
          <Link href="/css/modulecss">CSS Module</Link>
        </li>
        <li>
          <Link href="/css/sass">SASS</Link>
        </li>
      </ul>
    </>
  );
}
