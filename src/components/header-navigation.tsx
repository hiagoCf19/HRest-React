import * as ReactScroll from "react-scroll";

interface headerNavProps {
  to: string;
  label: React.ReactNode;
}
const HeaderNav = ({ to, label }: headerNavProps) => {
  const LinkScroll = ReactScroll.Link;
  return (
    <div>
      <LinkScroll
        className="text-xl text-secondary/80 font-bold uppercase font-hind hover:text-primary cursor-pointer"
        to={to}
        spy={true}
        smooth={true}
        duration={500}
      >
        {label}
      </LinkScroll>
    </div>
  );
};

export default HeaderNav;
