import clsx from "clsx";
import Image from "next/image";
import { ComponentProps, FC } from "react";

import { styles } from "./Icon.css";

type props = {
    src: string;
    align?: "left" | "right";
    padding?: string;
} & ComponentProps<"div">;

export const Icon: FC<props> = (props) => {
    const { src, align, padding, className, ...divProps } = props;
    return (
        <div className={clsx(styles.root, className)} {...divProps}>
            <Image
                src={src}
                alt="icon design"
                fill
                sizes="100%"
                className={styles.icon}
                style={{ objectPosition: `top ${align}`, padding: padding }}
            ></Image>
        </div>
    );
};
