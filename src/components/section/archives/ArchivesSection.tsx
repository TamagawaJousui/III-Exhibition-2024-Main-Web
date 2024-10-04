import { FC } from "react";

import { extraPageInfo, getExtraPageLink, getMainPageLink, mainPageInfo } from "@/models/archives";
import { WithTitle } from "@/utils/hocs/WithTitle";
import { WithWordBreak } from "@/utils/hocs/WithWordBreak";

import { SectionContainer } from "@/components/shared/Container";

import { styles } from "./ArchivesSection.css";

export const ArchivesSection: FC = () => (
    <SectionContainer id="archives" title="ARCHIVES">
        <div className={styles.root}>
            <WithTitle title="EXTRA" size="lg">
                <nav>
                    <ul>
                        {extraPageInfo.map((page) => (
                            <li key={page.id}>
                                <a href={getExtraPageLink(page.id)}>
                                    <WithWordBreak align="left">
                                        {`iiiExhibition Extra ${page.id}`}
                                        <wbr />
                                        {page.concept}
                                    </WithWordBreak>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </WithTitle>
            <WithTitle title="III Exhibition" size="lg">
                <nav>
                    <ul>
                        {mainPageInfo.map((page) => (
                            <li key={page.id}>
                                <a href={getMainPageLink(page.id)}>
                                    <WithWordBreak align="left">
                                        {`iiiExhibition ${page.id + 1998}`}
                                        <wbr />
                                        {page.concept}
                                    </WithWordBreak>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </WithTitle>
        </div>
    </SectionContainer>
);
