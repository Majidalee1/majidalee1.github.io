import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

type BrutalistCardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  accentClasses?: string;
};

type BrutalistButtonProps<T extends React.ElementType = "button"> = {
  as?: T;
  accentClasses?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

// --- Data ---
const userProfile = {
  name: "Majid Alee",
  titles: [
    "REACT NATIVE SPECIALIST",
    "SENIOR BACKEND DEVELOPER",
    "TECHNICAL PROJECT MANAGER",
    "CLOUD & DEVOPS ENGINEER",
  ],
  bio: "With over six years of backend development and team leadership, I specialize in building robust, scalable applications. My experience ranges from leading teams at Bitspro to managing projects at ZETSOL and architecting complex integrations for health-tech company Sehat Kahani. I thrive on bridging the gap between backend infrastructure and seamless user experiences.",
};

const experienceData = [
  {
    company: "Sehat Kahani",
    role: "Technical Lead",
    duration: "JULY 2024 – SEPTEMBER 2025",
    description:
      "Led a development team as Technical Lead, architecting and implementing new features for the telemedicine platform. Fostered best practices, conducted code reviews, and managed technical integrations.",
  },
  {
    company: "ZETSOL Technologies",
    role: "Project Manager",
    duration: "FEB 2024 – PRESENT",
    description:
      "Currently managing project lifecycles, coordinating development teams, and ensuring timely delivery. Serving as the primary technical liaison for stakeholders and managing project scope with Jira.",
  },
  {
    company: "Bitspro",
    role: "Backend Team Lead",
    duration: "DECEMBER 2022 – JAN 2024",
    description:
      "Led the backend team, contributing to core architecture, developing and maintaining scalable microservices. Specialized in Node.js, React, and AWS services, focusing on performance and reliability.",
  },
  {
    company: "ZETSOL Technologies",
    role: "Project Manager",
    duration: "2019 – 2021",
    description:
      "Managed client projects, led a team of developers, and ensured alignment with project goals. Responsible for code quality, CI/CD pipelines, and mentoring junior developers.",
  },
];

const skillsData = {
  FRONTEND: ["React", "React Native", "JavaScript (ES6+)", "TypeScript"],
  BACKEND: [
    "Node.js",
    "Microservices",
    "WebSockets",
    "Pub/Sub Services",
    "API Design (REST & GraphQL)",
  ],
  "CLOUD & DEVOPS": [
    "AWS (Amazon Web Services)",
    "Azure",
    "Docker",
    "CI/CD Pipelines",
  ],
  "DATABASES & DATA": [
    "Redshift",
    "Columnar Databases",
    "PostgreSQL",
    "MongoDB",
    "Power BI",
  ],
  "TOOLS & MANAGEMENT": [
    "Jira",
    "Agile Methodologies",
    "Git & GitHub",
    "Project Management",
  ],
};

// --- Reusable Brutalist Components ---

/**
 * BrutalistCard: A reusable white card with a title bar,
 * thick border, and hard shadow.
 */
const BrutalistCard = ({
  title,
  children,
  className = "",
  accentClasses = "border-black shadow-[8px_8px_0px_0px_#000]",
}: BrutalistCardProps) => (
  <div className={`bg-white border-4 ${accentClasses} ${className}`}>
    <div className={`border-b-4 ${accentClasses.split(" ")[0]} p-4`}>
      <h3
        className={`text-2xl font-bold uppercase ${accentClasses
          .split(" ")[0]
          .replace("border-", "text-")}`}
      >
        {title}
      </h3>
    </div>
    <div className="p-6">{children}</div>
  </div>
);

/**
 * BrutalistButton: A reusable button with a thick border,
 * hard shadow, and a "press" animation on hover/active.
 */
const BrutalistButton = <T extends React.ElementType = "button">({
  children,
  as,
  className = "",
  accentClasses = "border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000]",
  ...props
}: BrutalistButtonProps<T>) => {
  const Component = as ?? "button";
  return (
    <Component
      className={`bg-white text-black border-4 px-6 py-3 font-bold uppercase inline-flex items-center justify-center gap-2
                  ${accentClasses}
                  hover:bg-black hover:text-black
                  hover:translate-x-[2px] hover:translate-y-[2px]
                  active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
                  transition-all duration-100 ease-out
                  ${className}`}
      {...(props as Record<string, unknown>)}
    >
      {children}
    </Component>
  );
};

// --- Section Components ---

const Header = () => {
  const scrollto = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-neutral-100 border-b-4 border-black p-4">
      <div className="mx-auto px-12 md:px-24 lg:px-32 xl:px-48 2xl:px-64 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-black">MAJID ALEE</h1>
        <nav className="flex flex-wrap justify-center gap-2">
          <BrutalistButton
            onClick={() => scrollto("experience")}
            className="text-sm !px-4 !py-2"
          >
            EXPERIENCE
          </BrutalistButton>
          <BrutalistButton
            onClick={() => scrollto("skills")}
            className="text-sm !px-4 !py-2"
          >
            SKILLS
          </BrutalistButton>
          <BrutalistButton
            onClick={() => scrollto("contact")}
            className="text-sm !px-4 !py-2"
          >
            CONTACT
          </BrutalistButton>
        </nav>
      </div>
    </header>
  );
};

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % userProfile.titles.length);
    }, 2000); // Faster cycle for this style
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="mx-auto px-12 md:px-24 lg:px-32 xl:px-48 2xl:px-64 py-24 md:py-32"
    >
      <div className="relative h-32 sm:h-40 md:h-52 mb-8">
        {/* Dynamic Title */}
        {userProfile.titles.map((title, index) => (
          <h2
            key={index}
            className={`absolute w-full left-0 text-5xl sm:text-7xl md:text-8xl font-black uppercase transition-all duration-300 ease-in-out ${
              index === titleIndex
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5"
            }`}
          >
            {title}
          </h2>
        ))}
      </div>

      <div className="w-full">
        <BrutalistCard title="BIO">
          <p className="text-lg md:text-xl leading-relaxed">
            {userProfile.bio}
          </p>
        </BrutalistCard>
      </div>
    </section>
  );
};

