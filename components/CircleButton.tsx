const CircleButton = ({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) => {
  return <button>{text}</button>;
};

export default CircleButton;
