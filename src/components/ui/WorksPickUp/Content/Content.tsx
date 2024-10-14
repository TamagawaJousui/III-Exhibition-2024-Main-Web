import clsx from "clsx";
import Image from "next/image";
import React, { FC } from "react";

import { WorkData } from "@/models/works";
import { WithTitle } from "@/utils/hocs/WithTitle";

import { useWorksModal } from "../../WorksModal";

import { styles } from "./Content.css";

type Props = {
    data: WorkData;
    autoPlayHandler: { handlePlay: () => void; handleStop: () => void };
} & React.ComponentProps<"div">;

export const Content: FC<Props> = (props) => {
    const {
        data,
        autoPlayHandler: { handlePlay, handleStop },
        className,
        ...otherProps
    } = props;
    const {
        mutator: { handleOpen },
    } = useWorksModal({ onClose: handlePlay });
    return (
        <div className={clsx(styles.root, className)} {...otherProps}>
            <Image
                src={data.imagePath}
                alt={`works image of ${data.title}`}
                fill
                sizes="100%"
                className={styles.image}
            />
            <div className={styles.overlay}>
                <WithTitle title={data.title} font={{ family: "playfairItalic", size: "2xl" }}>
                    <p className={styles.member}>
                        {data.member.map((name, index) => (
                            <React.Fragment key={index}>
                                <span>{name}</span>
                                {index < data.member.length - 1 && <span> / </span>}
                            </React.Fragment>
                        ))}
                    </p>
                    <p className={styles.place}>{data.place}</p>
                </WithTitle>

                <div className={styles.buttonContainer}>
                    <button
                        className={styles.button}
                        onClick={() => {
                            handleOpen(data);
                            handleStop();
                        }}
                    >
                        詳細を見る
                    </button>
                </div>
            </div>
        </div>
    );
};
