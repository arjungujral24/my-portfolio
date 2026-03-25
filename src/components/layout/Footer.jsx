import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-light">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-[64px] py-3 md:h-[48px] md:py-0 gap-2 md:gap-0">

        {/* Logo */}
        <Link href="/" className="text-[20px] font-bold hover:opacity-70 transition-opacity duration-200">
          Arjun Gujral
        </Link>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-[40px]">
          <span className="text-[16px] font-normal">arjungujral24@gmail.com</span>
          <span className="text-[16px] font-normal">650-492-1334</span>
        </div>

      </div>
    </footer>
  )
}
