interface BtnLinkProps {
  href: string;
  text: string;
  className?: string;
}

// BtnLink.jsx
export const BtnLink = ({ href, text, className = "" }: BtnLinkProps) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full
                  bg-violet-600 px-6 py-3 text-white font-semibold
                  shadow-md ring-1 ring-black/10
                  hover:bg-violet-700 hover:shadow-lg 
                  active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400
                  transition duration-200 ease-out cursor-pointer transform transition duration-300 ${className}`}
    >
      {text}
    </a>
  );
}

