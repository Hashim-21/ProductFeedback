'use client'

import Image from "next/image";
import emptyIllustration from '@/assets/illustration-empty.svg';
import Button from "./ui/Buttons";
 import SuggestionsIcon from '@/assets/icon-suggestions.svg';




  export function SuggestionBar () {
    return (
      <div className="flex flex-row bg-blue-darkest md:rounded-lg  pl-6 pr-4 py-[14px] mb-6 justify-between items-center ">
      <div className="flex flex-row">
        <div className="hidden md:flex flex-row mr-[38px] ">
          <Image src={SuggestionsIcon} className="mr-4" alt="icon_suggestions" />
          <h3 className="text-h3 text-white ">6 Suggestions</h3>
        </div>
        <div className="flex felx-row items-center hover:opacity-70">
          <label htmlFor="sort" className="text-blue-light text-h4 font-normal">
            Sort by :
          </label>
          <select
            id="sort"
            className="bg-blue-darkest text-blue-light text-h4 focus:outline-none hover:cursor-pointer">
            <option value={'most-vote'}>Most Upvotes</option>
            <option value={'least-vote'}>Least Upvotes</option>
            <option value={'most-comments'}>Most Comments</option>
            <option value={'least-comments'}>Least Comments</option>
          </select>
            </div>
      </div>
      <Button color={'purple'} text="+ Add Feedback" ></Button>
          </div>
    )
  }








