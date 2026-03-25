import Button from "../ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row md:justify-between md:items-center py-[60px] md:py-[100px] gap-[40px] md:gap-0">

      {/* Left Side - Text Block */}
      <div className="flex flex-col gap-[25px] md:max-w-[725px]">

        <h1 className="text-h1">
          hey there, i'm arjun!
        </h1>

        <p className="text-body1">
          im a product manager focused on bridging the gap between human needs and business goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-[16px] md:gap-[40px] mt-0 md:mt-[50px]">
          <Button variant="green" href="#projects">Browse projects</Button>
          <Button
            variant="green"
            href="https://www.linkedin.com/in/arjungujral/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in touch
          </Button>
        </div>

      </div>

      {/* Right Side - Oval Image */}
      <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden relative mx-auto md:mx-0 md:flex-none">
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
