import {
  extraPageInfo,
  mainPageInfo,
  getExtraPageLink,
  getMainPageLink,
} from "@/models/archives";
import Footer from "./Footer";

export default function Archives() {
  return (
    <section className="section-container flex flex-col" id="ARCHIVES">
      <div className="section-title">ARCHIVES</div>
      <div className="section-content grid gap-16 md:grid-flow-row md:grid-cols-[minmax(0,_500px)_minmax(0,_550px)] md:pt-16 2xl:grid-cols-[minmax(0,_768px)_minmax(0,_768px)] md:short:pt-12">
        <div className="max-w-screen-sm 2xl:max-w-none">
          <div className="second-title text-2xl">EXTRA</div>
          <nav className="pt-4 font-gothic text-base text-primary md:text-lg">
            <ul className="flex flex-col gap-4 md:gap-6 md:short:gap-2">
              {extraPageInfo.map((page) => (
                <li key={page.id}>
                  <a
                    href={getExtraPageLink(page.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`iiiExhibition Extra ${page.id} `}
                    {page.concept}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="max-w-screen-sm md:pt-0 2xl:max-w-none">
          <div className="second-title text-2xl">III Exhibition</div>
          <nav className="pt-4 font-gothic text-base text-primary md:text-lg">
            <ul className="flex flex-col gap-4 md:gap-6 md:short:gap-2">
              {mainPageInfo.map((page) => (
                <li key={page.id}>
                  <a
                    href={getMainPageLink(page.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`iiiExhibition ${page.id + 1998} `}
                    {page.concept}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex-1"></div>
      <Footer />
    </section>
  );
}
