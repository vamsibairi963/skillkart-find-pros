import { Mail } from "lucide-react";

const team = [
  {
    name: "Vamsi Bairi",
    email: "vamsibairi963@gmail.com",
  },
  {
    name: "Suryavardhan Bikkavolu",
    email: "bsvardhan999@gmail.com",
  },
  {
    name: "Veera Venkata Satya Sai Vinay Arumilli",
    email: "vinaycohort10@gmail.com",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Meet Our <span className="text-primary">Founding Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The passionate minds behind SkillKartHub
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border text-center"
            >
              {/* Avatar placeholder */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{member.name}</h3>
              
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">{member.email}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
