import Button from "../ui/Button"
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({title, description, href, image, buttonLabel = "View Project"}) {
  const isClickable = buttonLabel === "View Project";
  return (
    <div className={`
        flex flex-col md:flex-row gap-[24px] md:gap-[40px]
        px-[20px] py-[30px] md:px-[40px] md:py-[50px]
        bg-secondary
        rounded-[20px]
        transition
        duration-200
        ${isClickable ? "hover:-translate-y-2 hover:shadow-lg" : ""}`}
    >

      {/* Image */}
      <div className="w-full h-[200px] md:w-[375px] md:h-[275px] bg-primary rounded-[10px] md:shrink-0 overflow-hidden relative">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[10px]">

        <h3 className="text-h4">
          {title}
        </h3>

        <p className="text-body3">
          {description}
        </p>

        <div className="mt-auto">
          {buttonLabel === "View Project" ? (
            <Link href={href}>
              <Button variant="black" className="mt-[16px] md:mt-[25px]">
                {buttonLabel}
              </Button>
            </Link>
          ) : (
            <Button variant="black" className="mt-[16px] md:mt-[25px] cursor-not-allowed pointer-events-none">
              {buttonLabel}
            </Button>
          )}
        </div>

      </div>

    </div>
  )
}
