"use client";

import qs from "query-string";

import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface FilterProps {
  valueKey: string;
  name: string;
  data: Size[] | Color[];
}
const Filter: React.FC<FilterProps> = ({ valueKey, name, data }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const handleClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id,
    };
    if (current[valueKey] == id) query[valueKey] = null;

    const url = qs.stringifyUrl(
      { url: window.location.href, query },
      { skipNull: true }
    );
    router.push(url);
  };
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold ">{name}</h3>
      <hr className="mb-5 mt-2" />
      <div className="flex flex-wrap gap-3">
        {data.map((item) => (
          <div key={item.id} className="flex items-center">
            <button
              onClick={() => handleClick(item.id)}
              className={cn(
                "py-2 px-3 rounded-md border border-gray-400 outline-2 ",
                selectedValue == item.id
                  ? "bg-black text-white"
                  : "bg-none text-dark"
              )}
            >
              {item.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
