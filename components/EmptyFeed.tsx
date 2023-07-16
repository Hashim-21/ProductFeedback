import Image from "next/image"
import emptyIllustration from "@/assets/illustration-empty.svg";


export function EmptyCard () {
    return (
      <div className="bg-white rounded-lg flex flex-col items-center justify-center mx-6 md:mx-0 mb-6">
    <div className="py-[76px] md:py-[110px] w-[410px]">
      <Image src={emptyIllustration} className="w-[129px] m-auto" alt="not_found" />
      <div className="mt-14 text-center">
        <h1 className="text-h1 text-blue-dark mb-4">There is no feedback yet.</h1>
        <p className="text-blue-gray text-body-1 mb-12">
          Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas
          to improve our app.
        </p>
        <button className="bg-purple px-4 py-2 font-bold text-white-dark rounded-lg text-sm leading-tight">+ Add Feeback</button>
      </div>
      </div>
      </div>
)

}