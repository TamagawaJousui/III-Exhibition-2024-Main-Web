import { conceptData } from "@/models/concept";

export default function Concept() {
  return (
    <section className="section-container w-screen">
      <div className="section-title">CONCEPT</div>
      <div className="section-content">
        <div className="flex flex-col gap-4 md:gap-12">
          {conceptData.ja.map((item) => (
            <div
              key={item}
              className="font-concept-ja text-lg font-semibold text-primary sm:whitespace-pre-wrap md:text-2xl lg:text-3xl"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="h-16 md:h-24"></div>
        <div className="flex snap-start scroll-m-16 flex-col gap-4 md:snap-align-none md:scroll-m-0 md:gap-8">
          {conceptData.en.map((item) => (
            <div
              key={item}
              className="font-concept-en text-lg font-light text-primary sm:whitespace-pre-wrap md:text-2xl lg:text-3xl"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
