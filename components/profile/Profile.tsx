import Link from 'next/link'
import React from 'react'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
import ExportedImage from "next-image-export-optimizer";

function Profile({ img, nombre, cargo, bio, funFact }: any) {
    let biopic = [];
    const text = bio;
    biopic = text.split(";")

    return (
        <div className='flex flex-col'>
            <div id='header' className='flex mb-4'>
                <div id='profilePicture'>
                    <ExportedImage
                        src={img}
                        alt="img"
                        className="rounded-full w-36 h-36 border-4 border-orange object-cover"
                        width={200} height={200}
                    />
                </div>
                <div id='info' className='flex flex-col justify-center gap-3 ml-5'>
                    <h5 className="bg-red text-white w-fit px-2 py-1 text-center font-Grotesk uppercase font-medium">
                        {nombre}
                    </h5>
                    <p className='font-semibold'>{cargo}</p>
                    {/* <Link href="#"><BiLogoLinkedinSquare className='text-red text-[25px]' /></Link> */}
                </div>
            </div>
            <div id='body' className='space-y-3 md:space-y-4 md:text-[18px] font-Grotesk text-[17px]  font-medium'>

                {
                    biopic.map((par: string, i: any) => (
                        <p className='indent-2 text-justify'>
                            {
                                par
                            }
                        </p>
                    ))
                }
                <p className='font-Grotesk'>
                    <span className='font-bold'>Fun fact:</span> {funFact}
                </p>
            </div>
        </div>
    )
}

export default Profile
