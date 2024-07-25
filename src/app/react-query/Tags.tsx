"use client";

import { FC } from "react";
import { TagsList } from "../components/TagsList";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Tags: FC<{}> = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["tags-query"],
    queryFn: () => fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tags`).then((resp) => resp.json()),
  });

  const { tags } = data;

  return (
    <div>
      <TagsList tags={tags} />
    </div>
  );
};
