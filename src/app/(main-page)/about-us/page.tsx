"use client";
import Heading from "@/components/Heading";
import { Image } from "@nextui-org/react";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { TbScanEye } from "react-icons/tb";
import styles from "../card.module.css";
import { useState } from "react";


const AboutUs = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: 'John Doe', review: 'Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea', rating: 5, profilePic: '/images/images.png' },
    { id: 2, name: 'Jane Smith', review: 'Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea', rating: 4.5, profilePic: '/images/images.png' },
    { id: 3, name: 'Alice Johnson', review: 'Lorem ipsum dolor sit amet,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea', rating: 5, profilePic: '/images/images.png' },
  ]);


  return (
    <>
    <div className="w-screen">
      <section className="h-[525px] overflow-hidden relative bg-[url('/images/new-about-us.jpg')] bg-no-repeat bg-center bg-cover opacity-90">
        <p className="md:text-9xl text-7xl w-full bg-transparent font-black subpixel-antialiased tracking-wide text-gray opacity-70 absolute bottom-0 left-10 mb-0 pb-0">
          About Us
        </p>
      </section>
      {/* Code goes here below here */}

      <section className="grid md:grid-cols-2  h-auto md:h-[900px] px-4  md:px-10 pb-7 pt-20 gap-12 bg-[#F1F5F5] mb-10">
        <div className={`images_left grid grid-cols-2 grid-rows-2 w-[640px] gap-4 bg-[#ffffff] rounded-3xl h-3/4 px-2 md:px-5 pt-5 ${styles.card}`}
        >
          <div
            className={`grid grid-cols-2 w-[600px] md:w-[600px] h-[150px] gap-[4px] md:gap-4 px-16${styles.card} ${styles.innercard}`}
          >
            <Image
              isZoomed
              isBlurred
              className="md:w-[270px] w-[290px] h-[230px] rounded-2xl"
              src="/images/image01_left.jpg"
              alt={"image01"}
            />
            <Image
              isZoomed
              isBlurred
              className="md:w-[290px] w-[260px] h-[230px]  rounded-2xl"
              src="/images/image02_right.jpg"
              alt={"image02"}
            />
          </div>

          <div className={`col-span-2 row-span-1 md:-mb-10  ${styles.innercard}`}>
            <Image
              isZoomed
              // isBlurred
              className="w-[640px] h-[380px] object-cover rounded-2xl"
              src="/images/image03_span_bottom.jpg"
              alt={"image03"}
            />
          </div>
        </div>

        <div className="aboutus_info ">
          <div className="coreValues space-y-4">
            <Heading variant="h5">More About Us</Heading>
            <Heading variant="h2">Our Core Values</Heading>
            <p className="text-secondary-gray pb-9 text-sm md:text-base">
            <ul>
                <li>Value our customers and fellow employees</li>
                <li>Achieve our goals and aspirations</li>
                <li>Learn and encourage a culture of knowledge, expertise and accountability.</li>
                <li>Understand our business, our customers and fellow employees.</li>
                <li>Excel in everything we do.</li>

              </ul>
            </p>
          </div>

          <div className="missionStatement space-y-4">
            <Heading variant="h2">Mission Statement</Heading>
            <p className="text-secondary-gray pb-4 text-sm md:text-base">
            Our mission is to empower individuals worldwide by facilitating access to 
            exceptional educational opportunities, career pathways, and healthcare services. 
            Our commitment extends to guiding aspiring students towards their academic goals, 
            connecting talented professionals with global career prospects, and addressing critical
             healthcare staffing needs. 
            </p>
            <p className="text-secondary-gray text-sm md:text-base">
            Through personalized support, innovative strategies, and unwavering 
            dedication, we strive to enhance lives and foster success on a global scale. We prioritize excellence, 
            integrity, and inclusivity in all aspects of our operations, ensuring 
            sustainable growth and meaningful impact in the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="visionStatement mt-10 bg-secondary w-screen px-4 md:px-10 pb-8 md:bg-[#F1F5F5]"> */}
        <div className="flex flex-row px-4 md:px-14 pt-3 pb-9 items-start  md:items-start justify-between md:justify-start bg-[#ffffff] rounded-2xl">
          <div className="eyeIcon pt-3 md:pt-0">
            <TbScanEye className="w-5 h-5 md:w-10 md:h-10" fill="#E9722B" color="#E9722B" />
          </div>
          <div className="textNinfo mx-5 md:mx-16">
            <Heading variant="h3" className="pb-2 pt-1">
              Vision Statement
            </Heading>
            <p className="pb-9 text-sm md:text-base">
            Our vision is to be the premier global recruitment agency, renowned for our 
            commitment to excellence in study abroad programs, international and local 
            recruitment, healthcare staffing, and standardized test preparation. 
            We aspire to be the catalysts of transformational journeys, connecting 
            individuals with opportunities that transcend borders and boundaries. 
            By leveraging cutting-edge technology, fostering strategic partnerships, 
            and cultivating a culture of continuous innovation, we aim to revolutionize the recruitment industry. 
            </p>
            <p className="text-sm md:text-base">
            Our vision encompasses a world where every individual has access to quality education, 
            fulfilling careers, and superior healthcare services, irrespective of geographic 
            location or socioeconomic status. Through our unwavering dedication to integrity, 
            diversity, and client satisfaction, we seek to set new standards of excellence 
            and become the trusted partner of choice for individuals and organizations alike.
            </p>
          </div>
          <div className="Null_icon">
            <MdOutlineUnfoldMore className="w-8 h-auto color-[E9722B]" />
          </div>
        </div>
      {/* </section> */}
      {/* Review Section */}
      <section className="bg-gray-100 px-24 py-8">
          <Heading variant="h2" className="text-center mb-6">Customer Reviews</Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map(review => (
              <div key={review.id} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                <Image src={review.profilePic} alt={review.name} className="w-20 h-20 rounded-full mb-4" />
                <p className="font-semibold text-center">{review.name}</p>
                <p className="text-gray-600 text-center mb-2">{review.review}</p>
                <div className="flex justify-center items-center">
               
                  <div className="flex items-center">
                    {[...Array(Math.round(review.rating))].map((_, index) => (
                      <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 16.563l-5.28 2.693a1 1 0 01-1.438-1.054l1.012-5.887-4.268-4.153a1 1 0 01.554-1.706l5.9-.858 2.639-5.34a1 1 0 011.794 0l2.64 5.34 5.899.858a1 1 0 01.554 1.706l-4.269 4.153 1.012 5.887a1 1 0 01-1.438 1.054L10 16.563z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500 ml-1">({review.rating})</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
