interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onclick?: () => void;
}

export const Button  = ({ onclick, children, className = "" }: ButtonProps) => {
  return (
    <button onClick={onclick} className={`px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border border-transparent dark:bg-violet-600 ${className}`}>
        {children}
    </button>
  );
};

export default Button;
