import ComponentB from "./ComponentB";

export default function ComponentC({ sendData }) {
  return (
    <>
      <p>This is ComponentC Page</p>
      <p>회원 1의 메시지 : {sendData.message}</p>
      {/* 호출 시 에러 */}
      {/* <ComponentB /> */}
    </>
  );
}
