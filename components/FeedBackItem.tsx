import Tag from './ui/Tags';
import Image from 'next/image';


import IconComment from '@/assets/icon-comments.svg';

import Link from 'next/link';

function FeedbackItem() {
 
  
    
  
    return (
      <Link
        href='feedback/id'
        className="bg-white p-6 md:p-8 rounded-lg mb-6 flex flex-row justify-between cursor-pointer mx-6 md:mx-0"
      >
        <div className="flex flex-row">
          <div className="mr-10">
            <Tag name={2} isActive={false} isVote={true} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-h3 text-blue-dark mb-1">Add tags for solution</h3>
            <p className="text-body-1 text-blue-gray mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas laborum ab corporis nisi s!</p>
            <div className="flex flex-row">
              <Tag name='hehhe' isActive={false} />
            </div>
          </div>
          </div>
        <div className="flex flex-row justify-center items-center">
          <Image src={IconComment} className="mr-2" alt="comment" />
          <span className="text-body-1 text-blue-dark font-bold">3</span>
        </div>
        
      </Link>
    );
  }
  
  export default FeedbackItem;