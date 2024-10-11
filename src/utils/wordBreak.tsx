import React from "react";

export const BREAK_POINT = "・" as const;

type Props = {
    content: string;
    optional?: boolean;
};
export const BreakWord: React.FC<Props> = ({ content, optional = false }) =>
    content.split(BREAK_POINT).map((text) => (
        <React.Fragment key={text}>
            {text} {optional ? <wbr /> : <br />}
        </React.Fragment>
    ));
