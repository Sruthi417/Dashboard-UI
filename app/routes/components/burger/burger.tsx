import "./burger.scss";

interface BurgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Burger = ({ open, setOpen }: BurgerProps) => {
  return (
    <button
      className={`burger ${open ? "active" : ""}`}
      onClick={() => setOpen(!open)}
      aria-label="Toggle menu"
      aria-expanded={open}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Burger;