const ExperienceSection = () => (
  <section id="experience" className="bg-black text-white py-24">
    <div className="mx-auto px-12 md:px-24 lg:px-32 xl:px-48 2xl:px-64">
      <h2 className="text-5xl md:text-7xl font-black uppercase text-center mb-16 text-pink-500">
        WORK_EXPERIENCE
      </h2>
      <div className="w-full space-y-10">
        {experienceData.map((job) => (
          // We invert the card for the dark section
          <div
            key={job.company}
            className="bg-black border-4 border-pink-500 shadow-[8px_8px_0px_0px_#EC4899]"
          >
            <div className="border-b-4 border-pink-500 p-4">
              <h3 className="text-2xl font-bold uppercase text-pink-500">
                {job.company}
              </h3>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold">{job.role}</h4>
              <p className="text-sm text-neutral-400 mb-4">{job.duration}</p>
              <p className="text-lg leading-relaxed">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="mx-auto px-12 md:px-24 lg:px-32 xl:px-48 2xl:px-64">
      <h2 className="text-5xl md:text-7xl font-black uppercase text-center mb-16">
        SKILL_SET
      </h2>
      <BrutalistCard
        title="TECHNICAL_SKILLS"
        // Reverted: Removed blue accent classes to use default black
      >
        <div className="space-y-6">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <h4 className="text-xl font-bold uppercase mb-3">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-black text-white px-3 py-1 text-sm font-bold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </BrutalistCard>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="mx-auto px-12 md:px-24 lg:px-32 xl:px-48 2xl:px-64">
      <h2 className="text-5xl md:text-7xl font-black uppercase text-center mb-16">
        CONTACT_ME
      </h2>
      <BrutalistCard
        title="GET IN TOUCH"
        // Reverted: Removed emerald accent classes to use default black
      >
        <p className="text-xl md:text-2xl font-bold leading-relaxed mb-8">
          I'M CURRENTLY AVAILABLE FOR NEW OPPORTUNITIES AND COLLABORATIONS.
          LET'S TALK.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <BrutalistButton
            as="a"
            href="mailto:aleemii270@gmail.com"
            className="flex-1 text-center "
            // Reverted: Removed emerald accent classes
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            <span>EMAIL</span>
          </BrutalistButton>
          <BrutalistButton
            as="a"
            href="https://www.linkedin.com/in/majidalee"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center"
            // Reverted: Removed emerald accent classes
          >
            <Linkedin className="h-5 w-5" aria-hidden="true" />
            <span>LINKEDIN</span>
          </BrutalistButton>
          <BrutalistButton
            as="a"
            href="https://github.com/Majidalee1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center"
            // Reverted: Removed emerald accent classes
          >
            <Github className="h-5 w-5" aria-hidden="true" />
            <span>GITHUB</span>
          </BrutalistButton>
        </div>
      </BrutalistCard>
    </div>
  </section>
);

const Footer = () => (
  <footer className="text-center py-10 border-t-4 border-black">
    <p className="text-sm font-bold">
      MAJID ALEE © {new Date().getFullYear()}. ALL SYSTEMS OPERATIONAL.
    </p>
  </footer>
);

/**
 * Main App Component
 */
export default function App() {
  return (
    <>
      {/* This style block imports the Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap');

        body, html {
          font-family: 'IBM Plex Mono', monospace;
          background-color: #F5F5F5; /* neutral-100 */
          color: #000;
        }
      `}</style>

      {/* Main container with high-contrast bg */}
      <div className="bg-neutral-100 text-black min-h-screen antialiased">
        <Header />
        <main>
          <HeroSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
