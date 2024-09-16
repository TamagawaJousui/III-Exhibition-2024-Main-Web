import clsx from "clsx";
import { FC } from "react";

import { sectionInfo } from "@/models/section";

import { styles } from "./Header.css";

type Props = React.ComponentProps<"header">;

export const Header: FC<Props> = (props) => {
    const { className, ...otherProps } = props;
    return (
        <header className={clsx(styles.root, className)} {...otherProps}>
            <nav>
                <ul className={styles.ul}>
                    {sectionInfo.map((section) => (
                        <li key={section.id}>
                            <a href={`#${section.id}`}>{section.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
