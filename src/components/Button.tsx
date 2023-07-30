interface ButtonProps {
  text: string;
  callback: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 sm:h-11 px-8 bg-white text-black hover:bg-[#70e000] hover:shadow-lg hover:scale-105 transition duration-500"
      onMouseDown={(e) => e.preventDefault()}
      onClick={props.callback}
    >
      {props.text}
    </button>
  );
};

export { Button };
