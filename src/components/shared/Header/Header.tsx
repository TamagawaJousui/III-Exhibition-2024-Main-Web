import clsx from "clsx";
import { FC } from "react";

import { sectionInfo } from "@/models";

import { styles } from "./Header.css";

type Props = React.ComponentProps<"header">;

export const Header: FC<Props> = (props) => {
    const { className, ...otherProps } = props;
    return (
        <header className={clsx(styles.root, className)} {...otherProps}>
            <nav>
                <ul className={styles.ul}>
                    {sectionInfo.map((section, index) => (
                        <li key={section.id}>
                            <a href={`#${section.id}`}>{section.title}</a>
                            <span className={styles.separator}>
                                {index < sectionInfo.length - 1 && "・"}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
