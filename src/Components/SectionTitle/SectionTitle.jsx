/* eslint-disable react/prop-types */

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center  md:w-5/12 my-8">
      {subHeading && (
        <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
      )}
      <h3 className="lg:text-3xl text-xl text-gray-900 capitalize font-bold border-y-4 py-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
