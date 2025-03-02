import NextImage from "@/components/NextImage";
import {
  Github,
  BadgeCheck,
  Linkedin,
  Newspaper,
  MapPin,
  Calendar,
} from "lucide-react";

import CustomButton from "@/components/CustomButton";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="bg-[#EBF4FF] relative w-full border-b border-black px-4 py-8 flex flex-col justify-center items-center">
        <div className="flex gap-2 justify-center items-center">
          <p className="font-medium text-[12px]">Your web alchemist</p>
          <NextImage
            src="/hero/eye.png"
            alt="eye"
            width={300}
            height={300}
            className="w-6"
          />
        </div>
        <div className="flex gap-1 justify-center items-center">
          <div className="flex gap-1 justify-center items-center">
            <p className="font-medium text-[12px]">Performance</p>
            <NextImage
              src="/hero/daisy.png"
              alt="daisy"
              width={300}
              height={300}
              className="w-8"
            />
          </div>
          <p className="font-medium text-[12px]">and a Bit of</p>
        </div>
        <div className="flex justify-center mt-1 items-center gap-1">
          <div className="flex justify-center items-center gap-1">
            <NextImage
              src="/hero/orange-flower.png"
              alt="flower orange"
              width={300}
              height={300}
              className="w-8"
            />
            <p className="font-medium text-[12px]">Frontend</p>
          </div>
          <div className="bg-gray-700 ml-1 z-10 py-[1px] px-4 rounded-full transform -rotate-3 relative">
            <p className="font-medium text-[12px]">Sorcery</p>
            <div className=" bg-[#E1CBF9]  absolute -top-[13%] -left-[2.3%] z-0 py-[1px] px-4 rounded-full -rotate-1 ">
              <p className="font-medium text-[12px]">Sorcery</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 items-center gap-1">
          <CustomButton text="Click Me!" />
        </div>

        <NextImage
          src="/hero/phone.png"
          alt="phone"
          width={300}
          height={300}
          className="w-6 absolute z-50 top-[14%] left-[14%]"
        />

        <NextImage
          src="/hero/star-pink.png"
          alt="star"
          width={300}
          height={300}
          // layout="intrinsic"
          className="w-4 absolute bottom-[10%] left-[4%]"
        />
        <NextImage
          src="/hero/sparkle-pink.png"
          alt="sparkle"
          width={300}
          // layout="intrinsic"
          height={300}
          className="w-4 absolute top-[13%] right-[10%]"
        />
        <NextImage
          src="/hero/finger.png"
          alt="finger"
          width={300}
          height={300}
          // layout="intrinsic"
          className="w-6 absolute top-[43%] right-[4%]"
        />
        <NextImage
          src="/hero/purple-flower.png"
          alt="flower purple"
          width={300}
          height={300}
          // layout="intrinsic"
          className="w-4 absolute bottom-[7%] right-[24%]"
        />

        {/* Avatar */}
        <div className="w-24 h-24 rounded-full absolute -bottom-[20%] left-[4%] bg-[#FDE3F9] border border-black">
          <NextImage
            src="/account/me.png"
            alt="nadia lovely"
            width={300}
            height={300}
            className="w-full"
          />
        </div>
      </div>
      <div className="border w-full bg-[#FFFDEE] ">
        <div className="flex justify-end gap-1">
          <CustomButton
            icon={<Newspaper size={14} />}
            bgColor="bg-white"
            hoverBgColor="bg-gray-100"
            href="https://www.google.com"
            padding="p-0 w-6 h-6"
          />
          <CustomButton
            icon={<Linkedin size={14} />}
            bgColor="bg-white"
            hoverBgColor="bg-gray-100"
            href="https://www.google.com"
            padding="p-0 w-6 h-6"
          />
          <CustomButton
            icon={<Github size={14} />}
            bgColor="bg-white"
            hoverBgColor="bg-gray-100"
            href="https://www.google.com"
            padding="p-0 w-6 h-6"
          />
        </div>
        <div className="flex flex-col justify-start items-start p-4">
          <div className="flex justify-start items-center gap-1">
            <p className="font-semibold text-[12px]">
              Nadia | Frontend Developer
            </p>
            <BadgeCheck color="#71AFF9" size={16} />
          </div>
          <div className="bg-[#D6C9E6] rounded-full py-[2px] px-2 mt-1">
            <p className="text-[8px] text-gray-700 font-semibold">
              @nadialovely
            </p>
          </div>
          <p className="text-[10px] mt-3 mb-4">
            An aspiring frontend developer, currently learning backend and
            devops too 😁
          </p>
          <div className="flex justify-start items-start gap-3">
            <div className="flex justify-start items-center gap-1">
              <MapPin size={10} color="#536471" />
              <p className="text-[10px] font-regular">Surabaya, East Java</p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <Calendar size={10} color="#536471" />
              <p className="text-[10px] font-regular">Joined June 2023</p>
            </div>
          </div>
          <div className="flex justify-start items-start gap-4 mt-1">
            <p className="text-[10px] font-regular">
              <span className="text-[10px] font-semibold">1.2k</span> Following
            </p>
            <p className="text-[10px] font-regular">
              <span className="text-[10px] font-semibold">4.8k</span> Followers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
