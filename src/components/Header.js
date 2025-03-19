import { IconHome, IconInfoCircle, IconUser, IconMessage, IconHelpCircle } from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";

const Header = () => {

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About Us",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    { 
      name: "Who Should Join", 
      link: "/join", 
      icon: <IconInfoCircle size={24} stroke={1.5} /> 
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    { 
      name: "FAQ", 
      link: "/faq", 
      icon: <IconHelpCircle size={24} stroke={1.5} /> 
    },
  ];

  return (
    <div className="">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export function FloatingNavDemo() {
 
  return (
    <div className="relative  w-full">
      
      <DummyContent />
    </div>
  );
}

export default Header;
