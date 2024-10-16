import { registerLink } from "@/models/register";

import RegisterButtonSvg from "./svg/RegisterButton.svg";

import type { FC } from "react";

import { styles } from "./RegisterButton.css";

export const RegisterButton: FC = () => (
    <a href={registerLink} target="_blank" className={styles.root}>
        <RegisterButtonSvg className={styles.registerButton} />
    </a>
);
