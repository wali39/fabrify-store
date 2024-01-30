"use client";
import { Billboard as BillboardType } from "@/types";
interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden ">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover  lg:max-h-96 mx-auto"
        style={{
          backgroundImage: `url(${data?.imageUrl})`,
          backgroundColor: "#C0C0C0	",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className=" text-gray-300 font-bold text-3xl sm:text-5xl sm:max-w-xl lg:text-6xl  max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
