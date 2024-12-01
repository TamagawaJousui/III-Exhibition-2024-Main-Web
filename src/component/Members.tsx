import { teamList } from "@/models/member";

export default function Members() {
  return (
    <section className="section-container">
      <div className="section-title">Members</div>
      <div className="section-content">
        {teamList.map((team) => (
          <div key={team.name}>
            <div className="second-title  w-fit font-serif text-2xl font-extrabold text-primary">
              {team.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
