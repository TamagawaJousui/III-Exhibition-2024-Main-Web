import { teamList } from "@/models/member";

export default function Members() {
  return (
    <section className="section-container">
      <div className="section-title">MEMBERS</div>
      <div className="section-content flex flex-col gap-12 text-primary md:max-h-[95vh] md:flex-wrap md:gap-24 md:pb-0 md:pt-16">
        {teamList
          .filter((team) => team.name != "GUEST")
          .map((team) => (
            <div key={team.name} className="font-gothic md:max-w-screen-md">
              <div className="second-title  w-fit font-serif text-2xl font-extrabold">
                {team.name}
              </div>
              <div className="flex flex-row flex-wrap gap-6 pt-4 md:gap-10">
                {team.members.map((member) => (
                  <div className="flex w-32 flex-col gap-0 md:w-40">
                    <div key={member.nameJa} className="text-base md:text-lg">
                      {member.nameJa}
                    </div>
                    <div
                      key={member.nameEn}
                      className="text-sm text-member-name-english md:text-base"
                    >
                      {member.nameEn}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
