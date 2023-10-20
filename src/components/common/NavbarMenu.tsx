import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type Props = {
  isOpen: boolean;
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
    sublinks: [],
  },
  {
    id: 2,
    title: "About",
    link: "/",
    sublinks: [],
  },
  {
    id: 3,
    title: "Producers",
    link: "/",
    sublinks: [],
  },
  {
    id: 4,
    title: "Offerings",
    link: "/",
    sublinks: [],
  },
  {
    id: 5,
    title: "Contact",
    link: "/",
    sublinks: [],
  },
  {
    id: 6,
    title: "Resources",
    link: "/",
    sublinks: [
      {
        id: 1,
        title: "Traceability",
        link: "/",
      },
      {
        id: 2,
        title: "Transparency",
        link: "/",
      },
      {
        id: 3,
        title: "Deforestation",
        link: "/",
      },
    ],
  },
];

const NavbarMenu = ({ isOpen }: Props) => {
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className="absolute inset-0 w-full h-screen grid grid-cols-12 items-center"
      variants={navbar_variants}
    >
      <motion.div
        className={clsx(
          "w-full flex justify-center col-span-12 lg:col-span-4 bg-secondary",
        )}
        animate={isOpen ? "open" : "closed"}
        variants={navbar_variants}
      >
        <motion.ul className="w-3/4 flex flex-col justify-center gap-y-6">
          {navigationItems.map((navigationItem: any, index: number) => {
            return (
              <motion.li
                variants={menuitem_variants}
                className="list-none"
                key={index}
              >
                <div>
                  <Link href={navigationItem.link} title={navigationItem.title}>
                    <h1
                      className={clsx(
                        "uppercase font-semibold text-7xl text-white/50 hover:text-white",
                        //  active ? "line-through" : ""
                      )}
                    >
                      {navigationItem.title}
                    </h1>
                  </Link>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={navbar_variants}
        className="w-full h-full hidden lg:block col-span-12 lg:col-span-8 bg-primary"
      ></motion.div>
    </motion.div>
  );
};

export default NavbarMenu;
