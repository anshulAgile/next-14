interface IButtonProps {
  children: React.ReactNode;
  buttonClass?: string;
  disabled?: boolean;
  type?: "button" | "reset" | "submit";
  variant?: "primary" | "secondary";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButtonProps> = ({
  children,
  variant,
  buttonClass,
  type = "button",
  disabled,
  onClick,
}) => {
  const classNames = [
    variant === "primary" ? "btnPrimary" : "",
    variant === "secondary" ? "btnSecondary" : "",
    buttonClass ?? "",
  ].join(" ");

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames}
    >
      {children}
    </button>
  );
};

export default Button;
