export default function Id(props) {
  console.log(props);
  return (
    <>
      {/* 동적 라우팅으로의 params 중 [id] 값 */}
      <h1>Hello, {props.params.id}!!</h1>
      {/* 직접 전달 / ?country=korea URL의 제일 뒤에만 가능 */}
      <h1>Your Country: {props.searchParams.country}</h1>
    </>
  );
}
