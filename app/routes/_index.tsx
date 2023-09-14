import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import WelcomeModal from "~/components/WelcomeModal";
import { indexAction, indexLoader } from "~/controls";
import type { LoaderDataType } from "~/controls";
import { useMediaQuery } from "react-responsive";
import heroBg from "~/images/hero-bg.jpg";
import heroBgMobile from "~/images/hero-bg-mobile.jpg";
import SectionWrapper from "~/components/Utils/SectionWrapper";
import BirthdayBoy from "~/components/BirthdayBoy";
import Countdown from "~/components/Countdown";
import LocationMap from "~/components/LocationMap";
import Message from "~/components/Message";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MusicPlayer from "~/components/MusicPlayer";
import saharshimage from "~/images/saharsh.png";
import GalleryPhotos from "~/components/GalleryPhotos";

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "Birthday Invitation - Neela Saharsh",
    },
    {
      description:
        "Birthday invitation of Saharsh - Son of Neela Shivani & Santosh",
    },
    {
      "og:image": saharshimage,
    },
    {
      "og:site_name": "neesanto",
    },
    { "og:title": "Birthday of Saharsh" },
    {
      "og:description": `September, 29th 2023. Shruthi banquets`,
    },
    { "og:type": "website" },
  ];
};

export const loader = indexLoader;
export const action = indexAction;

export default function Index() {
  const { ENV } = useLoaderData<LoaderDataType>();
  const isSmallScreen = useMediaQuery({ query: `(max-width: 768px)` });

  const [openWelcome, setOpenWelcome] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const onCloseWelcomeModal = () => {
    setOpenWelcome(false);
    document.body.style.overflow = "auto";
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    setIsMobile(isSmallScreen);
  }, [isSmallScreen]);

  const thisYear = new Date().getFullYear();

  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="bg-background-2"
    >
      <WelcomeModal isOpen={openWelcome} onClose={onCloseWelcomeModal} />

      <div
        className="flex justify-center items-center h-screen md:h-[100vh] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${isMobile ? heroBgMobile : heroBg})` }}
      >
        <div className="mb-1" style={{position: 'absolute', top: '10vh'}}>
          <h4
            className="text-center font-head font-bold text-5xl mb-4 "
            style={{ textShadow: "3px 3px 1px #ffffff", color: 'red' }}
          >
            Happy Birthday Saharsh
          </h4>
          <div
            className="text-center font-black font-sans text-md  italic border-t-2 border-[#ffffff] pt-3"
            style={{ textShadow: "2px 2px 1px #ffffff", color: 'red' }}
          >
            <div className="mb-4 font-head md:text-lg font-medium" style={{ color: 'red' }}>
              Birthday on:
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-6 text-cente font-sans" style={{ color: 'red' }}>
              September, 30th 2023
            </h3>
          </div>
        </div>
      </div>

      <SectionWrapper className="bg-background">
        <BirthdayBoy />
      </SectionWrapper>

      <SectionWrapper className="mb-36 pt-24">
        <Countdown />
      </SectionWrapper>

      <div className="mb-24">
        <LocationMap />
      </div>

      <SectionWrapper className="mb-36">
        <GalleryPhotos />
      </SectionWrapper>

      <GoogleOAuthProvider clientId={ENV.GOOGLE_CLIENT_ID!}>
        <SectionWrapper className="mb-36">
          <Message isMobile={isMobile} />
        </SectionWrapper>
      </GoogleOAuthProvider>

      <div className="py-24 bg-background text-gray-700 relative text-center font-sans">
        © {thisYear} by <span className="font-semibold">Santosh</span>
      </div>

      <MusicPlayer play={!openWelcome} />
    </div>
  );
}
