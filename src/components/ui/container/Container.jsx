/* eslint-disable react/prop-types */
const Container = ({ children, color }) => {
  return (
    <div className={`w-full flex justify-center items-center bg-${color}`}>
      <div className="container mx-auto">
        <div className="max-w-max_content_width mx-auto 2xl:px-[104px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
