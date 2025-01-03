"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { FC } from "react";
import { BooksList } from "../components/BooksList";
import { BookEdit } from "./BookEdit";
import { useSearchParams } from "next/navigation";

export const Books: FC<{}> = () => {
  const params = useSearchParams();
  const search = params.get("search") ?? "";

  const { data } = useSuspenseQuery({
    queryKey: ["books-query", search ?? ""],
    queryFn: async () => {
      const booksResp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/books?search=${search}`);
      const { books } = await booksResp.json();

      return { books };
    },
  });

  const { books } = data;

  return (
    <div>
      <BooksList books={books} BookEdit={BookEdit} />
    </div>
  );
};
