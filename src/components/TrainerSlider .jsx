import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import trener from "../assets/trener.jpg";
import trener2 from "../assets/trener2.jpg";
import trener3 from "../assets/trener3.jpg";
import trener4 from "../assets/trener4.jpg";
import trener5 from "../assets/trener5.jpg";
import Title from "./title";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const trainers = [
  {
    name: "Ирина Ляйм",
    title: "преподаватель по робототехнике",
    image: trener,
  },
  {
    name: "Марина Орлова",
    title: "тренер по программированию",
    image: trener2,
  },
  {
    name: "Максим Петров",
    title: "тренер по программированию",
    image: trener3,
  },
  {
    name: "Константин Назаров",
    title: "тренер по робототехнике",
    image: trener4,
  },
  {
    name: "Лиза Весенина",
    title: "преподаватель по программированию",
    image: trener5,
  },
];

const TrainerSlider = () => {
  return (
    <section className="py-[120px] relative ">
      <div className="container">
        <Title title={"Профессиональные тренеры"} />
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          loop={true}
          breakpoints={{
            1440: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {trainers.map((trainer, index) => (
            <SwiperSlide key={index} style={{ width: "360px" }}>
              <div data-aos="fade-right" className="bg-white rounded-lg transition-all duration-300 w-[360px] max-lg:w-full mt-[60px]">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-[360px] max-lg:w-full h-[400px] max-sm:h-[320px] object-cover rounded-2xl"
                />
                <div className="pt-[20px]">
                  <h3 className="font-jost font-semibold text-[24px] mb-[10px]">
                    {trainer.name}
                  </h3>
                  <p className="text-[18px] font-normal text-[#141024B2] mb-[20px]">
                    {trainer.title}
                  </p>
                  <a
                    href="#"
                    className="text-red-600 text-sm mt-2 inline-block hover:underline"
                  >
                    Подробнее
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <button className="swiper-button-prev-custom absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition-all">
          <FontAwesomeIcon icon={faCircleChevronLeft} />
        </button> */}

        {/* <button className="swiper-button-next-custom absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition-all">
          <FontAwesomeIcon icon={faCircleChevronRight} />
        </button> */}
      </div>
    </section>
  );
};

export default TrainerSlider;

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation'

// const trainers = [
//   {
//     name: "Ирина Ляйм",
//     title: "тренер по робототехнике",
//     image: "/images/irina.jpg"
//   },
//   {
//     name: "Марина Орлова",
//     title: "тренер по программированию",
//     image: "/images/marina.jpg"
//   },
//   {
//     name: "Максим Петров",
//     title: "тренер по программированию",
//     image: "/images/maksim.jpg"
//   },
//   {
//     name: "Константин Назаров",
//     title: "тренер по робототехнике",
//     image: "/images/konstantin.jpg"
//   },
//   {
//     name: "Лиза Весенина",
//     title: "преподаватель по программированию",
//     image: "/images/liza.jpg"
//   }
// ];

// const TrainerSlider = () => {
//   return (
//     <section className="py-16 bg-[#F8F9FB]">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-bold font-jost mb-10">Профессиональные тренеры</h2>
//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={30}
//           slidesPerView={4}
//           navigation
//           breakpoints={{
//             1440: {
//               slidesPerView: 4,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//             768: {
//               slidesPerView: 2,
//             },
//             0: {
//               slidesPerView: 1,
//             },
//           }}
//         >
//           {trainers.map((trainer, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full">
//                 <img src={trainer.image} alt={trainer.name} className="w-full h-[250px] object-cover rounded-t-lg" />
//                 <div className="p-4">
//                   <h3 className="font-jost font-medium text-lg">{trainer.name}</h3>
//                   <p className="text-sm text-gray-500">{trainer.title}</p>
//                   <a href="#" className="text-red-600 text-sm mt-2 inline-block hover:underline">Подробнее</a>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default TrainerSlider;
