import ComponentC from "./ComponentC";

export default function ComponentB({ sendData }) {
  return (
    <>
      <p>This is ComponentB Page</p>
      <p>회원 1의 나이: {sendData.age}</p>
      <ComponentC sendData={sendData} />
    </>
  );
}
