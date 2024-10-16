export default function Name(props) {
  console.log(props);

  const arr = props.params.hobby;
  const arrRender = arr.map((elem, index) => {
    return <li>{elem}</li>;
  });

  return (
    <>
      <h1>이름 : {props.params.name}</h1>
      <h1>이메일 : {props.searchParams.email}</h1>
      <h1>아이디 : {props.searchParams.id}</h1>
      <h1>취미</h1>
      <ul>{arrRender}</ul>
    </>
  );
}
