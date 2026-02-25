import Button from "../ui/Button"
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-[64px] py-[10px] bg-bg-light text-bg-dark">

      {/* Logo */}
      <Link href="/" className="text-h2 transition-opacity duration-200 hover:opacity-80">
        Arjun Gujral
      </Link>

      {/* Nav Buttons */}
      <div className="flex gap-[40px]">

        <Button 
            variant = "green" 
            href = "/#projects"
        >
            Projects
        </Button>

        <Button 
            variant = "white"
            href = "https://www.linkedin.com/in/arjungujral/"
            target = "_blank"
            rel="noopener noreferrer"
        >
            Contact
        </Button>

      </div>

    </nav>
  )
}