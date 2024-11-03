import { teamList } from "@/models/member";
import { WorkData } from "@/models/works";

import type { FC } from "react";

import { styles } from "./WorksAuthor.css";

type Props = { work: WorkData };

export const WorksAuthor: FC<Props> = ({ work }) => (
    <ul className={styles.authorContainer}>
        {work.member.map((name) => {
            const authorData = findMemberByName(name);
            return (
                <li key={`${name}-${work.place}`} className={styles.author}>
                    <h5>{authorData?.nameJa.replace(/・/g, "")}</h5>
                    <p className={styles.info}>{authorData?.affiliationJa}</p>
                    <p className={styles.info}>{`${authorData?.lab} ${authorData?.grade}`}</p>
                </li>
            );
        })}
    </ul>
);

const findMemberByName = (nameJa: string) => {
    for (const team of teamList) {
        const foundMember = team.members.find(
            // NOTE: word break用の・を削除して比較
            (member) => member.nameJa.replace(/・/g, "") === nameJa
        );
        if (foundMember) {
            return foundMember;
        }
    }
    return undefined;
};
