import React from 'react'

import ButtonInvert from './ButtonInvert'


const Contact = () => {
  return (
    <div name='contact'>
    <div className='bg-[var(--primary-1)] mt-24 w-[90%] mx-auto'>
        <div className='flex pl-12 pt-12'>
            <div className='md:basis-2/3'>
            <h1 className='lg:text-left text-4xl lg:text-5xl'>Reach out!</h1>
            <div className='flex flex-col gap-5 mt-12'>
                <input type="text" placeholder='your name' className='w-[150%] md:w-[80%]'/>
                <input type="email" placeholder='your email' className='w-[150%] md:w-[80%]'/>
                <textarea rows='5' placeholder="what's on your mind?" className='w-[150%] md:w-[80%]'/>
            </div>

            <div className='mt-4 mb-12'>
              <ButtonInvert text='send' />
            </div>

            </div>
            <img src="https://s3-alpha-sig.figma.com/img/ed05/e2b7/31f2f54a5c79f7c0827faf183dfbdda0?Expires=1676246400&Signature=mKuOzKMfxLwFfv5VGaBuv8WUt6SseEODzhPadLZT4MzDeprHjkl0Pmxnaco0V5ZB5TvBb~5oZ985J-NpkF9oyet9XDBoKOZq5xl972b3aOMmvLcNxuxNa88oKmeGFjE0hUQSVawijLaOI99i8LmAJJsIEfm4vn0byLvMtnSICsz2WmfdnfexyMlbg7oHQdcmKaKFajg8QJOiAEjgIQzD5eJ9ZZy6pHJpXh6vxC6KLAYfbkFy~oCZ~SpWEZkTczmrDHiKh~F8ciXJyX0IURHacEzZ1xbLYufu0w0OjHXh4ZiEX6SKEYWJuKFzFumqnMK1epPdT8pxn7oW2Ub4fKqIfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='px-12 my-12 hidden md:block' alt="my floating head" />
        </div>
    </div>
    <img src="https://s3-alpha-sig.figma.com/img/ed05/e2b7/31f2f54a5c79f7c0827faf183dfbdda0?Expires=1676246400&Signature=mKuOzKMfxLwFfv5VGaBuv8WUt6SseEODzhPadLZT4MzDeprHjkl0Pmxnaco0V5ZB5TvBb~5oZ985J-NpkF9oyet9XDBoKOZq5xl972b3aOMmvLcNxuxNa88oKmeGFjE0hUQSVawijLaOI99i8LmAJJsIEfm4vn0byLvMtnSICsz2WmfdnfexyMlbg7oHQdcmKaKFajg8QJOiAEjgIQzD5eJ9ZZy6pHJpXh6vxC6KLAYfbkFy~oCZ~SpWEZkTczmrDHiKh~F8ciXJyX0IURHacEzZ1xbLYufu0w0OjHXh4ZiEX6SKEYWJuKFzFumqnMK1epPdT8pxn7oW2Ub4fKqIfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className='mx-auto my-12 md:hidden' alt="my floating head" />
    </div>
  )
}

export default Contact