import React from 'react';
import { Carousel } from "flowbite-react";

const Testimonial = () => {

    const data=[
        {name: "E-TMS", desc: "Basically, that is a Employee Training Managment System. ",  },
        {name: "KarmaBees", desc: "Basically, that is like Social Plarform to Encourage to Helps our society.",  },
        {name: "Dialer", desc: "Basically, that is a Calling Software for the sales excutive. ",  },
        {name: "CRM", desc: "Basically, That Software is helps to manage Sales Executive data.",  },
        {name: "Personal-Portfolio", desc: "That is a My Personal Responsive Portfolio.",  }
    ]

  return (
    <div className="w-screen px-6 py-[3rem] self-center text-center">
        <div className='lg:flex justify-around'>
            <div>
                <div className='self-center text-center bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent inline-block bg-clip-text text-[2.5rem] font-bold'> Testimonial </div>
                <div className='text-gray-100 text-[1rem] font-semibold'>Empowering people in new a digital journey with my super services</div>
            </div>

            {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <div className='self-center text-center bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent inline-block bg-clip-text text-[2.5rem] font-bold'> KarmaBees </div>
                    <div className='self-center text-center bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent inline-block bg-clip-text text-[2.5rem] font-bold'> KarmaBees </div>
                    <div className='self-center text-center bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent inline-block bg-clip-text text-[2.5rem] font-bold'> KarmaBees </div>
                    <div className='self-center text-center bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent inline-block bg-clip-text text-[2.5rem] font-bold'> KarmaBees </div>
                    <div className='self-center text-center bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent inline-block bg-clip-text text-[2.5rem] font-bold'> KarmaBees </div>
                </Carousel>
            </div> */}
           

                        <Carousel  slideInterval={5000} indicators={false} >
                            {data && data.map((item:any,k:any) => (
                              <div className='text-gray-100 text-[1rem] font-semibold' key={k}> {item.name}</div> 
                            ))}
                        </Carousel>
          
        </div>
    </div>
  );
}

export default Testimonial;