import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import instagram from "/assets/Instagram.png";
import whatsapp from "/assets/whatsapp.png";

export function ContactInfo() {
  return (
    <div className="space-y-5 md:space-y-5">
      <div>
        <a
          href="https://api.whatsapp.com/send/?phone=5599985204456&text&type=phone_number&app_absent=0"
          target="_blank"
          className=""
        >
          <div className="flex gap-2 items-center poppins-regular mt-1 hover:underline text-sm md:text-lg">
            <img src={whatsapp} alt="logo do whatsapp" className="w-[24px] h-[24px]" />
            (99)98520-4456
          </div>
        </a>
      </div>

      <div>
        <a
          href="https://www.instagram.com/gamma.engthe/"
          target="_blank"
          className="flex gap-2 items-center poppins-regular hover:underline text-sm md:text-lg"
        >
          <img src={instagram} alt="logo do instagram" className="w-[24px] h-[24px]" />
          @gamma.engthe
        </a>
      </div>

      <div className="flex gap-2 items-center poppins-regular text-sm md:text-lg">
        <MdEmail size={24} className="text-cyan-600" />
        <span>gamma.engthe@gmail.com</span>
      </div>

      <div className="flex gap-2 items-center poppins-regular text-sm md:text-lg">
        <FaLocationDot size={24} className="text-red-700" />
        <span>Piauí</span>
      </div>
    </div>
  );
}
