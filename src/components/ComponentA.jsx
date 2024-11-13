import ComponentB from "./ComponentB";

export default function ComponentA({ sendData }) {
  return (
    <>
      <p>This is ComponentA Page</p>
      <p>회원 1의 이름: {sendData.name}</p>
      <ComponentB sendData={sendData} />
    </>
  );
}
