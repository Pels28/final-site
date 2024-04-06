"use client";

import { Poppins } from "@/resources/fonts";
import "../globals.css";
import NextProvider from "../NextUIProvider";
import Home from "./page";
import Footer from "../(alt-page)/sections/Footer";
import TopBar from "../(alt-page)/sections/Topbar"
import { Image } from "@nextui-org/react";
import Tabs from "@/components/Tabs/index";
import Button from "@/components/Button/index";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { GOOGLE_MAPS_API_KEY } from "@/resources/config";

// export const metadata: Metadata = {
//   title: "North Devon Recruitment",
//   description: "Generated by create next app",
// };

const TABS = [
  {
    id: "/",
    label: "Home",
    content: <Home />,
  },
  {
    id: "about-us",
    label: "About Us",
  },
  {
    id: "our-services",
    label: "Our Services",
  },
  {
    id: "vacancies",
    label: "Vacancies",
  },
  {
    id: "contact-us",
    label: "",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState("/");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/about-us") {
      setActiveTab("about-us");
    } else if (pathname === "/") {
      setActiveTab("/");
    } else if (pathname === "/our-services") {
      setActiveTab("our-services");
    } else if (pathname === "/vacancies") {
      setActiveTab("vacancies");
    } else if (pathname === "/contact-us") {
      setActiveTab("contact-us");
    }
  }, [pathname]);

  console.log(pathname);

  return (
    <html lang="en">
      <head>
        <script
          defer
          async
          src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`}
        ></script>
      </head>
      <body className={Poppins.className}>
        <NextProvider>
          <main className="light text-foreground bg-background min-w-[1285px] w-screen min-h-screen font-poppins">
            <div className="px-20 h-10 my-2 relative">
              <TopBar />
            </div>
            <div className="bg-gray flex flex-row items-center justify-between rounded-full px-10 py-0 h-[80px] z-30 absolute top-[15%] left-10 right-10 mx-auto">
              <Image width={200} height={200} src="/images/north.png" />
              <Tabs
                wrapperClassName="mx-auto"
                tabList={TABS.map((tab) => ({
                  id: tab.id,
                  label: tab.label,
                }))}
                // ta="text-xs"
                cusror={`${activeTab === "contact-us" ? "hidden" : "visible"}`}
                size="sm"
                color="primary"
                activeTabId={activeTab}
                onSwitchTab={(activeTab) => {
                  router.push(activeTab);
                  setActiveTab(activeTab);
                }}
              />

              <Button
                rounded
                variant={`${
                  activeTab === "contact-us" ? "solid" : "outlined-solid"
                }`}
                size="lg"
                className="w-[250px]"
                onClick={() => {
                  router.push("/contact-us");
                }}
              >
                Contact Us
              </Button>
            </div>

            {children}

            {/* <div className="overflow-x-hidden w-full relative">
              <div className="max-w-7xl mx-auto w-full">
                {TABS.find((tab) => tab.id == activeTab)?.content}
              </div>
            </div> */}

            <Footer />
          </main>
        </NextProvider>
      </body>
    </html>
  );
}