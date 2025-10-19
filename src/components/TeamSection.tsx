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
        <div className="text-center mb-20 space-y-4">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
            OUR TEAM
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Meet Our <span className="text-primary">Founding Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The passionate minds behind SkillKartHub
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-card to-card/80 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-border hover:border-primary/30 text-center"
            >
              {/* Avatar placeholder */}
              <div className="w-36 h-36 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary via-primary/80 to-accent flex items-center justify-center text-4xl font-extrabold text-white shadow-2xl ring-4 ring-primary/20 group-hover:scale-110 transition-transform">
                {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
              </div>
              
              <h3 className="text-2xl font-extrabold mb-4">{member.name}</h3>
              
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors bg-secondary/50 px-4 py-2 rounded-full"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">{member.email}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
