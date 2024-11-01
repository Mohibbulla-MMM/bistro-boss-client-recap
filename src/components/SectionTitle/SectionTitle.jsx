const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center w-full pt-10">
      <p className="text-[#D99904] italic mb-3">---{heading}---</p>
      <div>
        <h1 className=" px-12 py-3 text-4xl md:text-5xl font-semibold  border-y-4 border-gray-300 uppercase inline-block select-none">
          {subHeading}
        </h1>
      </div>
    </div>
  );
};

export default SectionTitle;
