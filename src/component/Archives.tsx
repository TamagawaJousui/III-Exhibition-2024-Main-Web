import {
  extraPageInfo,
  mainPageInfo,
  getExtraPageLink,
  getMainPageLink,
} from "@/models/archives";

export default function Archives() {
  return (
    <section className="section-container" id="ARCHIVES">
      <div className="section-title">ARCHIVES</div>
      <div className="section-content grid gap-16 md:grid-flow-row md:grid-cols-[minmax(0,_500px)_minmax(0,_550px)] md:pt-16 2xl:grid-cols-[minmax(0,_768px)_minmax(0,_768px)]">
        <div className="max-w-screen-sm 2xl:max-w-none">
          <div className="second-title text-2xl md:text-3xl 2xl:text-4xl">
            EXTRA
          </div>
          <nav className="pt-4 font-gothic text-base text-primary md:text-lg 2xl:text-2xl">
            <ul className="flex flex-col gap-4 md:gap-6">
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
          <div className="second-title text-2xl md:text-3xl 2xl:text-4xl">
            III Exhibition
          </div>
          <nav className="pt-4 font-gothic text-base text-primary md:text-lg 2xl:text-2xl">
            <ul className="flex flex-col gap-4 md:gap-6">
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
    </section>
  );
}
