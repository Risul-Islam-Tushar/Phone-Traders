import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Reviews = () => {
  const [reviews, setreviews] = useState([]);
  useEffect(() => {
    fetch("https://server-risul-islam-tushar.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setreviews(data));
  }, []);
  return (
    <div>
      <div className="mx-auto text-center md:w-4/12 my-8">
        <p className="text-yellow-600 mb-2">** What Our Client Say **</p>
        <h3 className="text-3xl uppercase border-y-4 py-4">Reviews</h3>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
