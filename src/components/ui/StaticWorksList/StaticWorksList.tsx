import Image from "next/image";
import { FC } from "react";

import { Place, placeColorPalette } from "@/models/place";
import { WorkData } from "@/models/works";
import { WithWordBreak } from "@/utils/hocs/WithWordBreak";
import { BreakWord } from "@/utils/wordBreak";

import { useWorksModal } from "../WorksModal";

import { styles } from "./StaticWorksList.css";

type PropType = {
    place: Place;
    works: WorkData[];
};

export const StaticWorksList: FC<PropType> = ({ place, works }) => {
    const {
        mutator: { handleOpen },
    } = useWorksModal();

    return (
        <div className={styles.root}>
            <div className={styles.heading} style={{ backgroundColor: placeColorPalette[place] }}>
                <WithWordBreak as="h3" className={styles.headingText} align="center">
                    <BreakWord content={place} />
                </WithWordBreak>
            </div>
            <div className={styles.worksGrid}>
                {works.map((work) => (
                    <div
                        key={`${work.title}-${work.place}`}
                        className={styles.workItem}
                        onClick={() => handleOpen(work)}
                    >
                        <Image
                            src={work.imagePath}
                            alt={`作品画像`}
                            width={300}
                            height={300}
                            className={styles.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
