import AllWorks from "@/component/AllWorks";
import PickUps from "@/component/PickUps";

export default function Works() {
  return (
    <section className="section-container" id="WORKS">
      <div className="section-title">WORKS</div>
      <div className="section-content flex flex-col gap-4 pt-2 md:flex-row md:pt-10">
        <PickUps />
        <AllWorks />
      </div>
    </section>
  );
}
