const GradientText = ({ text }: { text: string }) => {
  return (
    <span className="bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
      {` ${text}`}
    </span>
  );
};

export default GradientText;
