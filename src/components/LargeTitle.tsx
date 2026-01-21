import GradientText from "./GradientText";

const LargeTitle = ({
  regularText,
  gradientText,
}: {
  regularText: string;
  gradientText?: string;
}) => {
  return (
    <h2 className="text-4xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-center">
      {regularText}
      {gradientText && <GradientText text={gradientText} />}
    </h2>
  );
};

export default LargeTitle;
