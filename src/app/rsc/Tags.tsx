import { FC } from "react";
import { TagsList } from "../components/TagsList";

export const Tags: FC<{}> = async () => {
  const tagsResp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tags`, {
    next: {
      tags: ["tags-query"],
    },
  });
  const { tags } = await tagsResp.json();

  return (
    <div>
      <TagsList tags={tags} />
    </div>
  );
};
