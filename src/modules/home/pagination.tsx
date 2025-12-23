"use client"; // 添加这一行

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface PaginationProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
  const currentPage = useSearchParams().get("page") || "1";
  // const [time, setTime] = useState();
  useEffect(() => {
    // console.log("Current Page:", currentPage);
    // setTime(new Date().getTime());
  }, [currentPage]);
  return (
    <div className="flex gap-4 text-sm font-semibold">
      {Array.from({ length: totalPages }).map((_, index) => (
        <Link
          href={`?page=${index + 1}`}
          key={index}
          className={`${currentPage === `${index + 1}` ? "text-white" : "text-white/50"}`}
        >
          {index + 1}
        </Link>
      ))}
      {/* {time.toString()} */}
    </div>
  );
};

export default Pagination;
