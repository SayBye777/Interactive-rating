"use client"
import Image from "next/image";
import {useState} from "react"


export default function Home() {
  const ratings = [1, 2, 3, 4, 5]

  const [rating, setRating] = useState("")
  const [submitted, setSubmitted] = useState(false)
  console.log(submitted)
    
  

  return ( 
    <div className="flex items-center justify-center min-h-screen bg-background font-overpass text-white text-[15px]">
      <main className="p-6 min-h-[400px] w-[400px] bg-gray-800 rounded-xl">
        {submitted ?(
          <article className="flex flex-col gap-8 items-center">
            <Image
              src="/illustration-thank-you.svg"
              alt="ilustration"
              width={200}
              height={100}
            />
            <p className="px-4 py-2 text-orange bg-grey900 rounded-xl">You selected {rating} of 5 </p>
            <div className="flex flex-col items-center text-center gap-4 px-2">
              <h1 className="text-4xl"> Thank you! </h1>
              <p className="text-grey500"> We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch! </p>
            </div>
              
          </article>
        
        
        ):(
            <article className="flex flex-col gap-8">
              <div className="w-[40px] h-[40px] bg-grey900 rounded-full flex justify-center items-center">
                <Image
                  src="/icon-star.svg"
                  width={15}
                  height={15}
                  alt="star"
                  className="text-center"
                                        
                />
              </div> 
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl">How did we do?</h1>
                <p className="text-grey500"> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! </p>
              </div>

              <div className="flex justify-between">
                {ratings.map((value, id)=>
                (<button key={id}
                  onClick={()=>setRating(value)}
                  className={`w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer
                            hover:bg-white hover:text-gray-800 
                            ${rating==value?"bg-orange pointer-events-none" : "bg-grey900"}`}> {value} </button>)
                )}
              
              </div>
              <button 
                onClick={() => {if(rating){ setSubmitted(true)}}} 
                className="py-2 bg-orange text-black text-center rounded-xl hover:bg-white hover:text-black cursor-pointer"> SUBMIT </button>
            </article>)}
      </main>
    </div>
  );
}
