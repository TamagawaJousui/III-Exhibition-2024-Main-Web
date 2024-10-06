import { FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";

import { vars } from "@/styles";

import type { FC } from "react";

import { styles } from "./Sns.css";

type Props = {
    size?: number;
    gap?: Extract<keyof typeof vars.spacing, "sm" | "md">;
    className?: string;
};

const ICON_SIZE = "1.5rem" as const;

/**
 * TODO: リンクをユーザ用と制作展用でpropsで切り替える
 */

export const Sns: FC<Props> = ({ size, gap = "sm", className }) => (
    <div className={clsx(styles.root({ gap }), className)}>
        <InstagramLogo size={size ?? ICON_SIZE} />
        <XLogo size={ICON_SIZE} />
        <FacebookLogo size={ICON_SIZE} />
    </div>
);
