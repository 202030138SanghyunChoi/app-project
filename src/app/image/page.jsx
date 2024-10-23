import Image from "next/image";

export default function ImageRouter() {
  return (
    <>
      <h1>Hello, this is Image Page.</h1>
      <Image src="/images/img.png" width={1000} height={400} />
      <Image
        src="https://cdn.pixabay.com/photo/2024/04/18/10/03/polar-bear-8703952_1280.jpg"
        width={1000}
        height={700}
      />
    </>
  );
}
