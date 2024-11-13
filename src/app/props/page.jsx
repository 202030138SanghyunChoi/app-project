import ComponentA from "@/components/ComponentA";

export default function Props() {
  const data = { id: 1, name: "회원1", age: 24, message: "회원 1의 메시지" };

  return (
    <>
      <p>This is Props Page</p>
      <ComponentA sendData={data} />
    </>
  );
}
