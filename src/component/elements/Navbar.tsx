export const NavBar = () => {
  // create an array for different links and title
  const navitems = [
    {
      href: "#",
      text: "Home",
    },
    {
      href: "#",
      text: "Services",
    },
    {
      href: "#",
      text: "About Me",
    },
    {
      href: "#",
      text: "Features",
    },
  ];
  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6"></header>
  )
};

export default NavBar;
