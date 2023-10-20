import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import NavbarMenu from "./NavbarMenu";

type Props = {};

const Path = (props: any) => (
  <motion.path
    fill={props.color}
    strokeWidth="3"
    stroke={props.color}
    strokeLinecap="round"
    {...props}
    className="flex flex-col items-center"
  />
);

const menuitem_parent_variants = {
  open: {
    height: "100%",
  },
  closed: {
    height: 0,
  },
};

const Navbar = (props: Props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <AnimatePresence>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuitem_parent_variants}
        className="fixed w-full items-center"
      >
        <button
          className="flex flex-col items-center justify-center outline-none border-none cursor-pointer absolute top-3 right-4 w-12 h-12 bg-transparent rounded-full z-[100]"
          onClick={() => {
            toggleOpen();
          }}
        >
          <div className="sr-only">Menu</div>
          {isOpen ? (
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-4 h-4"
              viewBox="0 0 21 21"
            >
              <path
                d="M1.02556 20.9998C0.822736 20.9998 0.624454 20.9397 0.455797 20.827C0.287141 20.7143 0.155687 20.5542 0.0780629 20.3668C0.000439235 20.1794 -0.0198669 19.9732 0.0197132 19.7743C0.0592932 19.5754 0.156981 19.3926 0.300421 19.2492L19.2493 0.300364C19.4416 0.108044 19.7025 0 19.9744 0C20.2464 0 20.5073 0.108044 20.6996 0.300364C20.8919 0.492684 20.9999 0.753526 20.9999 1.02551C20.9999 1.29749 20.8919 1.55833 20.6996 1.75065L1.75071 20.6995C1.65557 20.7949 1.54253 20.8705 1.41809 20.922C1.29365 20.9735 1.16025 20.9999 1.02556 20.9998Z"
                fill="black"
              />
              <path
                d="M19.9744 20.9998C19.8397 20.9999 19.7063 20.9735 19.5819 20.922C19.4574 20.8705 19.3444 20.7949 19.2492 20.6995L0.300364 1.75065C0.108044 1.55833 0 1.29749 0 1.02551C0 0.753526 0.108044 0.492684 0.300364 0.300364C0.492684 0.108044 0.753526 0 1.02551 0C1.29749 0 1.55833 0.108044 1.75065 0.300364L20.6995 19.2492C20.843 19.3926 20.9406 19.5754 20.9802 19.7743C21.0198 19.9732 20.9995 20.1794 20.9219 20.3668C20.8443 20.5542 20.7128 20.7143 20.5441 20.827C20.3755 20.9397 20.1772 20.9998 19.9744 20.9998Z"
                fill="black"
              />
            </svg>
          ) : (
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-6 h-4"
              viewBox="0 0 42 17"
            >
              <line
                y1="1.25"
                x2="41.25"
                y2="1.25"
                stroke="black"
                strokeWidth="1.5"
              />
              <line
                y1="8.75"
                x2="24.375"
                y2="8.75"
                stroke="black"
                strokeWidth="1.5"
              />
              <line
                y1="16.25"
                x2="33.75"
                y2="16.25"
                stroke="black"
                strokeWidth="1.5"
              />
            </svg>
          )}
        </button>
        <NavbarMenu isOpen={isOpen} />
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
