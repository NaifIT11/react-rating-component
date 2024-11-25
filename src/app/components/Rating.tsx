"use client";

import { Star } from "lucide-react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useState } from "react";

export default function Rating() {
  const [value , setValue] = useState<string>("A");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({value})
  };
  return (
    <div className="flex flex-col gap-4 w-3/4 md:w-1/4  p-4 rounded-md bg-slate-800 shadow-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-fit p-4 rounded-full bg-slate-700">
        <Star className="w-4 h-4 text-[#FF3800]" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl text-slate-100 font-medium">How Did we do?</h1>
        <p className="text-sm text-slate-500">
          Please let us know how we did your support request. All feedback is
          appreciated to help us imporve offering!
        </p>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <RadioGroup.Root
          className="flex justify-between"
          defaultValue={value}
          value={value}
          onValueChange={(value: string) => setValue(value)}
          aria-label="Rating Control"
        >
          <RadioGroup.Item
            value="F"
            className="flex items-center justify-center font-bold text-slate-800 p-6 h-5 rounded-full bg-slate-700 hover:bg-white data-[state=checked]:bg-[#FF3800]"
          >
            1
          </RadioGroup.Item>
          <RadioGroup.Item
            value="D"
            className="flex items-center justify-center font-bold text-slate-800 p-6 h-5 rounded-full bg-slate-700 hover:bg-white data-[state=checked]:bg-[#FF3800]"
          >
            2
          </RadioGroup.Item>
          <RadioGroup.Item
            value="C"
            className="flex items-center justify-center font-bold text-slate-800 p-6 h-5 rounded-full bg-slate-700 hover:bg-white data-[state=checked]:bg-[#FF3800]"
          >
            3
          </RadioGroup.Item>
          <RadioGroup.Item
            value="B"
            className="flex items-center justify-center font-bold text-slate-800 p-6 h-5 rounded-full bg-slate-700 hover:bg-white data-[state=checked]:bg-[#FF3800]"
          >
            4
          </RadioGroup.Item>
          <RadioGroup.Item
            value="A"
            className="flex items-center justify-center font-bold text-slate-800 p-6 h-5 rounded-full bg-slate-700 hover:bg-white data-[state=checked]:bg-[#FF3800]"
          >
            5
          </RadioGroup.Item>
        </RadioGroup.Root>
        <button type="submit" className="py-3 rounded-full font-bold uppercase bg-[#FF3800] hover:bg-slate-100">submit</button>
      </form>
    </div>
  );
}
