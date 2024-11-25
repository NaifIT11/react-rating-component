"use client";

import { Star } from "lucide-react";

export default function Rating() {
  return (
    <div className="flex flex-col gap-4 w-3/4 md:w-1/4  p-4 rounded-md bg-slate-700 shadow-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-fit p-4 rounded bg-slate-600">
        <Star className="w-4 h-4 text-[#FF3800]" />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl text-slate-100 font-medium">How Did we do?</h1>
        <p className="text-sm text-slate-00">Please let us know how we did your support request. All feedback is appreciated to help us imporve offering!</p>
      </div>
    </div>
  );
}
