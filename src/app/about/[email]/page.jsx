export default function About(props) {
  return (
    <>
      <h1>informaion</h1>
      <p>Email: {props.params.email}</p>
      <p>Phone Number: {props.params.phone}</p>
    </>
  );
}
