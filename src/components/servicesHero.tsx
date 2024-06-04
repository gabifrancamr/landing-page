import { SiHotwire } from "react-icons/si";
import { FaSun } from "react-icons/fa6";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import { FaBoltLightning } from "react-icons/fa6";
import { GiLightBulb } from "react-icons/gi";
import { RiAlarmWarningFill } from "react-icons/ri";
import { PiSecurityCameraFill } from "react-icons/pi";

export default function ServicesHero() {
  const services = [
    {
      id: 1,
      link: "solar",
      icon: <FaSun className="yellow" />,
      title: "Painéis solares",
    },
    {
      id: 2,
      link: "generator",
      icon: <GiLightBulb className="yellow" />,
      title: "Geradores",
    },
    {
      id: 3,
      link: "report",
      icon: <IoNewspaper className="yellow" />,
      title: "Laudos",
    },
    {
      id: 4,
      link: "substationSpda",
      icon: <FaBoltLightning className="yellow" />,
      title: "Subestação",
    },
    {
      id: 5,
      link: "substationSpda",
      icon: <SiHotwire className="yellow" />,
      title: "SPDA",
    },
    {
      id: 6,
      link: "projects",
      icon: <MdEnergySavingsLeaf className="yellow" />,
      title: "Projetos elétricos",
    },
    {
      id: 7,
      link: "projects",
      icon: <PiSecurityCameraFill className="yellow" />,
      title: "CFTV",
    },
    {
      id: 8,
      link: "projects",
      icon: <RiAlarmWarningFill className="yellow" />,
      title: "Alarmes",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 max-w-[550px]">
      {services.map((service) => (
        <a key={service.id} href={`#${service.link}`}>
          <div className="flex items-center w-[152px] gap-2 p-1 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 md:w-[170px]">
            {service.icon}
            <span className="poppins-regular text-center text-sm md:text-base">
              {service.title}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
