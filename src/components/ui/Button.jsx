export default function Button({ children, variant = "green", className = "", href, target, rel}) {
  const baseStyles = `
    px-[16px]
    py-[10px]
    rounded-full
    body-medium
    transition
    duration-200
    active:scale-95
  `;

  const variants = {
    green: "bg-primary text-bg-light hover:opacity-90",
    white: "bg-bg-light text-bg-dark border border-bg-dark border-bg-dark hover:border-transparent hover:bg-secondary hover:opacity-90",
    black: "bg-bg-dark text-bg-light hover:opacity-80",
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      target={target}
      rel = {rel}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
}