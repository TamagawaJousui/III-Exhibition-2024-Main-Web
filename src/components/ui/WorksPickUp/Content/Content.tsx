import { MapPin } from "@phosphor-icons/react";
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
            <div className={styles.overlay}>
                <Image
                    src={data.imagePath}
                    alt={`works image of ${data.title}`}
                    className={styles.image}
                    width={100}
                    height={100}
                    layout="responsive"
                    objectFit="cover"
                />
                <div className={styles.inner}>
                    <WithTitle
                        title={data.title}
                        font={{ family: "playfairItalic", size: "2xl" }}
                        typographyClassName={styles.blackText}
                        padding="sm"
                    >
                        <p className={clsx(styles.member, styles.blackText)}>
                            {data.member.map((name, index) => (
                                <React.Fragment key={index}>
                                    <span className={styles.blackText}>{name}</span>
                                    {index < data.member.length - 1 && (
                                        <span className={styles.blackText}> / </span>
                                    )}
                                </React.Fragment>
                            ))}
                        </p>
                        <p className={clsx(styles.place, styles.blackText)}>
                            <MapPin weight="fill" />
                            {data.place}
                        </p>
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
        </div>
    );
};
