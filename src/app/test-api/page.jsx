"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export default function TestAPI() {
  const [users, setUsers] = useState(null);
  const [testPosts, setTestPosts] = useState(null);
  const [alienPosts, setAlienPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  // 컴포넌트 첫 렌더링 시 한번만 데이터를 가져오기 위해 useEffect 사용
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let res = await axios.get("http://localhost:3001/test");
        setUsers(res.data);

        res = await axios.get("https://api.vercel.app/blog");
        setTestPosts(res.data);

        res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setAlienPosts(res.data);
      } catch (e) {
        console.error("Error: " + e);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <h1>Loading..</h1>;
  if (!users) return <h1>No User Found</h1>;

  // // axios
  // const res = await axios.get("http://localhost:3001/test");
  // const users = res.data;

  // fetch API
  //let testData = await fetch("https://api.vercel.app/blog");
  //let testPosts = await testData.json();

  return (
    <>
      <h1>Axios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>이름: {user.name}</p>
            <p>제목: {user.title}</p>
            <p>내용: {user.body}</p>
            <hr />
          </li>
        ))}
      </ul>
      <h1>fetch API</h1>
      <ul>
        {testPosts.map((post) => (
          <li key={post.id}>
            <p>제목: {post.title}</p>
            <p>내용: {post.content}</p>
            <p>저자: {post.author}</p>
            <p>날짜: {post.date}</p>
            <p>분류: {post.category}</p>
            <hr />
          </li>
        ))}
      </ul>
      <h1>외부 API</h1>
      <ul>
        {alienPosts.map((post) => (
          <li key={post.id}>
            <p>제목: {post.userId}</p>
            <p>내용: {post.id}</p>
            <p>저자: {post.title}</p>
            <p>날짜: {post.body}</p>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
}
