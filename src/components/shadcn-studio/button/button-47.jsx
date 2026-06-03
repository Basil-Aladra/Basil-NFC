const ButtonStitchesDemo = ({ children, href, className, ...props }) => {
  const innerContent = (
    <>
      <span className="absolute top-0 left-0 size-full rounded-md border border-dashed border-sky-50 shadow-inner shadow-white/30 group-active:shadow-white/10 pointer-events-none" />
      <span className="absolute top-0 left-0 size-full rotate-180 rounded-md border-sky-50 shadow-inner shadow-black/30 group-active:shadow-black/10 pointer-events-none" />
      <span className="relative z-10">{children}</span>
    </>
  );

  const baseClass =
    "group flex items-center justify-center relative rounded-xl border-2 border-sky-500 bg-sky-500 px-4 py-3 text-base font-medium text-white hover:shadow-lg transition-all " +
    (className || "");

  if (href) {
    return (
      <a href={href} className={baseClass} {...props}>
        {innerContent}
      </a>
    );
  }

  return (
    <button className={baseClass} {...props}>
      {innerContent}
    </button>
  );
};

export default ButtonStitchesDemo;
