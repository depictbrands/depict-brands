import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Badges from "@/components/Badges";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero
        title="Depict Brands is a Boston-based branding, web development, and digital marketing agency."
        subtitle="We help startups and small businesses grow through intelligent, effective visual communication."
        videoEmbedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
      />

      <Section
        title="We offer website design, digital marketing solutions, and branding packages for startups to help your new businesses grow."
      >
        <div className="grid gap-6">
          <Badges
            badges={[
              { label: "MBE" },
              { label: "WBE" },
              { label: "DBE" },
              { label: "SBE" },
              { label: "SLBE" },
            ]}
          />
          <div>
            <a
              href="#contact"
              className="inline-block rounded-md bg-black text-white px-4 py-2 text-sm"
            >
              Book a discovery call
            </a>
          </div>
        </div>
      </Section>

      <Section background="dark" title="Our mission is to provide intelligent and effective visual communication." />

      <Section title="Explore our creative solutions">
        <Services
          services={[
            { title: "Branding" },
            { title: "Websites" },
            { title: "SEO" },
            { title: "Digital Marketing" },
            { title: "Art Direction" },
            { title: "Packaging" },
            { title: "Photography" },
            { title: "Signage" },
            { title: "Copywriting" },
            { title: "Community" },
            { title: "Creative Thinking" },
            { title: "Consultancy" },
            { title: "Identity" },
            { title: "Mural Design" },
            { title: "Film & Video" },
            { title: "Storefront" },
          ]}
        />
        <div className="mt-8">
          <a href="#contact" className="rounded-md bg-black text-white px-4 py-2 text-sm">
            Book a call
          </a>
        </div>
      </Section>

      <Section title="Our Process">
        <Process
          steps={[
            {
              title: "Discover",
              items: [
                "Brand discovery workshop",
                "Stakeholder interviews",
                "Market and competitor analysis",
              ],
            },
            {
              title: "Create",
              items: [
                "Visual identity and design system",
                "Website architecture and wireframes",
                "Content strategy and copy",
              ],
            },
            {
              title: "Target",
              items: [
                "SEO and analytics setup",
                "Go-to-market plan",
                "Social media and content calendar",
              ],
            },
            {
              title: "Market / Execute / Evaluate",
              items: [
                "Site launch and QA",
                "Campaign launch",
                "Performance measurement and iteration",
              ],
            },
          ]}
        />
      </Section>

      <Footer />
    </div>
  );
}
