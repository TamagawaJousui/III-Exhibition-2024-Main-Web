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

// SNSプロフィールのURLを定義
const SNS_URLS = {
    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/",
    facebook: "https://www.facebook.com/",
};

export const Sns: FC<Props> = ({ size, gap = "sm", className }) => (
    <div className={clsx(styles.root({ gap }), className)}>
        <a href={SNS_URLS.instagram} target="_blank" rel="noopener noreferrer">
            <InstagramLogo size={size ?? ICON_SIZE} />
        </a>
        <a href={SNS_URLS.twitter} target="_blank" rel="noopener noreferrer">
            <XLogo size={ICON_SIZE} />
        </a>
        <a href={SNS_URLS.facebook} target="_blank" rel="noopener noreferrer">
            <FacebookLogo size={ICON_SIZE} />
        </a>
    </div>
);
