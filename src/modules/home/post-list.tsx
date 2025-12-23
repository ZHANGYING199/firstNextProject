"use client";

import Link from "next/link";
import Post from "@/components/post";
import Pagination from "@/modules/home/pagination";
import useQueryPostList from "@/hooks/use-query-post-list";
// import { error } from "@/utils/apiResponse";

const mockPosts: Post[] = [
  {
    id: "1",
    title: "Post 1",
    content: "Content 1",
    createdAt: 0,
  },
  {
    id: "2",
    title: "Post 2",
    content: "Content 2",
    createdAt: 0,
  },
];

export default function PostList() {
  const { data, isLoading, error } = useQueryPostList();
  const { posts = [], totalPages = 0 } = data || {};
  return (
    <div className="mt-8">
      {isLoading && <div>loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {!isLoading && posts.length === 0 && <div>No posts</div>}
      {!isLoading &&
        posts.length !== 0 &&
        posts.map((post: Post) => {
          return (
            <Link key={post.id} href={`/post/${post.id}`}>
              <Post post={post} />
            </Link>
          );
        })}
      <div className="mt-8">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
