import { FacebookLogo, InstagramLogo, MapPin, XLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { FC } from "react";

import { useWindow } from "@/hooks/window";
import { WorkData } from "@/models/works";
import { typography } from "@/styles/typography.css";
import { WithScroll } from "@/utils/hocs/WithScroll";
import { WithTitle } from "@/utils/hocs/WithTitle";

import { styles } from "./WorksModal.css";

type Props = {
    isOpen: boolean;
    currentWork: WorkData;
};

export const WorksModal: FC<Props> = ({ isOpen, currentWork }) => {
    const { isMobile } = useWindow();

    return (
        <dialog open={isOpen} className={styles.modal}>
            <div className={styles.wrapper}>
                <div className={styles.heading}>
                    {!isMobile && <LeftHeader work={currentWork} />}
                    <div className={styles.headingContent({ align: "center" })}>
                        <h2 className={styles.title}>{currentWork?.title}</h2>
                    </div>
                    {!isMobile && <RightHeader />}
                </div>
                {isMobile && (
                    <div className={styles.subHeading}>
                        <LeftHeader work={currentWork} />
                        <RightHeader />
                    </div>
                )}
                <div className={styles.content}>
                    <div className={styles.leftContent}>
                        <div className={styles.image}>
                            <Image
                                src={currentWork.imagePath}
                                alt="modal work image"
                                fill
                                objectFit="cover"
                            />
                        </div>
                        {!isMobile && <AuthorContent work={currentWork} />}
                    </div>
                    <WithScroll className={styles.description}>
                        <WithTitle title="コンセプト" size="xl">
                            <p>{currentWork.description.ja}</p>
                        </WithTitle>
                    </WithScroll>
                    {/* <WithTitle title="CONCEPT" size="lg">
                                <p>{currentWork.description.en}</p>
                            </WithTitle> */}
                </div>
                {isMobile && <AuthorContent work={currentWork} />}
            </div>
        </dialog>
    );
};

type WorkProps = {
    work: WorkData;
};

const LeftHeader: FC<WorkProps> = ({ work }) => (
    <div className={styles.headingContent({ align: "left" })}>
        <h5>展示場所</h5>
        <div className={styles.place}>
            <MapPin weight="fill" />
            <p className={typography({ fontSize: "sm" })}>{work?.place}</p>
        </div>
    </div>
);

const RightHeader: FC = () => (
    <div className={styles.headingContent({ align: "right" })}>
        <InstagramLogo size={36} />
        <XLogo size={36} />
        <FacebookLogo size={36} />
    </div>
);

const AuthorContent: FC<WorkProps> = ({ work }) => (
    <ul className={styles.author}>
        {work.member.map((name) => (
            <li key={`${name}-${work.place}`}>{name}</li>
        ))}
    </ul>
);
