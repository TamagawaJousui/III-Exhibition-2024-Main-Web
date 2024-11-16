import { conceptData } from "@/models/concept";

export default function Concept() {
  return (
    <section className="section-container">
      <div className="section-title">CONCEPT</div>
      <div className="flex flex-col px-6 pt-16 pb-16">
        <div className="flex flex-col gap-4">
          {conceptData.ja.map((item) => (
            <div
              key={item}
              className="text-lg text-primary font-concept-ja font-semibold md:whitespace-pre-wrap"
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
              className="text-lg text-primary font-concept-en font-light md:whitespace-pre-wrap"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
