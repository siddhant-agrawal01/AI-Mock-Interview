// "use client";

// import { useState, useEffect } from "react";
// import { UserButton } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const isActive = (path) =>
//     pathname === path ? "text-blue-600" : "text-gray-600";

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out z-50 ${
//         scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className=" w-full mx-auto bg-blue-100 shadow-md px-4">
//         <nav className="flex items-center justify-between py-4">
//           <Link href="/" className="flex items-center space-x-2">
//             {/* <Image
//               src="/logo.svg"
//               alt="Logo"
//               width={150}
//               height={100}
//               className="rounded-full"
//             /> */}
//             <span className="text-xl font-bold text-gray-800">
//               AI Mock Interview
//             </span>
//           </Link>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex items-center space-x-8">
//             {["Dashboard", "Questions", "Upgrade", "How it works"].map(
//               (item, index) => (
//                 <li key={index}>
//                   <Link
//                     href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
//                     className={`transition-colors duration-200 ${isActive(
//                       `/${item.toLowerCase().replace(/\s+/g, "-")}`
//                     )}`}
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               )
//             )}
//           </ul>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={
//                   menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
//                 }
//               />
//             </svg>
//           </button>
//         </nav>

//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden fixed top-0 left-0 w-full h-full bg-white transition-transform duration-300 ease-in-out ${
//             menuOpen ? "transform translate-x-0" : "transform -translate-x-full"
//           }`}
//         >
//           <nav className="flex flex-col items-center py-8">
//             {["Dashboard", "Questions", "Upgrade", "How it works"].map(
//               (item, index) => (
//                 <Link
//                   key={index}
//                   href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
//                   className={`py-2 px-4 w-full text-center transition-colors duration-200 ${isActive(
//                     `/${item.toLowerCase().replace(/\s+/g, "-")}`
//                   )}`}
//                   onClick={toggleMenu}
//                 >
//                   {item}
//                 </Link>
//               )
//             )}
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";

import { useState, useEffect } from "react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "../../../../components/ThemeSwitch";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => pathname === path;

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Questions", path: "/questions" },
    { name: "Upgrade", path: "/upgrade" },
    { name: "How it works", path: "/how-it-works" }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      // className={`fixed top-0 left-0 w-full z-50  transition-all duration-300 ${
      //   scrolled 
      //     ? "bg-gray-100 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg" 
      //     : "bg-transparent"
      // }`}
      className=" top-0 left-0 w-full z-50  transition-all duration-300 "
        
    >
      <div className="max-w-7xl shadow-xl bg-blue-50 dark:bg-gray-900/80 mt-6 rounded-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0.5 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs md:text-sm">MI</span>
              </div>
            </div>
            <motion.span 
              className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Mockster
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <ul className="flex items-center">
              {menuItems.map((item, index) => (
                <motion.li key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={item.path}
                    className={`relative px-4 py-2 mx-1 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {isActive(item.path) && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-full"
                        style={{ borderRadius: 9999 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            <div className="ml-4 flex items-center space-x-3">
              <ThemeSwitcher />
              <UserButton afterSignOutUrl="/" />
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeSwitcher />
            <UserButton afterSignOutUrl="/" />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <motion.span
                  className="absolute h-0.5 w-6 bg-current rounded-full"
                  animate={{ 
                    top: menuOpen ? "50%" : "30%", 
                    rotate: menuOpen ? 45 : 0,
                    translateY: menuOpen ? "-50%" : 0
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
                <motion.span
                  className="absolute h-0.5 w-6 bg-current rounded-full top-1/2 -translate-y-1/2"
                  animate={{ opacity: menuOpen ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
                <motion.span
                  className="absolute h-0.5 w-6 bg-current rounded-full"
                  animate={{ 
                    top: menuOpen ? "50%" : "70%", 
                    rotate: menuOpen ? -45 : 0,
                    translateY: menuOpen ? "-50%" : 0
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
              <nav className="flex flex-col space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive(item.path)
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;