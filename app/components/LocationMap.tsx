import SectionWrapper from "./Utils/SectionWrapper";

const MAP_EMBEDED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.4390589186432!2d78.50880877610341!3d17.53427078337817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b33156f5151%3A0xa3337e599283a76c!2sShruthi%20Banquet%20Halls!5e0!3m2!1sen!2sin!4v1693293209074!5m2!1sen!2sin";
const MAP_REDIRECT_URL =
  "https://www.google.com/maps/place/Shruthi+Banquet+Halls/@17.5342708,78.5088088,17z/data=!4m14!1m7!3m6!1s0x3bcb9b33156f5151:0xa3337e599283a76c!2sShruthi+Banquet+Halls!8m2!3d17.5342708!4d78.5113837!16s%2Fg%2F11tnjxd16x!3m5!1s0x3bcb9b33156f5151:0xa3337e599283a76c!8m2!3d17.5342708!4d78.5113837!16s%2Fg%2F11tnjxd16x?authuser=0&entry=ttu";
const MAP_TITLE = "Shruthi Banquet Halls"
const MAP_ADDRESS =
  "Plot no 5.vijay Vihar colony.Opposite to Brindavan colony, Kompally, to, Bolarum, Secunderabad, Telangana 500010";

const LocationMap = () => {
  return (
    <div className="py-10 bg-[#EFEFEF]">
      <SectionWrapper>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full px-4 md:w-1/2">
            <div className="p-2 bg-white rounded-lg shadow-lg">
              <iframe
                src={MAP_EMBEDED_URL}
                className="w-full h-[580px] md:h-[450px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={MAP_TITLE}
                scrolling="no"
                aria-label={MAP_TITLE}
              />
            </div>
          </div>

          <div className="md:w-1/2 w-full px-4 mb-6 md:mb-0">
            <div className="sticky top-8 text-center md:text-left">
              <h3 className="text-3xl font-head font-bold mb-3 text-gray-700">
                Location
              </h3>
              <h4 className="text-xl md:text-2xl mb-4 font-sans font-semibold text-gray-700">
                {MAP_TITLE}
              </h4>
              <p className="mb-16 md:mb-10 font-sans">{MAP_ADDRESS}</p>
              <div className="flex md:justify-start justify-center">
                <a
                  href={MAP_REDIRECT_URL}
                  target="_blank"
                  className="px-5 py-2 transition-all text-lg font-semibold rounded-md bg-contrast hover:bg-contrast-2 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  rel="noreferrer"
                >
                  Open Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default LocationMap;
