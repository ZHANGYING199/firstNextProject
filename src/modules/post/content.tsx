"use client"; // 添加这一行

import Post from "@/components/post";
import useQueryPost from "@/hooks/use-query-post";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter, useParams } from "next/navigation";
const mockPost = {
  id: "1",
  title: "Post 1",
  content: "content of post 1",
  createdAt: 0,
};
export default function () {
  //   Content = () => {

  const router = useRouter();
  const { id } = useParams();

  const { data, isLoading, error } = useQueryPost();

  console.log("post id:", id);

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="text-sm text-white font-bold"
      >
        {"← Back"}
      </button>
      <Post post={data} />
    </div>
  );
}
