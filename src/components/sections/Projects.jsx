import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className = "py-[100px]">
        <div className = "flex flex-col gap-[50px]">
            <h2 className = "text-h3">
                Projects
            </h2>

            <div className = "flex flex-col gap-[50px]">
                <ProjectCard
                    title="Wayfarer Design Challenge"
                    description="Wayfarer is a conceptual travel discovery platform that analyzes users’ preferences and past travel experiences to surface destinations and unique adventures around the world using AI-driven insights. This project focused on designing a landing page that translates Wayfarer’s brand and vision into a compelling digital experience."
                    href="/projects/wayfarer"
                    image="/wayfarer_preview.png"
                />

                <ProjectCard
                    title="Protein Pal"
                    description="Have you ever wanted to track your macros and calories but were discouraged by the effort needed to manually log in your food everyday? Are you someone that eats similar meals on a daily basis? If so, you might just like what Protein Pal has to offer."
                    href="/projects/protein-pal"
                    image="/coming_soon.jpg"
                    buttonLabel="Coming soon!"
                />

                <ProjectCard
                    title="MedApp.ai"
                    description="If you’ve applied for medical school, you know how grueling it can be - especially secondaries. It can get tedious and repetitive to look up the mission, values, and organizations for each school and then connect it to your own experiences. Introducing a better way."
                    href="/projects/protein-pal"
                    image="/coming_soon.jpg"
                    buttonLabel="Coming soon!"
                />
            </div>
        </div>
    </section>
  )
}