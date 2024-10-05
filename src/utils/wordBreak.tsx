import { FC } from "react";

export const BREAK_POINT = "・" as const;

type Props = {
    content: string;
    optional?: boolean;
};
export const BreakWord: FC<Props> = ({ content, optional = false }) =>
    content.split(BREAK_POINT).map((text) => (
        <>
            {text} {optional ? <wbr /> : <br />}
        </>
    ));
