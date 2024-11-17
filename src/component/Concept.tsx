import { conceptData } from "@/models/concept";

export default function Concept() {
  return (
    <section className="section-container">
      <div className="section-title">CONCEPT</div>
      <div className="section-content">
        <div className="flex flex-col gap-4">
          {conceptData.ja.map((item) => (
            <div
              key={item}
              className="font-concept-ja text-lg font-semibold text-primary sm:whitespace-pre-wrap md:text-2xl lg:text-3xl"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="h-16"></div>
        <div className="flex flex-col gap-4">
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
