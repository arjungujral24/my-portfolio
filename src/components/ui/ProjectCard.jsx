import Button from "../ui/Button"
import Link from "next/link";

export default function ProjectCard({title, description, href}) {
  return (
    <div className="
        flex gap-[40px] 
        px-[40px] 
        py-[50px] 
        bg-secondary 
        rounded-[20px]   
        transition
        duration-200
        hover:-translate-y-2
        hover:shadow-lg"
    >

      {/* Image */}
      <div className="w-[375px] h-[275px] bg-primary rounded-[10px] shrink-0" />

      {/* Content */}
      <div className="flex flex-col gap-[10px]">

        <h3 className="text-h4">
          {title}
        </h3>

        <p className="text-body3">
          {description}
        </p>
        
        <div className = "mt-auto">
            <Link href={href}>
                <Button variant="black" className="mt-[25px]">
                    View Project
                </Button>
            </Link>
        </div>

      </div>

    </div>
  )
}