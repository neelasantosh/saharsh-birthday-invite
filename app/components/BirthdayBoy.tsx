import TextWithLine from "./Utils/TextWithLine";
import boy from "~/images/saharsh.png";

const BirthdayBoy = () => {
  return (
    <div className="pt-20 pb-4">
      <h3 className="text-3xl text-center font-sans font-bold text-gray-700 mb-6">
        He is the blessed
      </h3>
      <div className="w-full flex flex-wrap pb-20">
        <div className="w-full px-4">
          <div className="flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center">
            <img
              src={boy}
              alt="pengantin perempuan"
              className="w-48 h-48 rounded-full mb-8"
            />
            <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
              Neela Saharsh
            </h3>
            <div className="mb-4">
              <TextWithLine>Birthday Boy</TextWithLine>
            </div>
            <p className="font-sans text-gray-500 leading-6">
              Born on September, 29th 2022.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayBoy;
