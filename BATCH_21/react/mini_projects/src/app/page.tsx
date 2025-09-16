import Image from "next/image";
import { AlarmClockPlus } from "lucide-react";
import { FaAnchorLock } from "react-icons/fa6";
import { LockKeyholeOpenIcon } from "@/components/ui/lock-keyhole-open";

export default function Home() {
  return (
    <div>
      <div
        className="flex flex-wrap
"
      >
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Doraemon_character.png/250px-Doraemon_character.png"
          }
          // src={"/icons/menu-2-svgrepo-com (1).svg"}
          width={250}
          height={304}
          alt="Doraemon"
          className="bg-red-500 rounded-xs"
        />
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Doraemon_character.png/250px-Doraemon_character.png"
          }
          // src={"/icons/menu-2-svgrepo-com (1).svg"}
          width={250}
          height={304}
          alt="Doraemon"
        />
        <Image
          src={"https://ssl.gstatic.com/gb/images/bar/al-icon.png"}
          // src={"/icons/menu-2-svgrepo-com (1).svg"}
          width={30}
          height={30}
          alt="Doraemon"
          className="invert"
        />
        <AlarmClockPlus className="w-80 h-80 text-red-500" />
        <AlarmClockPlus className="w-80 h-80 text-red-500" />
        <AlarmClockPlus className="w-80 h-80 text-red-500" />
        <AlarmClockPlus className="w-80 h-80 text-red-500" />
        <FaAnchorLock className="w-80 h-80 text-green-500" />

        <LockKeyholeOpenIcon size={80} />
      </div>
    </div>
  );
}
