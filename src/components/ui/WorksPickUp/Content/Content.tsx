import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

import { WithTitle } from "@/utils/hocs/WithTitle";

import { useWorksModal } from "../../WorksModal";

import { WorkData } from "@/components/section/works/model";

import { styles } from "./Content.css";

type Props = {
    data: WorkData;
} & React.ComponentProps<"div">;

export const Content: FC<Props> = (props) => {
    const { data, className, ...otherProps } = props;
    const {
        mutator: { handleOpen },
    } = useWorksModal();
    return (
        <>
            <div className={clsx(styles.root, className)} {...otherProps}>
                <Image
                    src={data.imagePath}
                    alt={`works image of ${data.title}`}
                    fill
                    sizes="100%"
                    className={styles.image}
                />
                <div className={styles.overlay}>
                    <WithTitle title={data.title} size="2xl">
                        <p className={styles.member}>{data.member}</p>
                        <p className={styles.place}>{data.place}</p>
                    </WithTitle>

                    <div className={styles.buttonContainer}>
                        <button className={styles.button} onClick={() => handleOpen(data)}>
                            詳細を見る
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
