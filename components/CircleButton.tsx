const CircleButton = ({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) => {
  return (
    <button
      onClick={onClick}
      className="border border-black rounded-full w-8 h-8"
    >
      {text}
    </button>
  );
};

export default CircleButton;
