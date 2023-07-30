interface ButtonProps {
  text: string;
  callback: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-white text-secondary-foreground hover:bg-white/80"
      onClick={props.callback}
    >
      {props.text}
    </button>
  );
};

export { Button };
