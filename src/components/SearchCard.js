import React from 'react'
import moment from "moment";

export default function SearchCard({data}) {

    const { snippet} = data;
    const { title, thumbnails, channelTitle ,publishedAt,description} = snippet;

  return (
    <div className='my-4'>
        <div className='flex flex-row'>
            <div className='flex-3 3/12'>
            <img src={thumbnails?.medium?.url} className="rounded-lg w-full hover:rounded-none"/>
            </div>

            <div className='flex flex-col mx-4 flex-6 w-1/2'>
                <div>
                    <p className='text-md font-semibold text-xs md:text-sm lg:text-md'>{title}</p>
                    <p className='text-xs text-gray-600 md:mt-1 lg:mt-2'>{moment(publishedAt).fromNow()}</p>
                    <p className='text-xs text-gray-800 font-semibold md:mt-1 lg:mt-2'>{channelTitle}</p>
                </div>
                <div>
                    <p className='hidden sm:block md:text-sm lg:text-md mt-2'>{description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
