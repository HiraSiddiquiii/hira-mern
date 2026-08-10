type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  variant?: "primary" | "danger" | "secondary";
  className?: string;
};

export default function Button({
  children,
  type = "button",
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",
    danger:
      "bg-red-600 text-white hover:bg-red-700",
    secondary:
      "bg-gray-100 text-gray-700 hover:bg-gray-200",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}