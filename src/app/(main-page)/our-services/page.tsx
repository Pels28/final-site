"use client";

import Card from "@/components/Card";
import Heading from "@/components/Heading";
import {
  CircularProgress,
  Image,
  Button as NextButton,
  Link,
} from "@nextui-org/react";
import Button from "@/components/Button/index";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Input from "@/components/forms/Input";
import PhoneInput from "@/components/forms/PhoneInput/index";
import DateInput from "@/components/forms/DateInput";
import Select from "@/components/forms/Select";
import { Formik } from "formik";
import * as Yup from "yup";
import HoverVideoPlayer from "react-hover-video-player";
import { useEffect, useRef, useState } from "react";
// import Chatbot from "@/components/Chatbot";
import styles from "../card.module.css";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import NextLink from "next/link";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

// export const fadeInUpAnimation: Variants = {
//   hidden: { opacity: 0, y: 50 },
//   show: {
//     opacity: 1,
//     y: 0,

//     transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
//   },
// };

const OurServices = () => {
  const [mapInfo, setMapInfo] = useState<{
    lat: number;
    lng: number;
    locationAddress: string;
  }>({} as { lat: number; lng: number; locationAddress: string });
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ stopOnInteraction: false }),
  ]);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollContainerToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollContainerToBottom();
    // window.scrollTo(0, 0);
  }, []);

  const { scrollY } = useScroll();
  const opacityHome = useTransform(
    scrollY,
    [0, 200, 300, 500],
    [1, 0.5, 0.5, 0]
  );
  const opacityY = useTransform(scrollY, [0, 200], [1, -100]);

  return (
    <div className="w-screen overflow-hidden">
      <>
        <motion.section
          style={{ opacity: opacityHome, y: opacityY }}
          className={`md:h-[600px] h-[200px] overflow-hidden relative md:bg-[url('/images/portrait-nurse.jpg')] bg-[url('/images/mobile1.jpg')] bg-no-repeat bg-contain md:bg-cover opacity-90 w-[100vw] `}
        ></motion.section>

        <div className="sm:w-[94%] text-xs sm:text-[14px] w-[600px] mx-2  sm:mx-auto my-8 sm:px-10">
          <div className="flex items-center justify-start sm:justify-center px-6 mx-auto">
            <div className="sm:flex-grow hidden sm:flex border-b border-secondary"></div>
            <div className="px-4 sm:mx-auto mx-2">
              Companies we have guided and supported our clients in
            </div>
            <div className="sm:flex-grow hidden sm:flex   border-b border-secondary"></div>
          </div>
          <div
            className="embla w-full overflow-x-hidden p-4 pl-0 "
            ref={emblaRef}
          >
            <div className="embla__container">
              <div className="embla__slide ">
                <Image
                  src="/images/nhs.jpg"
                  alt="nhs"
                  className="w-[120px] h-[80px]"
                />
              </div>
              <div className="embla__slide">
                <Image
                  src="/images/amazon.jpg"
                  alt="amazon"
                  className="w-[120px] h-[80px]"
                />
              </div>
              <div className="embla__slide">
                <Image
                  src="/images/barclays.jpg"
                  alt="barclays"
                  className="w-[120px] h-[80px]"
                />
              </div>
              <div className="embla__slide">
                <Image
                  alt="meta"
                  src="/images/meta.jpg"
                  className="w-[120px] h-[80px]"
                />
              </div>
              <div className="embla__slide">
                <Image
                  alt="netflix"
                  src="/images/netflix-logo.png"
                  className="w-[120px] h-[80px]"
                />
              </div>
              <div className="embla__slide">
                <Image
                  alt="jpm"
                  src="/images/jpm.jpg"
                  className="w-[120px] h-[80px]"
                />
              </div>
              <div className="embla__slide">
                <Image
                  alt="d/o.e"
                  src="/images/doe.jpg"
                  className="w-[200px] h-[100px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray w-full h-[900px]  p-8 flex flex-col md:flex-row items-start md:items-center justify-start gap-8">
          <Card
            shadow
            rounded
            padded={false}
            className="p-4 w-full flex justify-start md:w-7/12  md:flex md:flex-row md:items-start md:justify-start gap-4 cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { ease: "easeInOut", delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="w-full relative md:w-1/2 h-full md:h-1/2 px-4 pb-2 flex flex-col  md:items-center md:justify-center  gap-2"
            >
              <Image
                isBurred
                isZoomed
                src="/images/family.jpg"
                alt="family"
                className="p-0 m-0 object-cover rounded-3xl object-center "
                sizes="100vw"
              />
              <Image
                isBurred
                isZoomed
                src="/images/teachers.jpg"
                alt="teachers"
                className="hidden md:flex"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { ease: "easeInOut", delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="hidden md:flex w-1/2 flex-col h-full p-0"
            >
              <Image
                isBurred
                isZoomed
                src="/images/old.jpg"
                className="w-full h-[400px]"
                alt="old"
                git
              />

              <Image
                src="/images/plane-path.png"
                alt="plane"
                className="mt-[-30px] p-0 w-[400px] h-[200px]"
              />
              {/* <TbPlaneTilt fill="#E9722B" color="#E9722B" className="mt-7 h-10 w-10 flex justify-center"/> */}
            </motion.div>
          </Card>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full md:w-1/2 h-[550px] flex flex-col items-start justify-start gap-4"
          >
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="font-semibold"
            >
              About Us
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-xl font-bold"
            >
              What is Our Mission?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-secondary-gray text-sm"
            >
              Our mission is to empower individuals worldwide by facilitating
              access to exceptional educational opportunities, career pathways,
              and healthcare services. Our commitment extends to guiding
              aspiring students towards their academic goals ...
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-secondary-gray text-sm mt-4"
            >
              Our vision is to be the premier global recruitment agency,
              renowned for our commitment to excellence in study abroad
              programs, international and local recruitment, healthcare
              staffing, and standardized test preparation. We aspire to be the
              catalysts of transformational journeys ...
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <NextButton
                href="/about-us"
                as={Link}
                showAnchorIcon
                color="primary"
                size="lg"
                className="px-8 mt-5 rounded-full"
              >
                Read more
              </NextButton>
            </motion.div>
          </motion.div>
        </div>
        <div
          className="w-full h-fit overflow-hidden p-8 md:flex md:flex-row md:items-center md:justify-start gap-4 mb-0"
          ref={containerRef}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full md:w-5/12 pl-8 h-[450px] flex flex-col items-start justify-start gap-4"
          >
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="font-semibold"
            >
              Our Services
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-xl font-bold"
            >
              How we work
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-secondary-gray text-sm"
            >
              We match the right candidates with the right job opportunities,
              providing value to both clients and candidates throughout the
              recruitment process.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-row items-center justify-start gap-3"
            >
              <IoMdCheckmarkCircleOutline
                fill="#E9722B"
                color="#E9722B"
                className="w-8 h-8"
              />
              <p className="font-semibold">600 Offers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-row items-center justify-start gap-3"
            >
              <IoMdCheckmarkCircleOutline
                fill="#E9722B"
                color="#E9722B"
                className="w-8 h-8"
              />
              <p className="font-semibold">5+ Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-row items-center justify-start gap-3"
            >
              <IoMdCheckmarkCircleOutline
                fill="#E9722B"
                color="#E9722B"
                className="w-8 h-8"
              />
              <p className="font-semibold">20+ Team Members</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-row items-center justify-start gap-3"
            >
              <IoMdCheckmarkCircleOutline
                fill="#E9722B"
                color="#E9722B"
                className="w-8 h-8"
              />
              <p className="font-semibold">700+ Satisfied Customers</p>
            </motion.div>

            {/* <Button size="lg" className="px-8" rounded>
              Get in touch
            </Button> */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className=" hidden md:flex flex-row items-center justify-start gap-3 mb-9"
            >
              <Image width={100} height={100} src="/images/bc.jpg"></Image>
              <small> British Council approved registration centre</small>
            </motion.div>
          </motion.div>
          <Card
            shadow={false}
            rounded
            padded={false}
            className={`p-4 mt-8 md:mb-8 w-full h-[500px] ${styles.card} flex flex-col  md:items-center md:justify-start justify-center gap-4 cursor-pointer`}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { ease: "easeInOut", delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className={` h-full p-0 ${styles.card} ${styles.innercard}`}
            >
              <Image
                isZoomed
                alt="teachers"
                src="/images/teaching.jpg"
                className={`w-[550px]`}
              />
              {/* <TbPlaneTilt fill="#E9722B" color="#E9722B" className="mt-7 h-10 w-10 flex justify-center"/> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { ease: "easeInOut", delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className={`w-[470px] ${styles.innercard}  mt-[-80px] h-full p-0 pb-2 hidden md:flex flex-row items-start justify-start gap-2 z-10`}
            >
              <Image
                isZoomed
                src="/images/industry.jpeg"
                className={`w-[500px] h-[150px]`}
                alt="industry"
              />
              <Image
                isZoomed
                src="/images/class.jpg"
                alt="class"
                className={`w-[500px] h-[150px]`}
              />
            </motion.div>
          </Card>
        </div>
        <div className="w-full flex flex-row gap-0 mb-4">
          <div className="w-full bg-gray md:w-3/4 md:h-[600px] overflow-hidden md:pl-10 py-6 flex flex-col items-center my-auto justify-center gap-8 md:bg-[url('/images/sunset.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="w-full flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between mt-20 gap-4">
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { ease: "easeInOut", delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="relative md:w-5/12 text-secondary md:text-white text-left md:text-2xl pl-5"
              >
                The Services we provide include the following:
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
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
                className="md:flex w-screen md:w-[100%] grid grid-cols-2  px-4 mx-auto flex-row items-start md:items-center md:justify-start gap-4 md:absolute left-[480px] z-10"
              >
                <NextLink
                  href={{
                    pathname: "/vacancies",
                    query: { section: "horizontal-scroll" },
                  }}
                >
                  <Card
                    // onClick={() => {router.push("/vacancies#horizontal-scroll")}}
                    shadow={false}
                    padded={false}
                    className="bg-white text-black mx-auto md:mx-0 md:p-4 h-[200px] md:w-[220px] flex  items-center justify-center shadow-lg hover:shadow-xl"
                  >
                    <p className="w-1/2">International Recruitment </p>
                  </Card>
                </NextLink>
                <NextLink
                  href={{
                    pathname: "/vacancies",
                    query: { section: "health-care" },
                  }}
                >
                  <Card
                    shadow={false}
                    padded={false}
                    className="bg-white text-black p-4 h-[200px] md:w-[220px] flex items-center justify-center shadow-lg hover:shadow-xl"
                  >
                    <p className="w-1/2"> ND Healthcare</p>
                  </Card>
                </NextLink>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="w-full grid grid-cols-2  md:flex md:flex-row px-4 md:items-start md:justify-start gap-4 md:gap-5 md:pt-16 md:px-0 md:pl-10"
            >
              <NextLink
                href={{
                  pathname: "/vacancies",
                  query: { section: "horizontal-scroll" },
                }}
              >
                <Card
                  shadow={false}
                  padded={false}
                  className="md:bg-white shadow-lg  bg-secondary text-white md:text-secondary p-4 h-[200px] md:w-[220px] flex items-center justify-center hover:shadow-xl"
                >
                  <p className="md:w-1/2">Local Recruitment</p>
                </Card>
              </NextLink>
              <Card
                shadow={false}
                padded={false}
                className="bg-white md:text-secondary  p-4 h-[200px] md:w-[220px] flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <p className="md:w-1/2">Study Abroad</p>
              </Card>
              <NextLink
                href={{
                  pathname: "/vacancies",
                  query: { section: "standard-test-section" },
                }}
              >
                <Card
                  shadow={false}
                  padded={false}
                  className="bg-primary  p-4 h-[200px] hidden md:flex items-center justify-center"
                >
                  <p className="md:w-1/2 text-white">
                    Standardized test (OET, GMAT, GRE, TOFEL, IELT, NCLEX)
                  </p>
                </Card>
              </NextLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.5,
                  ease: "easeInOut",
                  delay: 0.2,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="mx-2"
            >
              <NextLink
                href={{
                  pathname: "/vacancies",
                  query: { section: "standard-test-section" },
                }}
              >
                <Card
                  shadow={false}
                  padded={false}
                  className="md:bg-primary bg-gray  p-4 h-[200px] flex md:hidden items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <p className="md:w-1/2 md:text-white text-secondary">
                    Standardized test (OET, GMAT, GRE, TOFEL, IELT, NCLEX)
                  </p>
                </Card>
              </NextLink>
            </motion.div>
          </div>
          <div className="hidden md:flex w-2/5 h-[500px] my-auto z-0">
            <Image
              src="/images/plane.jpeg"
              className="h-[500px] rounded-none"
              alt="plane"
            />
          </div>
        </div>
        <div className="mt-5 w-screen h-[800px] p-8 flex flex-row items-center justify-start gap-8">
          <Card
            shadow
            rounded
            padded={false}
            className="md:pl-12 pt-0 mt-0 md:w-7/12 w-full h-[640px] flex flex-col items-start justify-start gap-4 cursor-pointer"
          >
            <motion.h3
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
              className="text-left w-screen text-xl font-bold"
            >
              Vacancies and Events
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Image
                isBurred
                isZoomed
                src="/images/book.jpg"
                className="h-[420px] w-[100vw]"
                alt="books"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col items-start justify-start gap-4 mx-8 mt-4"
            >
              <motion.h6
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
              >
                ND Healthcare
              </motion.h6>
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
                className="text-secondary-gray text-sm"
              >
                NDR is introducing an online OET class tailored around your
                needs
              </motion.p>
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
              >
                <NextButton
                  as={Link}
                  href="/vacancies"
                  showAnchorIcon
                  size="lg"
                  className="px-8 rounded-full"
                  color="primary"
                >
                  Read more
                </NextButton>
              </motion.div>
            </motion.div>
          </Card>
          <div className="w-4/12  h-[600px] hidden md:flex flex-col items-start justify-between pt-8 ">
            <Card
              shadow
              padded
              className="flex flex-col items-start justify-start gap-5"
            >
              <motion.h6
                initial={{ opacity: 0, x: 100 }}
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
              >
                News Update
              </motion.h6>
              <motion.p
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
                className="text-secondary-gray text-sm"
              >
                Primary school teachers and secondary teachers with a recent
                teaching experience
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.5,
                    ease: "easeInOut",
                    delay: 0.2,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <NextButton
                  as={Link}
                  href="/vacancies"
                  showAnchorIcon
                  size="lg"
                  className="px-8 rounded-full"
                  color="primary"
                >
                  Read more
                </NextButton>
              </motion.div>
            </Card>
            <Card
              shadow
              padded
              className="flex flex-col items-start justify-start gap-5"
            >
              <motion.h6
                initial={{ opacity: 0, x: 100 }}
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
              >
                News Update
              </motion.h6>
              <motion.p
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
                className="text-secondary-gray text-sm"
              >
                A school in UK is recruiting Geography teacher. Deadline
                25/03/2024
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.5,
                    ease: "easeInOut",
                    delay: 0.2,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <NextButton
                  as={Link}
                  href="/vacancies"
                  showAnchorIcon
                  size="lg"
                  className="px-8 rounded-full"
                  color="primary"
                >
                  Read more
                </NextButton>
              </motion.div>
            </Card>
          </div>
        </div>

        <div className="mx-auto md:w-2/3 w-[85%]">
          {/* <Video  autoPlay={false} accentColor="#E9722B" src={northVideo}/> */}
          <HoverVideoPlayer
            videoSrc="/north-video.mp4"
            preload="metadata"
            controls
            // Disable both the download and fullscreen buttons
            controlsList="nodownload nofullscreen"
            className="w-full mx-auto h-full hover: scale-110"
            pausedOverlay={
              <div className="w-full h-full bg-secondary opacity-50 flex flex-col items-center justify-center gap-4"></div>
            }
            loadingOverlay={
              <div className="w-full h-full bg-secondary opacity-50 flex flex-col items-center justify-center gap-4">
                <CircularProgress className="w-14 h-14" />
              </div>
            }
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.5, delay: 0.2, duration: 0.5 },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-gray w-full h-[650px] p-2 md:p-10 flex justify-center mt-4"
        >
          <Card
            shadow
            rounded
            padded={false}
            className="p-10 m-6 full h-[500px] flex flex-row items-center justify-start gap-12 cursor-pointer"
          >
            <Card className="bg-primary w-1/2 text-white h-full pt-8 hidden md:flex flex-col items-center justify-center gap-5">
              <p className="w-3/4">
                Subscribe to our newsletter for product updates and be the first
                to know about our specials and promotions
              </p>
              <Input
                className="bg-white rounded-full w-3/4"
                rounded
                size="lg"
                append={
                  <Button className="px-8" rounded size="lg" variant="solid">
                    Join
                  </Button>
                }
                placeholder="Enter email here..."
              />
            </Card>
            <div className="md:w-1/2 w-full h-[420px] flex flex-col items-start justify-start gap-4 p-0 pb-5">
              <Heading
                variant="h3"
                className="text-secondary p-0 m-0 text-lg md:text-2xl"
              >
                Fill forms to book appointment
              </Heading>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  phone: "", // can be phone or email
                  date: null,
                  time: null,
                  office: "",
                }}
                validateOnBlur
                validateOnChange={false}
                validationSchema={Yup.object({
                  name: Yup.string().trim().required("Name required"),
                  date: Yup.date().required("Pick date"),
                  time: Yup.date().required("Pick time"),
                  email: Yup.string()
                    .trim()
                    .email("Invalid email address")
                    .required("Email address required"),
                  phone: Yup.string().required("Pnone number required"),
                  office: Yup.string().required("Select office"),
                })}
                onSubmit={async (values) => {
                  console.log(values);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  setFieldValue,
                  setFieldError,
                  handleSubmit,
                }) => (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 pb-4"
                  >
                    <Input
                      required
                      name="name"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="underlined"
                      label="Enter name"
                      error={touched.name ? errors.name : undefined}
                    />
                    <div className="w-full space-y-4 md:space-y-0 md:flex md:flex-row md:items-start md:gap-4">
                      <Input
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email ? errors.email : undefined}
                        required
                        label="Enter email"
                        variant="underlined"
                      />
                      <PhoneInput
                        variant="underlined"
                        autoFocus={false}
                        placeholder="Phone Number"
                        name="phone"
                        value={values.phone}
                        onChange={(v) => {
                          setFieldValue("phone", v);
                        }}
                        onBlur={handleBlur}
                        error={touched.phone ? errors.phone : undefined}
                      />
                    </div>
                    <div className="w-full space-y-4 md:space-y-0 md:flex md:flex-row md:items-start md:gap-4">
                      <DateInput
                        name="date"
                        value={values.date ?? null}
                        required
                        className="border-b-1"
                        label="Pick Date and Time"
                        variant="datetime"
                        onChange={(val) => {
                          setFieldValue("date", val);
                        }}
                        onBlur={handleBlur}
                        error={touched.date ? errors.date : undefined}
                        rangeVariant="start"
                      />
                      <DateInput
                        name="time"
                        value={values.time ?? null}
                        required
                        className="border-b-1"
                        label="Pick Time"
                        variant="timeOnly"
                        onChange={(val) => {
                          setFieldValue("time", val);
                        }}
                        onBlur={handleBlur}
                        error={touched.time ? errors.time : undefined}
                        rangeVariant="start"
                      />
                    </div>
                    <div className="mb-2">
                      <Select
                        // required
                        name="office"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        variant="underlined"
                        label="Select our office"
                        options={[
                          { id: "1", label: "Accra" },
                          { id: "1", label: "Kumasi" },
                        ]}
                      />
                    </div>
                    <Button
                      fullWidth
                      type="submit"
                      size="lg"
                      className="px-8 mt-4"
                      rounded
                    >
                      Submit
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </Card>
        </motion.div>
        {/* <MapSearch /> */}
        {/* <Chatbot /> */}
      </>
    </div>
  );
};

export default OurServices;
