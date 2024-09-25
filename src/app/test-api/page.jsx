export default async function Pag() {
  let data = await fetch("https://api.vercel.app/blog");
  let posts = await data.json();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <p>제목: {post.title}</p>
          <p>내용: {post.content}</p>
          <p>저자: {post.author}</p>
          <p>날짜: {post.date}</p>
          <p>분류: {post.category}</p>
          <p>
            -----------------------------------------------------------------------------------------------------------------------------------------------------------
          </p>
        </li>
      ))}
    </ul>
  );
}
