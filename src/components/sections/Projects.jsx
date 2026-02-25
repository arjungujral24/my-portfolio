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
                    title="Protein Pal"
                    description="Have you ever wanted to learn track your macros and calories but not have to manually log in your foods everyday? Are you someone that eats similar meals everyday where it would be repetitive to look up and log the foods everyday?"
                    href="/projects/protein-pal"
                />

                <ProjectCard 
                    title="MedApp.ai"
                    description="If you’ve applied for medical school, you know how grueling it can be - especially secondaries. It can repetitive and tedious to look up the mission, values, and organizations for each school and then connect it to your own experiences. Introducing a better way."
                    href="/projects/protein-pal"
                />
                    
                <ProjectCard 
                    title="InterviewSim.ai"
                    description="Currently building the world’s most helpful companion for interview prep. Come follow my journey!"
                    href="/projects/protein-pal"
                />

                <ProjectCard 
                    title="Project Title"
                    description="Description"
                    href="/projects/protein-pal"
                />
            </div>
        </div>
    </section>
  )
}