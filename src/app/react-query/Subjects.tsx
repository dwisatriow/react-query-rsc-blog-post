"use client";

import { FC } from "react";
import { SubjectsList } from "../components/SubjectsList";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Subjects: FC<{}> = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["subejcts-query"],
    queryFn: () => fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/subjects`).then((resp) => resp.json()),
  });

  const { subjects } = data;

  return (
    <div>
      <SubjectsList subjects={subjects} />
    </div>
  );
};
