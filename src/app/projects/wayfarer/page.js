"use client";
import { useRef, useEffect } from "react";

function AutoplayVideo({ src, className, style }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      className={className}
      style={style}
    />
  );
}

export default function WayfarerPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.body.classList.add("dark-chrome");
    return () => document.body.classList.remove("dark-chrome");
  }, []);
  return (
    <main className="bg-[#2A2A2A] -mx-4 px-4 md:-mx-[64px] md:px-[64px] text-[#f2eee8]">

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="pt-[60px] pb-[80px] md:pt-[100px] md:pb-[150px]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-[32px] md:gap-0 mb-[48px] md:mb-[96px]">

          {/* Left: title + subtitle + button */}
          <div className="flex flex-col gap-[32px] md:gap-[56px] items-start">
            <div className="flex flex-col gap-[12px]">
              <h1 className="text-[36px] md:text-[67px] font-medium leading-normal">Wayfarer Design</h1>
              <p className="text-[16px] md:text-[20px] font-medium text-[rgba(242,238,232,0.7)] w-full">
                Designing how travelers discover what&apos;s next through personalized, intuitive exploration.
              </p>
            </div>
            <a
              href="https://www.figma.com/proto/daK7aINPvwHfQhwuGX9IKS/Wayfarer-Design-Challenge?node-id=18054-1958&p=f&t=GekH51WCEW6hVyZT-1&scaling=scale-down&content-scaling=fixed&page-id=15700%3A6901"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[10px] bg-[#0B5D63] text-[#f2eee8] px-[16px] py-[10px] rounded-[8px] text-[16px] md:text-[20px] font-medium hover:opacity-90 transition duration-75 active:scale-95"
            >
              Interactive Prototype <span aria-hidden className="text-[20px] md:text-[24px] font-medium">›</span>
            </a>
          </div>

          {/* Right: project metadata */}
          <div className="flex flex-col gap-[12px] text-[16px] md:text-[20px] font-light text-[rgba(242,238,232,0.7)] md:self-stretch md:justify-end">
            <p>Role - Product Designer</p>
            <p>Timeline - 4 Weeks</p>
            <p>Platform - Mobile, Desktop</p>
            <p>Deliverable - High Fidelity UI &amp; Prototype</p>
          </div>
        </div>

        {/* Hero mockup image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/wayfarer/hero-image.png"
          alt="Wayfarer app on MacBook and iPhone"
          className="w-full rounded-[20px]"
        />
      </section>

      {/* ── 01 OVERVIEW ─────────────────────────────────────────────── */}
      <section className="pt-[40px] pb-[60px] md:pt-[50px] md:pb-[100px] border-t border-t-[0.5px] border-[rgba(242,238,232,0.2)]">
        <div className="flex flex-col gap-[4px] mb-[24px]">
          <p className="text-[36px] md:text-[60px] font-normal leading-normal">01</p>
          <h2 className="text-[24px] md:text-[40px] font-medium">Overview</h2>
        </div>
        <p className="text-[16px] md:text-[20px] font-light leading-[25px] w-full">
          Planning travel often starts with a simple but difficult question: &ldquo;Where should I go?&rdquo;
          <br /><br />
          Most travel platforms assume users already have a destination in mind and focus on booking logistics such as
          flights and hotels. However, many travelers, especially younger travelers, are still in the inspiration
          phase of planning. They want to browse, explore, and discover destinations that align with how they want
          to experience the world.
          <br /><br />
          Wayfarer is a conceptual travel discovery platform designed to address this gap. The platform analyzes
          users&apos; preferences and past travel experiences to surface destinations, hidden gems, and unique
          adventures around the world using AI-driven insights. Young travelers can ultimately find their next
          destination through personalized exploration.
        </p>
      </section>

      {/* ── 02 THE CHALLENGE ────────────────────────────────────────── */}
      <section className="pt-[40px] pb-[60px] md:pt-[50px] md:pb-[100px] border-t border-t-[0.5px] border-[rgba(242,238,232,0.2)]">
        <div className="flex flex-col gap-[4px] mb-[24px]">
          <p className="text-[36px] md:text-[60px] font-normal leading-normal">02</p>
          <h2 className="text-[24px] md:text-[40px] font-medium">The Challenge</h2>
        </div>
        <p className="text-[16px] md:text-[20px] font-light leading-normal w-full">
          Design a landing page that translates Wayfarer&apos;s brand and vision into a compelling digital
          experience. Communicate the mission, spark wanderlust, and invite users to explore destinations
          tailored to their interests.
        </p>
      </section>

      {/* ── 03 DESIGN SYSTEM ────────────────────────────────────────── */}
      <section className="pt-[60px] pb-[60px] md:pt-[100px] md:pb-[100px] border-t border-t-[0.5px] border-[rgba(242,238,232,0.2)]">
        <div className="flex flex-col gap-[4px] mb-[48px] md:mb-[128px]">
          <p className="text-[36px] md:text-[60px] font-normal leading-normal">03</p>
          <h2 className="text-[24px] md:text-[40px] font-medium">Design System</h2>
        </div>

        {/* Color palette */}
        <div className="mb-[48px] md:mb-[128px]">
          <div className="grid grid-cols-2 gap-4 md:flex md:gap-[61px] mb-[28px]">
            {[
              { name: "Primary Teal",  hex: "#0B5D63", bg: "#0B5D63", text: "#f2eee8", hexOpacity: "rgba(242,238,232,0.8)", border: null },
              { name: "Accent Orange", hex: "#EF5D14", bg: "#EF5D14", text: "#f2eee8", hexOpacity: "rgba(242,238,232,0.8)", border: null },
              { name: "Neutral White", hex: "#F2EEE8", bg: "#F2EEE8", text: "#2A2A2A", hexOpacity: "rgba(42,42,42,0.8)",     border: null },
              { name: "Neutral Black", hex: "#2A2A2A", bg: "#2A2A2A", text: "#f2eee8", hexOpacity: "rgba(242,238,232,0.8)", border: "0.5px solid rgba(242,238,232,0.5)" },
            ].map(({ name, hex, bg, text, hexOpacity, border }) => (
              <div
                key={hex}
                className="rounded-[12px] flex flex-col items-center px-[18px] py-[10px] gap-[4px] md:shrink-0 md:w-[180px]"
                style={{ backgroundColor: bg, border: border || undefined }}
              >
                <span className="text-[16px] md:text-[20px] font-medium whitespace-nowrap" style={{ color: text }}>{name}</span>
                <span className="text-[12px] md:text-[13px] font-normal whitespace-nowrap" style={{ color: hexOpacity }}>{hex}</span>
              </div>
            ))}
          </div>
          <p className="text-[16px] md:text-[20px] font-light leading-normal w-full">
            I assembled a color palette that captures the attention of youthful, adventurous travelers.
            Teal evokes discovery, travel, and openness to new experiences. Orange adds energy, contrast,
            and draws attention to key moments.
          </p>
        </div>

        {/* Typography */}
        <div className="flex flex-col md:flex-row md:justify-between mb-[48px] md:mb-[128px] gap-[24px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/wayfarer/typography-chart.png"
            alt="Typography scale"
            className="w-full md:w-[556px] rounded-[17px]"
          />
          <div className="flex md:items-center md:w-[414px]">
            <p className="text-[16px] md:text-[20px] font-light leading-normal">
              I chose Space Grotesk for its modern, approachable feel and built a clear type scale to
              establish strong visual hierarchy and cohesive readability.
            </p>
          </div>
        </div>

        {/* Component system */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-[24px]">
          <div className="md:w-[414px]">
            <p className="text-[16px] md:text-[20px] font-light leading-normal">
              I structured the design around reusable components to maintain visual consistency,
              streamline iteration, and support scalability.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/wayfarer/design-system-components.png"
            alt="Component system overview"
            className="w-full md:w-[556px] rounded-[16px]"
          />
        </div>
      </section>

      {/* ── 04 DESIGN PROCESS ───────────────────────────────────────── */}
      <section className="pt-[60px] pb-[60px] md:pt-[100px] md:pb-[100px] border-t border-t-[0.5px] border-[rgba(242,238,232,0.2)]">
        <div className="flex flex-col gap-[4px] mb-[48px] md:mb-[128px]">
          <p className="text-[36px] md:text-[60px] font-normal leading-normal">04</p>
          <h2 className="text-[24px] md:text-[40px] font-medium">Design Process</h2>
        </div>

        {/* Hero Iteration */}
        <p className="text-[24px] md:text-[32px] font-light underline text-center w-full mb-[36px]">Hero Iteration</p>

        {/* Row 1: Wireframe → Low Fidelity */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-[27px] gap-[20px] md:gap-0">
          <div className="w-full md:w-[520px]">
            <p className="text-[18px] md:text-[20px] font-light text-center mb-[10px]">Wireframe</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/wayfarer/process-hero-wireframe.png" alt="Hero wireframe" className="w-full" />
            <p className="text-[16px] md:text-[20px] font-light leading-[normal] mt-[10px]">
              Explored a couple different hero layouts including a vertical navigation bar and a travel search engine style design.
            </p>
          </div>
          <svg className="hidden md:block" width="138" height="22" viewBox="0 0 138 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="11" x2="127" y2="11" stroke="#f2eee8" strokeWidth="2"/>
            <polyline points="120,4 138,11 120,18" stroke="#f2eee8" strokeWidth="2" fill="none" strokeLinejoin="round"/>
          </svg>
          <div className="w-full md:w-[520px]">
            <p className="text-[18px] md:text-[20px] font-light text-center mb-[10px]">Low Fidelity</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/wayfarer/process-hero-lofi.png" alt="Hero low fidelity" className="w-full" />
            <p className="text-[16px] md:text-[20px] font-light leading-[normal] mt-[10px]">
              Focused on establishing clear visual hierarchy and spacing. I initially chose the search bar as the primary call to action to encourage immediate exploration.
            </p>
          </div>
        </div>

        {/* Down arrow between rows 1→2 */}
        <div className="hidden md:flex justify-end items-center pr-[260px] mb-[27px]">
          <svg width="22" height="300" viewBox="0 0 22 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="11" y1="0" x2="11" y2="289" stroke="#f2eee8" strokeWidth="2"/>
            <polyline points="4,282 11,300 18,282" stroke="#f2eee8" strokeWidth="2" fill="none" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Row 2: High Fidelity V1 ← Mid Fidelity */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-[27px] gap-[20px] md:gap-0">
          <div className="w-full md:w-[520px]">
            <p className="text-[18px] md:text-[20px] font-light text-center mb-[10px]">High Fidelity V1</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/wayfarer/process-hero-hifi-v1.png" alt="Hero high fidelity v1" className="w-full" />
            <p className="text-[16px] md:text-[20px] font-light leading-[normal] mt-[10px]">
              Refined the hero with stronger messaging and applied typography, color, and contrast to create a more impactful visual.
            </p>
          </div>
          <svg className="hidden md:block" width="138" height="22" viewBox="0 0 138 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="138" y1="11" x2="11" y2="11" stroke="#f2eee8" strokeWidth="2"/>
            <polyline points="18,4 0,11 18,18" stroke="#f2eee8" strokeWidth="2" fill="none" strokeLinejoin="round"/>
          </svg>
          <div className="w-full md:w-[520px]">
            <p className="text-[18px] md:text-[20px] font-light text-center mb-[10px]">Mid Fidelity</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/wayfarer/process-hero-midfi.png" alt="Hero mid fidelity" className="w-full" />
            <p className="text-[16px] md:text-[20px] font-light leading-[normal] mt-[10px]">
              Experimented with AI-generated imagery by prompting with the brand&apos;s values and tone to find a visual direction for the hero.
            </p>
          </div>
        </div>

        {/* Down arrow between rows 2→3 */}
        <div className="hidden md:flex justify-start items-center pl-[260px] mb-[27px]">
          <svg width="22" height="300" viewBox="0 0 22 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="11" y1="0" x2="11" y2="289" stroke="#f2eee8" strokeWidth="2"/>
            <polyline points="4,282 11,300 18,282" stroke="#f2eee8" strokeWidth="2" fill="none" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Row 3: High Fidelity V2 */}
        <div className="w-full md:w-[520px] mb-[60px] md:mb-[196px]">
          <p className="text-[18px] md:text-[20px] font-light text-center mb-[10px]">High Fidelity V2</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/wayfarer/process-hero-hifi-v2.png" alt="Hero high fidelity v2" className="w-full" />
          <p className="text-[16px] md:text-[20px] font-light leading-[normal] mt-[10px]">
            Pivoted to a minimal, image-driven hero. Removed navigation links and reduced visual complexity to create a more focused entry point. Also emphasized bold, high-contrast CTA buttons to drive engagement.
          </p>
        </div>

        {/* User Quiz Iteration */}
        <p className="text-[24px] md:text-[32px] font-light underline text-center w-full mb-[36px]">User Quiz Iteration</p>

        {/* Row: Wireframe → Mid-Fi forms */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-[24px] mb-[40px] md:mb-[60px] gap-[16px]">
          <div className="w-full md:w-[346px]">
            <p className="text-[18px] md:text-[20px] font-light text-center mb-[10px]">Wireframe</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/wayfarer/process-quiz-wireframe.png" alt="Quiz wireframe" className="w-full" />
          </div>
          {/* Arrow + label (desktop only) */}
          <div className="hidden md:flex flex-col flex-1 self-stretch min-w-0" style={{ paddingTop: "144px" }}>
            <div className="flex items-center w-full">
              <div className="flex-1" style={{ height: "2px", background: "#f2eee8" }} />
              <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="0,1 12,8 0,15" stroke="#f2eee8" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="mt-[13px] text-[18px] font-light leading-[normal]">
              Structured the form into steps with clear grouping, consistent input patterns, and progressive disclosure.
            </p>
          </div>
          <div className="w-full md:w-[577px]">
            <p className="text-[18px] md:text-[20px] font-light text-center mb-[10px]">Mid Fidelity</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/wayfarer/process-quiz-midfi.png" alt="Quiz mid fidelity" className="w-full" />
          </div>
        </div>

        {/* Arrow label (mobile only — shown between wireframe/midfi and feedback) */}
        <p className="md:hidden text-[16px] font-light leading-[normal] mb-[40px]">
          Structured the form into steps with clear grouping, consistent input patterns, and progressive disclosure.
        </p>

        {/* Diagonal arrow + user feedback (desktop) / feedback only (mobile) */}
        <div className="hidden md:flex items-center justify-end gap-[24px] pl-[270px] mb-[60px]">
          <svg width="250" height="464" viewBox="0 0 250 464" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <line x1="238" y1="10" x2="11" y2="453" stroke="#f2eee8" strokeWidth="2" strokeLinecap="round"/>
            <polyline points="17,456 7,460 5,450" stroke="#f2eee8" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round"/>
          </svg>
          <p className="text-[20px] font-light leading-[normal]" style={{ width: "373px", position: "relative", left: "-16px" }}>
            User feedback revealed friction and cognitive overload. The form felt too tedious and input-heavy.
          </p>
        </div>
        <p className="md:hidden text-[16px] font-light leading-[normal] mb-[40px]">
          User feedback revealed friction and cognitive overload. The form felt too tedious and input-heavy.
        </p>

        {/* Hi-Fi quiz redesign */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/wayfarer/process-quiz-hifi.png" alt="Quiz high fidelity redesign" className="w-full rounded-[12px] mb-[10px]" />
          <p className="text-[16px] md:text-[20px] font-light leading-[normal] w-full">
            Reframed the experience from a data collection form to a guided, quiz-based discovery. Replaced text
            inputs with tap-based selections and split the flow into step-by-step screens. Also optimized for
            mobile by spacing elements for readability, increasing touch target size, and limiting each screen
            to a single focus.
          </p>
        </div>
      </section>

      {/* ── 05 FINAL DESIGN ─────────────────────────────────────────── */}
      <section className="pt-[40px] pb-[80px] md:pt-[50px] md:pb-[200px] border-t border-t-[0.5px] border-[rgba(242,238,232,0.2)] flex flex-col gap-[48px] md:gap-[128px]">
        <div className="flex flex-col gap-[4px]">
          <p className="text-[36px] md:text-[60px] font-normal leading-normal">05</p>
          <h2 className="text-[24px] md:text-[40px] font-medium">Final Design</h2>
        </div>

        <div className="flex flex-col gap-[60px] md:gap-[196px]">
          {/* Block 1: hero mockup */}
          <div className="flex flex-col gap-[24px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wayfarer/final-hero-mockup.png"
              alt="Final Wayfarer design on MacBook and iPhone"
              className="w-full md:w-[907px] mx-auto block"
            />
            <p className="text-[16px] md:text-[20px] font-light leading-normal">
              The final design delivers a responsive travel experience that guides users from initial
              discovery to personalized destination matches.
            </p>
          </div>

          {/* Block 2: trending destinations */}
          <div className="flex flex-col gap-[24px]">
            <div className="flex items-center justify-center">
              <div
                className="bg-[#f2eee8] flex items-center justify-center overflow-hidden rounded-[13.5px] w-full md:w-[965.7px]"
                style={{ aspectRatio: "965.7/600", padding: "3.44% 4.48%" }}
              >
                <AutoplayVideo
                  src="/wayfarer/desktopdemo.mp4"
                  className="rounded-[41.5px] w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-[16px] md:text-[20px] font-light leading-normal">
              The Trending Destinations module serves as the centerpiece of the discovery flow. Users can
              filter by travel vibes and swipe through curated destination cards to easily discover places
              that match their interests.
            </p>
          </div>

          {/* Block 3: CTA quiz flow */}
          <div className="flex flex-col gap-[24px]">
            <div className="flex items-center justify-center">
              <div
                className="bg-[#f2eee8] flex items-center justify-center overflow-hidden rounded-[13.5px] w-full md:w-[966px]"
                style={{ aspectRatio: "966/600", padding: "3.44% 4.48%" }}
              >
                <AutoplayVideo
                  src="/wayfarer/mobiledemo.mp4"
                  className="rounded-[41.5px] h-full w-auto"
                />
              </div>
            </div>
            <p className="text-[16px] md:text-[20px] font-light leading-normal">
              Selecting the CTA launches a short preference quiz that introduces Wayfarer&apos;s core product.
              Simple inputs capture key travel preferences and power the AI engine to generate a personalized
              destination.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
