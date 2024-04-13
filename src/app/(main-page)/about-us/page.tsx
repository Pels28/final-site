"use client";
import Heading from "@/components/Heading";
import { Image } from "@nextui-org/react";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { TbScanEye } from "react-icons/tb";
import styles from "../card.module.css";
import { useState } from "react";
import NextImage from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
// import { fadeInUpAnimation } from "../page";

const AboutUs = () => {
  const { scrollY } = useScroll();
  const opacityHome = useTransform(
    scrollY,
    [0, 200, 300, 500],
    [1, 0.5, 0.5, 0]
  );
  const opacityY = useTransform(scrollY, [0, 200], [0, -100]);
  const scaleText = useTransform(scrollY, [0, 300], [1, 1.5]);
  const yText = useTransform(scrollY, [0, 200, 300, 500], [0, 50, 50, 300]);
  const marginLeft = useTransform(scrollY, [0, 300], [10, 14]);

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      review:
        "Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
      rating: 5,
      profilePic: "/images/images.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      review:
        "Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
      rating: 4.5,
      profilePic: "/images/images.png",
    },
    {
      id: 3,
      name: "Alice Johnson",
      review:
        "Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
      rating: 5,
      profilePic: "/images/images.png",
    },
  ]);

  return (
    <>
      <div className="w-screen">
        <motion.section
          style={{ opacity: opacityHome, y: opacityY }}
          className="md:h-[510px] h-[500px] overflow-hidden relative bg-[url('/images/new-about-us.jpg')] bg-no-repeat bg-center bg-cover opacity-90"
        >
          <motion.p className="md:text-9xl text-7xl w-full bg-transparent font-black subpixel-antialiased tracking-wide text-gray opacity-70 absolute bottom-0 left-10 mb-0 pb-0">
            About Us
          </motion.p>
        </motion.section>
        {/* Code goes here below here */}

        <section className="grid md:grid-cols-2  h-auto md:h-[900px] px-4  md:px-10 pb-7 pt-20 gap-12 bg-[#F1F5F5] mb-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                staggerChildren: 0.5,
                ease: "easeInOut",
                delay: 0.2,
                duration: 0.5,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className={`images_left grid grid-cols-2 grid-rows-2 gap-2 md:gap-1 bg-[#ffffff] rounded-3xl h-3/4 px-2 md:px-5 pt-5 ${styles.card}`}
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { ease: "easeInOut", delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className={`grid grid-cols-1 w-[99%] h-[230px] ${styles.card} ${styles.innercard}`}
            >
              <NextImage
                fill
                sizes="100vw"
                // isZoomed
                // isBlurred
                className="p-0 m-0 object-cover rounded-3xl object-center"
                src="/images/image01_left.jpg"
                alt={"image01"}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { ease: "easeInOut", delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className={`grid  grid-cols-1 w-[99%] h-[230px] ${styles.card} ${styles.innercard}`}
            >
              {/* <Image
                isZoomed
                isBlurred
                className=" w-[240px] h-[230px] rounded-2xl"
                src="/images/image01_left.jpg"
                alt={"image01"}
              /> */}

              <NextImage
                fill
                sizes="100vw"
                // isZoomed
                // isBlurred
                className="p-0 m-0 object-cover rounded-3xl object-center"
                src="/images/image02_right.jpg"
                alt={"image02"}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { ease: "easeInOut", delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className={`col-span-2 row-span-1 mb-2 md:-mb-10  ${styles.innercard}`}
            >
              <Image
                isZoomed
                // isBlurred
                className="w-full h-full object-cover rounded-2xl"
                src="/images/image03_span_bottom.jpg"
                alt={"image03"}
              />
            </motion.div>
          </motion.div>

          <div className="aboutus_info ">
            <div className="coreValues space-y-4">
              <motion.h5
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { ease: "easeInOut", delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Heading variant="h5"> More About Us</Heading>
              </motion.h5>
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { ease: "easeInOut", delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Heading variant="h2"> Our Core Values</Heading>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { ease: "easeInOut", delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-secondary-gray pb-9 text-sm md:text-base"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore ma gna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure do
              </motion.p>
            </div>

            <div className="missionStatement space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { ease: "easeInOut", delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Heading variant="h2">Mission Statement</Heading>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.5,
                    delay: 0.2,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-secondary-gray pb-4 text-sm md:text-base"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore ma gna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure do
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.5,
                    delay: 0.2,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-secondary-gray text-sm md:text-base"
              >
                eiusmod tempor incididunt ut labore et dolore ma gna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure do
              </motion.p>
            </div>
          </div>
        </section>

        {/* <section className="visionStatement mt-10 bg-secondary w-screen px-4 md:px-10 pb-8 md:bg-[#F1F5F5]"> */}
        <div className="flex flex-row px-4 md:px-14 pt-3 pb-9 items-start  md:items-start justify-between md:justify-start bg-[#ffffff] rounded-2xl">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { ease: "easeInOut", delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="eyeIcon pt-3 md:pt-0"
          >
            <TbScanEye
              className="w-5 h-5 md:w-10 md:h-10"
              fill="#E9722B"
              color="#E9722B"
            />
          </motion.div>
          <div className="textNinfo mx-5 md:mx-16">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { ease: "easeInOut", delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Heading variant="h3" className="pb-2 pt-1">
                Vision Statement
              </Heading>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="pb-9 text-sm md:text-base"
            >
              enestado de desarrollo. Muchas versioneshan evolucion ado a través
              de los añosalgunas veces por accidente, otras veces apropósito
              (por ejemplo insertándole humor y cosas por el estilo). leer.
              Muchos paquetes de autoedicióny editores de páginas web usan el
              Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de
              Lorem Ipsum va a dar por resultado muchos sitios web que usan este
              texto si se encuentran ene stado de
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-sm md:text-base"
            >
              apropósito (por ejemplo insertándole humor y cosas por el estilo).
              leer. Muchos paquetes de autoedicióny editores de páginas web usan
              el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda
              de Lorem Ipsum va a dar por resultado muchos sitios web que usan
              este texto si se encuentran ene stado de
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { ease: "easeInOut", delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="Null_icon"
          >
            <MdOutlineUnfoldMore className="w-8 h-auto color-[E9722B]" />
          </motion.div>
        </div>
        {/* </section> */}
        {/* Review Section */}
        <section className="bg-gray-100 px-24 py-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { ease: "easeInOut", delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Heading variant="h2" className="text-center mb-6">
              Customer Reviews
            </Heading>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.5,
                    delay: 0.2,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true, amount: 0.5 }}
                key={review.id}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
              >
                <Image
                  src={review.profilePic}
                  alt={review.name}
                  className="w-20 h-20 rounded-full mb-4"
                />
                <p className="font-semibold text-center">{review.name}</p>
                <p className="text-gray-600 text-center mb-2">
                  {review.review}
                </p>
                <div className="flex justify-center items-center">
                  <div className="flex items-center">
                    {[...Array(Math.round(review.rating))].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 fill-current text-yellow-500"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 16.563l-5.28 2.693a1 1 0 01-1.438-1.054l1.012-5.887-4.268-4.153a1 1 0 01.554-1.706l5.9-.858 2.639-5.34a1 1 0 011.794 0l2.64 5.34 5.899.858a1 1 0 01.554 1.706l-4.269 4.153 1.012 5.887a1 1 0 01-1.438 1.054L10 16.563z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500 ml-1">({review.rating})</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
