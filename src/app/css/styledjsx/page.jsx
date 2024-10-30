"use client";

export default function StyledJSX() {
  return (
    <>
      <h1>Hello, this is Styled Page.</h1>
      <span>Span Tag</span>
      <button className="button">클릭</button>
      <style jsx global>{`
        .button {
          padding: 1em;
          border-radius: 15px;
          border: none;
          background: purple;
          color: white;
        }
        span {
          background: yellow;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
