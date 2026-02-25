import Button from "../ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex justify-between items-center py-[100px]">

      {/* Left Side - Text Block */}
      <div className="flex flex-col gap-[25px] max-w-[725px]">

        <h1 className="text-h1">
          hey there, i'm arjun!
        </h1>

        <p className="text-body1">
          im a product manager focused on bridging the gap between human needs and business goals.
        </p>

        <div className="flex gap-[40px] mt-[50px]">
            <Button variant="green" href = "#projects">Browse projects</Button>
            <Button 
                variant="green" 
                href = "https://www.linkedin.com/in/arjungujral/"
                target = "_blank"
                rel="noopener noreferrer"
            >
                Get in touch</Button>
        </div>

      </div>

        {/* Right Side - Oval Image */}
        <div className="flex-none w-[400px] h-[400px] rounded-full overflow-hidden relative">
            <Image
                src="/profile.jpeg"
                alt="Arjun Gujral"
                fill
                className="object-cover"
                priority
            />
        </div>

    </section>
  )
}