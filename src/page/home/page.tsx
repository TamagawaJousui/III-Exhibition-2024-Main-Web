import { TeaserSection } from "@/components/section/Teaser/Teaser";
import { Footer } from "@/components/shared/Footer";

import { styles } from "./page.css";

export const HomePage = () => (
    <div className={styles.root}>
        <TeaserSection />
        <Footer />
    </div>
);
