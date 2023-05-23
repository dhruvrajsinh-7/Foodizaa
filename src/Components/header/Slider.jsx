import React, { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Logo } from "../../assets";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";

const Slider = () => {
  const splideRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (splideRef.current) {
      setTimeout(() => {
        setLoading(false);
        new Splide(splideRef.current, {
          fixedWidth: "10rem",
          fixedHeight: "8rem",
          gap: "1rem",
        }).mount();
      }, 2000);
    }
  }, []);

  const renderSlides = () => {
    if (loading) {
      return Array.from({ length: 8 }).map((_, index) => (
        <SplideSlide key={index}>
          <div className="bg-gray-200 animate-pulse w-full h-full"></div>
        </SplideSlide>
      ));
    } else {
      return (
        <>
          <SplideSlide>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep"
              alt="Image 1"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/yparhmxrby5lv0ubsel4"
              alt="Image 2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/jmeoz6zu9fi0h9tw7xrb"
              alt="Image 3"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/oxe97jexxbnxqtbhg2zo"
              alt="Image 4"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3"
              alt="Image 1"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFjPiApdUAN2vbNvm2nTY9T3gvkt2BGVmuA"
              alt="Image 2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKuKijZ-kYbvHSj2EjdXQ4RcN3-kdH6sPRg"
              alt="Image 3"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://tricksrecharge.com/wp-content/uploads/2021/07/IMG_20210719_153928.webp"
              alt="Image 4"
            />
          </SplideSlide>
        </>
      );
    }
  };

  return (
    <div className="bg-[#282c3f] h-66 mb-10">
      <div className="mb-10 px-40" ref={splideRef}>
        <Splide
          options={{
            fixedWidth: "12rem",
            fixedHeight: "12rem",
            gap: "4rem",
          }}
        >
          {renderSlides()}
        </Splide>
      </div>
    </div>
  );
};

export default Slider;

//   return (
//     <div className="bg-[#282c3f] h-66 mb-10">
//       <div className="mb-10 px-40" ref={splideRef}>
//         <Splide
//           options={{
//             fixedWidth: "12rem",
//             fixedHeight: "12rem",
//             gap: "4rem",
//           }}
//         >
//           <SplideSlide>
//             <img
//               src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep"
//               alt="Image 1"
//             />
//           </SplideSlide>
//           <SplideSlide>
//             <img
//               src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/yparhmxrby5lv0ubsel4"
//               alt="Image 2"
//             />
//           </SplideSlide>
//           <SplideSlide>
//             <img
//               src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/jmeoz6zu9fi0h9tw7xrb"
//               alt="Image 3"
//             />
//           </SplideSlide>
//           <SplideSlide>
//             <img
//               src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/oxe97jexxbnxqtbhg2zo"
//               alt="Image 4"
//             />
//           </SplideSlide>
//           <SplideSlide>
//             <img
//               src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3"
//               alt="Image 1"
//             />
//           </SplideSlide>
//           <SplideSlide>
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFjPiApdUAN2vbNvm2nTY9T3gvkt2BGVmuA"
//               alt="Image 2"
//             />
//           </SplideSlide>
//           <SplideSlide>
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKuKijZ-kYbvHSj2EjdXQ4RcN3-kdH6sPRg"
//               alt="Image 3"
//             />
//           </SplideSlide>
//           <SplideSlide>
//             <img
//               src="https://tricksrecharge.com/wp-content/uploads/2021/07/IMG_20210719_153928.webp"
//               alt="Image 4"
//             />
//           </SplideSlide>
//         </Splide>
//       </div>
//     </div>
//   );
// };

// export default Slider;
