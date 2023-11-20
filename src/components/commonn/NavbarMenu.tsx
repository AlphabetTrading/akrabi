"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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
    image: "/images/deforestation-landing-page.jpg",
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
  // {
  //   id: 5,
  //   title: "Contact",
  //   link: "/contact",
  //   sublinks: [],
  // },
  {
    id: 6,
    title: "Deforestation",
    link: "/deforestation",
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
];

const NavbarMenu = ({ isOpen, toggleOpen }: Props) => {
  const pathname = usePathname();
  const [activeImage, setActiveImage] = useState("");
  useEffect(() => {
    setActiveImage("/images/deforestation-landing-page.jpg");
  }, []);

  return (
    <div
      // animate={isOpen ? "open" : "closed"}
      className="nav-menu fixed inset-0 z-40 -translate-y-full w-full h-screen grid grid-cols-12 items-center bg-secondary"
      // variants={navbar_variants}
    >
      <div
        className={clsx(
          "w-full flex justify-center col-span-12 lg:col-span-4 bg-secondary",
        )}
        // animate={isOpen ? "open" : "closed"}
        // variants={navbar_variants}
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
                    onMouseEnter={() => setActiveImage(navigationItem.image)}
                  >
                    <h1
                      className={clsx(
                        "uppercase font-semibold text-7xl text-white/50 hover:text-white",
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
        className="lg:flex justify-center items-center w-full h-full hidden col-span-12 lg:col-span-8 bg-primary"
      >
        <img src={activeImage} alt="" className="h-96" />
      </div>
    </div>
  );
};

export default NavbarMenu;
