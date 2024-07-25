import { FC } from "react";
import { BooksList } from "../components/BooksList";
import { BookEdit } from "./BookEdit";

export const Books: FC<{ search: string }> = async ({ search }) => {
  const booksResp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/books?search=${search}`, {
    next: {
      tags: ["books-query"],
    },
  });
  const { books } = await booksResp.json();

  return (
    <div>
      <BooksList books={books} BookEdit={BookEdit} />
    </div>
  );
};
