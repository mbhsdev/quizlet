const TextField = ({
  field,
  setField,
}: {
  field: string;
  setField: (value: string) => void;
}) => {
  return (
    <input
      onChange={(e) => setField(e.target.value)}
      value={field}
      className="border border-black p-1"
      type="text"
    />
  );
};

export default TextField;
