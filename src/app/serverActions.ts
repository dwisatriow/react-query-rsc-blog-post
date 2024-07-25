"use server";

import { revalidateTag } from "next/cache";

export const saveBook = async (id: number, title: string) => {
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/books/update`, {
    method: "POST",
    body: JSON.stringify({
      id,
      title,
    }),
  });
  revalidateTag("books-query");
};
