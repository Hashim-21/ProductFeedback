import SideBar from "@components/SideBar"
import { SuggestionBar } from "@components/SuggestionBar"
import FeedbackItem from "@components/FeedBackItem"
import { EmptyCard } from "@components/EmptyFeed"
export default function Home() {
  return (
    <div className="flex lg:flex-row flex-col justify-center md:py-14 md:px-10 lg:py-[94px]">
        <SideBar />
        <div className="w-full lg:max-w-[825px]">
          <SuggestionBar />
          {/* <EmptyCard /> */}
          <FeedbackItem />
        </div>
    </div>

  )
}


