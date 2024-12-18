import { conceptData } from "@/models/concept";

export default function Concept() {
  return (
    <section className="section-container w-screen" id="CONCEPT">
      <div className="section-title">CONCEPT</div>
      <div className="section-content flex flex-col md:short:pt-12">
        <div className="flex flex-col gap-4 md:gap-12 md:short:gap-3">
          {conceptData.ja.map((item) => (
            <div
              key={item}
              className="font-concept-ja text-lg font-semibold text-primary sm:whitespace-pre-wrap sm:text-2xl"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="h-16 md:h-24 md:short:h-12"></div>
        <div className="flex snap-start scroll-m-16 flex-col gap-4 md:snap-align-none md:scroll-m-0 md:gap-8 md:short:gap-3">
          {conceptData.en.map((item) => (
            <div
              key={item}
              className="font-concept-en text-lg font-light text-primary sm:whitespace-pre-wrap sm:text-2xl"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
