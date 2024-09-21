import { FC } from "react";

import { extraPageInfo, getExtraPageLink, getMainPageLink, mainPageInfo } from "@/models/archives";

import { SectionContainer } from "@/components/shared/Container";

import { styles } from "./ArchivesSection.css";

export const ArchivesSection: FC = () => (
    <SectionContainer id="archives" title="ARCHIVES">
        <div className={styles.root}>
            <div>
                <h3>EXTRA</h3>
                <nav>
                    <ul>
                        {extraPageInfo.map((page) => (
                            <li key={page.id}>
                                <a
                                    href={getExtraPageLink(page.id)}
                                >{`iiiExhibition Extra ${page.id} ${page.concept}`}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div>
                <h3>III Exhibition</h3>
                <nav>
                    <ul>
                        {mainPageInfo.map((page) => (
                            <li key={page.id}>
                                <a
                                    href={getMainPageLink(page.id)}
                                >{`iiiExhibition ${page.id + 1998} ${page.concept}`}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    </SectionContainer>
);
