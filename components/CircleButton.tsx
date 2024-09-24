const CircleButton = ({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) => {
  return <button onClick={onClick}>{text}</button>;
};

export default CircleButton;
