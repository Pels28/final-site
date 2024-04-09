"use client";
import React, { useEffect, useRef } from "react";
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import { Image } from "@nextui-org/react";
import Button from "@/components/Button";

import Forms from "@/components/forms";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AhodwoMapSearch from "../../../components/AhodwoMapSearch";
import useEmblaCarousel from "embla-carousel-react";
import styles from "../card.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUpAnimation } from "../page";

const Vancancies = () => {
  const [emblaRef] = useEmblaCarousel({ dragFree: true });
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  console.log(section);
  const containerRef = useRef<HTMLDivElement>(null);
  const healthContainer = useRef<HTMLDivElement>(null);
  const standardTestSectionContainer = useRef<HTMLDivElement>(null);
  // /vacancies#horizontal-scroll

  const scrollContainerToHorizontalCards = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollContainerToHealthCare = () => {
    if (healthContainer.current) {
      healthContainer.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollContainerToStandardTestSection = () => {
    if (standardTestSectionContainer.current) {
      standardTestSectionContainer.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (section === "horizontal-scroll") {
      scrollContainerToHorizontalCards();
    } else if (section === "health-care") {
      scrollContainerToHealthCare();
    } else if (section === "standard-test-section") {
      scrollContainerToStandardTestSection();
    }
    [section];
  });

  console.log(pathname);

  const openPdf = () => {
    const pdfPath = "/Bandoh Kwaku.pdf";

    window.open(pdfPath, "_blank");
  };

  const { scrollY } = useScroll();
  const opacityHome = useTransform(
    scrollY,
    [0, 200, 300, 500],
    [1, 0.5, 0.5, 0]
  );
  const opacityY = useTransform(scrollY, [0, 200], [0, -100]);

  return (
    <>
      <div className="w-screen">
        <motion.section
          style={{ opacity: opacityHome, y: opacityY }}
          className="md:h-[510px] h-[500px] overflow-hidden relative bg-[url('/images/vacanciesImage.jpg')] bg-no-repeat bg-center bg-cover"
        >
          <p className="md:text-9xl text-7xl w-full bg-transparent font-black subpixel-antialiased tracking-wide text-gray opacity-70 absolute bottom-0 left-10 mb-0 pb-0">
            Vacancies
          </p>
        </motion.section>

        {/* New section with the left text and image on the right */}
        <section
          className="flex flex-col px-5 items-start justify-start w-screen  md:flex-row md:justify-center md:items-center md:space-x-8 mt-8 md:px-32"
          ref={healthContainer}
        >
          {/* Text on the left */}
          <div className="">
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
            >
              <Heading variant="h4">Are you based in the UK?</Heading>
            </motion.div>
            <motion.p
              variants={fadeInUpAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              Are you a Nurse or a Midwife who relocated to the UK on the
              occupational shortage list as a carer or a Senior career?.
            </motion.p>
            <br />
            <motion.p
              variants={fadeInUpAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              NDR is introducing an ONLINE OET CLASS tailored around your needs.
              Tap on button to Register
            </motion.p>
            <br />
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
            >
              <Button rounded size="lg" onClick={openPdf}>
                Register
              </Button>
            </motion.div>
          </div>

          {/* Image with shadowed card on the right */}
          <div className={` ${styles.card} mt-10 `}>
            <Card
              className={`w-full md:w-[585.99px] h-[494px] ${styles.card} ${styles.innercard}`}
              bordered={false}
              padded={true}
            >
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
                className="relative md:w-full h-[400px] md:h-full overflow-hidden rounded"
              >
                <Image
                  isZoomed
                  isBlurred
                  src="/images/vancanciesbg.jpg"
                  alt="Your Image Alt Text"
                  className="rounded object-cover w-full h-[400px] md:h-full"
                />
              </motion.div>
            </Card>
          </div>
        </section>

        {/* Horizontal Scroll Cards */}
        <section
          id="horizontalscroll"
          className="w-full pl-10 py-10 space-y-6 md:py-24 md:pl-32"
          ref={containerRef}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
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
            <Heading variant="h2">Our Vacancies Available</Heading>
          </motion.div>

          <br />
          <div
            className="embla w-full overflow-x-hidden p-4 pl-0"
            ref={emblaRef}
          >
            <motion.div className="embla__container">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    staggerChildren: 0.7,
                    ease: "easeInOut",
                    delay: 0.2,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="embla__slide"
              >
                {" "}
                <div className="flex-shrink-0 w-[370.3px]">
                  <Card className="w-full h-[320px] bg-gray">
                    <div className="flex flex-col h-full justify-between">
                      <Heading variant="h4">
                        Banking & non-banking Professionals
                      </Heading>
                      <p>
                        The worlds leading financial services firm, is hiring
                        banking & non-banking Professionals at various levels.
                        Those roles are oepn to all, including applicants based
                        outside the UK.
                      </p>
                      <div className="w-1/2">
                        <Button
                          onClick={() =>
                            (window.location.href = "/appointment")
                          }
                          className="mt-5"
                          rounded
                          size="lg"
                          fullWidth
                        >
                          Apply
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    staggerChildren: 0.7,
                    ease: "easeInOut",
                    delay: 0.3,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="embla__slide"
              >
                {" "}
                <div className="flex-shrink-0 w-[370.3px]">
                  <Card className="w-full h-[320px] bg-gray">
                    <div className="flex flex-col h-full justify-between">
                      <Heading variant="h4">Physician Assistant</Heading>
                      <p>
                        For our Local Health care service in Ghana
                        <h5>REQUIREMENT</h5>
                        <ul className="bullet-list">
                          <li>CV</li>
                          <li>School Certificate</li>
                          <li>
                            License with medical and Dental Council with your
                            registration number
                          </li>
                        </ul>
                      </p>
                      <div className="w-1/2">
                        <Button
                          onClick={() =>
                            (window.location.href = "/appointment")
                          }
                          className="mt-5"
                          rounded
                          size="lg"
                          fullWidth
                        >
                          Apply
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    staggerChildren: 0.7,
                    ease: "easeInOut",
                    delay: 0.4,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="embla__slide"
              >
                {" "}
                <div className="flex-shrink-0 w-[370.3px]">
                  <Card className="w-full h-[320px] bg-gray">
                    <div className="flex flex-col h-full justify-between">
                      <Heading variant="h4">
                        Banking & non-banking Professionals
                      </Heading>
                      <p>
                        The worlds leading financial services firm, is hiring
                        banking & non-banking Professionals at various levels.
                        Those roles are oepn to all, including applicants based
                        outside the UK.
                      </p>
                      <div className="w-1/2">
                        <Button
                          onClick={() =>
                            (window.location.href = "/appointment")
                          }
                          className="mt-5"
                          rounded
                          size="lg"
                          fullWidth
                        >
                          Apply
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* forms */}
        <section
          className="w-screen flex flex-col items-start justify-start md:justify-center md:items-center space-x-4 mt-8 md:pb-16"
          ref={standardTestSectionContainer}
        >
          <Card
            className="w-full md:h-[749px] bg-gray md:grid md:grid-cols-2 md:gap-8"
            bordered={false}
          >
            <div className="col-span-1 p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
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
                <Heading variant="h2">Our Standardized Test</Heading>
              </motion.div>
              <br />
              <motion.p
                variants={fadeInUpAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                We are into 5 standardized tests which are OET,GMAT,GRE,TOFEL
                and IELT. Our State of the Art Training Center offers the best
                Classroom and online tuition and learning experience which leads
                to excellence performance.
              </motion.p>
              <br />

              <motion.p
                variants={fadeInUpAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                GRE (Graduate Record Examination) is a general test that is
                often required for admission to graduate programs (master&apos;s
                and doctoral degrees) in various disciplines. Individuals
                interested in pursuing graduate education, including business,
                humanities, social sciences, natural sciences, and engineering,
                commonly take the GRE.
              </motion.p>
              <br />

              <motion.p
                variants={fadeInUpAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                GMAT (Graduate Management Admission) is specifically designed
                for individuals applying to graduate management programs, such
                as MBA. However, it is generally taken by individuals who aspire
                to pursue a graduate degree in business or management.
              </motion.p>
              <br />
              <motion.p
                variants={fadeInUpAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                IELTS (International English Language Testing System) - Measures
                English language proficiency for non-native English speakers.
              </motion.p>
              <br />
              <motion.p
                variants={fadeInUpAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                OET (Occupational English Test) - Assesses English language
                skills of healthcare professionals.
              </motion.p>
              <br />
              <motion.p
                variants={fadeInUpAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                TOEFL (Test of English as a Foreign Language) - Another common
                test for English language proficiency, often required for
                admission to English-speaking universities.
              </motion.p>
            </div>

            <div className="col-span-1 flex justify-center p-4 items-center">
              <Card className="w-full md:h-[500px] bg-white  md:p-10">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
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
                  <Heading variant="h4" className="mb-3">
                    Fill forms to register for a standardized test
                  </Heading>
                </motion.div>
                <motion.div
                  variants={fadeInUpAnimation}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Forms />
                </motion.div>
                <br />
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
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
                  <Button rounded size="md" className="text-center mb-5">
                    Proceed to payment
                  </Button>
                </motion.div>
              </Card>
            </div>
          </Card>
        </section>

        <section className="flex justify-center items-center md:space-x-4 mt-8 md:px-32 pb-32">
          <AhodwoMapSearch className="hidden md:flex" />

          {/* Two Vertical Cards on the right */}
          <div className="flex-shrink-0 space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
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
              <Card className=" h-[290px] w-[430px] bg-primary pt-10 px-14 flex flex-col items-start justify-start gap-10 text-white">
                <div>
                  <Heading variant="h2" className="mb-3">
                    Kumasi Training Center
                  </Heading>
                  <p>
                    NorthDevon Training center,
                    <br />
                    Ahodwo Roundabout, 3rd floor,
                    <br />
                    Nyarko Plaza
                  </p>
                  <br />
                </div>

                <div className="mb-8 mt-0">
                  <Heading variant="h3" className="mb-3">
                    Work Hours
                  </Heading>
                  <p>Monday - Friday: 9:30am - 5:30pm</p>
                </div>
              </Card>
            </motion.div>

            {/* Vertical Card 2 */}
            <motion.div
              variants={fadeInUpAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Image
                isZoomed
                isBlurred
                rounded="md"
                className="w-[430px] h-[239px]"
                src="/images/Training center.jpg"
                alt="Your Image Alt Text"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Vancancies;
