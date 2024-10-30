import sass from "./home.module.scss";

export default function Sass() {
  return (
    <>
      <h1>Hello, this is SASS Page.</h1>
      <div className={sass.myDiv}>
        <h1>Home</h1>
      </div>
    </>
  );
}
