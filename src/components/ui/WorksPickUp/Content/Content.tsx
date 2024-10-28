import { MapPin } from "@phosphor-icons/react";
import clsx from "clsx";
import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";

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

    const rootRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const [imageHeight, setImageHeight] = useState<number>(0);

    useEffect(() => {
        const calculateHeight = () => {
            if (rootRef.current && innerRef.current) {
                const rootHeight = rootRef.current.clientHeight;
                const innerHeight = innerRef.current.clientHeight;
                setImageHeight(rootHeight - innerHeight);
            }
        };

        calculateHeight();
        window.addEventListener("resize", calculateHeight);
        return () => window.removeEventListener("resize", calculateHeight);
    }, [data]);

    return (
        <div ref={rootRef} className={clsx(styles.root, className)} {...otherProps}>
            <div className={styles.overlay}>
                <Image
                    src={data.imagePath}
                    alt={`works image of ${data.title}`}
                    width={100}
                    height={imageHeight || 100}
                    className={styles.image}
                />
                <div ref={innerRef} className={styles.inner}>
                    <WithTitle
                        title={data.title}
                        font={{ family: "playfairItalic", size: "2xl" }}
                        useBlackTitle={true}
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
