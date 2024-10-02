export default function Name(props) {
  console.log(props);

  return (
    <>
      <h1>이름 : {props.params.name}</h1>
      <h1>취미 : {props.params.hobby}</h1>
    </>
  );
}
