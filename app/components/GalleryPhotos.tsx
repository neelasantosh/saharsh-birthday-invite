import { useEffect, useState } from "react";
import Photo1 from "~/images/Photo1.jpeg";
import Photo2 from "~/images/Photo2.jpeg";
import Photo3 from "~/images/Photo3.jpeg";
import Photo4 from "~/images/Photo4.jpeg";
import Photo5 from "~/images/Photo5.jpeg";
import Photo6 from "~/images/Photo6.jpeg";
import Photo7 from "~/images/Photo7.jpeg";
import Photo8 from "~/images/Photo8.jpeg";
import Photo9 from "~/images/Photo9.jpeg";
import Photo10 from "~/images/Photo10.jpeg";
import Photo11 from "~/images/Photo11.jpeg";
import Photo12 from "~/images/Photo12.jpg";
import Gallery from "./Gallery";
import type { IPhoto } from "./Gallery";

const photos: IPhoto[] = [
  {
    src: Photo1,
    width: 3,
    height: 2,
    alt: "Photo 1",
  },
  {
    src: Photo2,
    width: 4,
    height: 5,
    alt: "Photo 2",
  },
  {
    src: Photo3,
    width: 3,
    height: 2,
    alt: "Photo 3",
  },
  {
    src: Photo4,
    width: 1,
    height: 1,
    alt: "Photo 4",
  },
  {
    src: Photo5,
    width: 3,
    height: 2,
    alt: "Photo 5",
  },
  {
    src: Photo6,
    width: 4,
    height: 5,
    alt: "Photo 6",
  },
  {
    src: Photo7,
    width: 3,
    height: 2,
    alt: "Photo 7",
  },
  {
    src: Photo8,
    width: 1,
    height: 1,
    alt: "Photo 8",
  },
  {
    src: Photo9,
    width: 3,
    height: 2,
    alt: "Photo 9",
  },
  {
    src: Photo10,
    width: 5,
    height: 4,
    alt: "Photo 10",
  },
  {
    src: Photo11,
    width: 3,
    height: 2,
    alt: "Photo 11",
  },
  {
    src: Photo12,
    width: 2,
    height: 3,
    alt: "Photo 12",
  },
];

let isHydrating = true;

const GalleryPhotos = () => {
  let [isHydrated, setIsHydrated] = useState(!isHydrating);

  useEffect(() => {
    isHydrating = false;
    setIsHydrated(true);
  }, []);

  return (
    <div className="w-full px-1 md:px-4">
      <h4 className="text-3xl font-head font-bold text-center mb-14 pt-10 text-gray-700">
        Gallery
      </h4>
      {isHydrated ? (
        <div className="w-full overflow-auto">
          <Gallery photos={photos} />
        </div>
      ) : null}
    </div>
  );
};

export default GalleryPhotos;
