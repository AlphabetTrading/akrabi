"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useLayoutEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  toggleOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const menuitem_variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

const navbar_variants = {
  open: {
    height: "100%",
  },
  closed: {
    height: 0,
  },
};

const navigationItems = [
  {
    id: 1,
    title: "Home",
    link: "/",
    image: "/images/traceability/traceability.jpg",
    sublinks: [],
  },
  // {
  //   id: 2,
  //   title: "About",
  //   link: "/about",
  //   image: "/images/every-step.png",
  //   sublinks: [],
  // },
  // {
  //   id: 3,
  //   title: "Producers",
  //   link: "/producers",
  //   image: "/images/farms-cta.png",
  //   sublinks: [],
  // },
  // {
  //   id: 4,
  //   title: "Offerings",
  //   link: "/offerings",
  //   sublinks: [],
  // },
  {
    id: 6,
    title: "Deforestation",
    link: "/deforestation",
    image: "/images/deforestation-landing-page.jpg",
    // sublinks: [
    //   {
    //     id: 1,
    //     title: "Traceability",
    //     link: "/",
    //   },
    //   {
    //     id: 2,
    //     title: "Transparency",
    //     link: "/",
    //   },
    //   {
    //     id: 3,
    //     title: "Deforestation",
    //     link: "/",
    //   },
    // ],
  },
  {
    id: 7,
    title: "Transparency",
    link: "/transparency",
    image:
      "https://akraabi.s3.amazonaws.com/transparency/transparency-hero.webp",
  },
  {
    id: 8,
    title: "Contact Us",
    link: "/contact-us",
    image: "/images/traceability/transparency.jpg",
    sublinks: [],
  },
];

const NavbarMenu = ({ isOpen, toggleOpen }: Props) => {
  const pathname = usePathname();
  const [activeImage, setActiveImage] = useState(
    navigationItems.find(
      (navigationItem: any) => navigationItem.link === pathname,
    )?.image ?? "/images/traceability/traceability.jpg",
  );
  const [activeNavigationItem, setActiveNavigationItem] = useState<any>(
    navigationItems[0],
  );
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const item =
      navigationItems.find(
        (navigationItem: any) => navigationItem.link === pathname,
      ) ?? navigationItems[0];

    setActiveNavigationItem(item);
    setActiveImage(item.image ?? "/images/traceability/traceability.jpg");
  }, [pathname]);

  return (
    <div className="nav-menu fixed min-h-screen inset-0 z-40 -translate-y-full w-full max-w-[2048px] h-screen grid grid-cols-12 items-center bg-secondary mx-auto">
      <div
        className={clsx(
          "w-full flex justify-center col-span-12 lg:col-span-5 bg-secondary",
        )}
      >
        <ul className="w-3/4 flex flex-col justify-center gap-y-6">
          {navigationItems.map((navigationItem: any, index: number) => {
            const active = pathname === navigationItem.link;
            return (
              <li
                // variants={menuitem_variants}
                className="nav-item list-none"
                key={index}
              >
                <div>
                  <Link
                    href={navigationItem.link}
                    title={navigationItem.title}
                    onClick={() => {
                      toggleOpen((prev) => !prev);
                    }}
                    onMouseEnter={() => {
                      setActiveImage(navigationItem.image);
                      setIsHovering(true);
                    }}
                    onMouseLeave={() => {
                      setIsHovering(false);
                      setActiveImage(activeNavigationItem.image);
                    }}
                  >
                    <h1
                      className={clsx(
                        "uppercase font-semibold text-4xl md:text-5xl lg:text-7xl text-white/50 hover:text-white",
                        active ? "line-through text-white/100" : "",
                      )}
                    >
                      {navigationItem.title}
                    </h1>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        // animate={isOpen ? "open" : "closed"}
        // variants={navbar_variants}
        className="lg:flex relative  items-center w-full h-full hidden col-span-12 lg:col-span-7 bg-primary"
      >
        {navigationItems.map((navigationItem: any, index: number) => {
          return (
            <div
              key={index}
              className={clsx(
                "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-1/2 h-1/2 duration-300 transition-all",
                isHovering
                  ? navigationItem.image === activeImage
                    ? "opacity-100"
                    : "opacity-0"
                  : activeNavigationItem.image === navigationItem.image
                  ? "opacity-100"
                  : "opacity-0",
              )}
            >
              <Image
                src={activeImage}
                fill
                alt="preview image"
                className="h-full w-full absolute inset-0 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavbarMenu;
