import { useEffect, useState } from "react";

import { breakpoint } from "@/styles";

export const useWindow = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    useEffect(() => {
        setIsMobile(window.innerWidth <= breakpoint.md);
    }, []);

    return {
        isMobile,
    };
};
