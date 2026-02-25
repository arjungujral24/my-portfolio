export default function Container({ children }) {
  return (
    <div className="max-w-[1440px] mx-auto px-[64px]">
      {children}
    </div>
  );
}
