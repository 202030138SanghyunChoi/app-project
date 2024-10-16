export default function Name(props) {
  console.log(props);

  return (
    <>
      <h1>이름 : {props.params.name}</h1>
      <h1>이메일 : {props.searchParams.email}</h1>
      <h1>아이디 : {props.searchParams.id}</h1>
      <h1>취미 : {props.params.hobby[0]}</h1>
    </>
  );
}
