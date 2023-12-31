import React from 'react'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
import Link from 'next/link'
import ExportedImage from "next-image-export-optimizer";

function Team({ img, nombre, cargo, bio }: any) {
    return (
        <div className='flex flex-col'>
            <div id='header' className='flex mb-4'>
                <div id='profilePicture'>
                    <ExportedImage
                        src={img}
                        alt="img"
                        className="rounded-full w-36 h-36 border-4 border-red object-cover"
                        width={200} height={200}
                    />
                </div>
                <div id='info' className='flex flex-col justify-center gap-3 ml-5'>
                    <h5 className="bg-red text-white w-fit px-2 py-1 text-center font-Dancing uppercase">
                        {nombre}
                    </h5>
                    <p className='font-semibold'>{cargo}</p>
                    {/* <Link href='#'><BiLogoLinkedinSquare className='text-red text-[25px]' /></Link> */}
                </div>
            </div>
            <div id='body' className='space-y-6 text-[17px] font-Figtree font-medium'>
                <p>
                    {
                        bio
                    }
                </p>
            </div>
        </div>
    )
}

export default Team
