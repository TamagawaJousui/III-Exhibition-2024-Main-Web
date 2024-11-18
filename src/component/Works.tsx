import AllWorks from "@/component/AllWorks";
import PickUps from "@/component/PickUps";

export default function Works() {
  return (
    <section className="section-container">
      <div className="section-title">WORKS</div>
      <div className="section-content pb-0 pt-2 md:pt-10">
        <PickUps />
        <AllWorks />
      </div>
    </section>
  );
}
