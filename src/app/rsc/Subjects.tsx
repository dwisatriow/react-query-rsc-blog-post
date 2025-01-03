import { FC } from "react";
import { SubjectsList } from "../components/SubjectsList";

export const Subjects: FC<{}> = async () => {
  const subjectsResp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/subjects`, {
    next: {
      tags: ["subjects-query"],
    },
  });
  const { subjects } = await subjectsResp.json();

  return (
    <div>
      <SubjectsList subjects={subjects} />
    </div>
  );
};
