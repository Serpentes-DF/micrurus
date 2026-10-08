import styles from "./button.module.css";

type ButtonProps = {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
};

export default function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button onClick={onClick} className={`${styles.button} ${className || ""}`}>
      {children || "Comprar"}
    </button>
  );
}
