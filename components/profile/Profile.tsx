import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
import profilePic from '../../public/images/profile.jpg'

function Profile() {
    return (
        <div className='flex flex-col'>
            <div id='header' className='flex mb-4'>
                <div id='profilePicture'>
                    <Image
                        src={profilePic}
                        alt="img"
                        className="rounded-full w-36 h-36 border-4 border-orange"
                    />
                </div>
                <div id='info' className='flex flex-col justify-center gap-3 ml-5'>
                    <h5 className="bg-red text-white w-fit px-2 py-1 text-center font-Dancing uppercase">
                        lorem ipsu
                    </h5>
                    <p className='font-semibold'>Chief Operating Officer</p>
                    <Link href='#'><BiLogoLinkedinSquare className='text-red text-[25px]'/></Link>
                </div>
            </div>
            <div id='body' className='space-y-6 text-[17px] font-Figtree font-medium'>
                <p>A New Jersey native, Aalap moved with his parents to their
                    hometown in India. He spent his college years working in the
                    local textile manufacturing sector.
                </p>
                <p>
                In 2015, he moved back to Jersey to join Carlo’s Bake Shop. He
                then spent time at Marley Spoon. Here he was tasked with
                building out a just-in-time vendor model to support their
                explosive growth.
                </p>
                <p>
                In 2017, Aalap joined Eran at Nuts.com, where he worked to
                re-energize their highest-performing product categories and
                drove significant margin improvements and SKU expansion.
                </p>
                <p>
                In 2020, Aalap took an opportunity to run operations for Simply
                Gum. He successfully navigated through COVID and the
                aftereffect, having to rapidly double capacity as they launched
                their products into Target and other major retail chains.
                </p>
                <p>
                <span className='font-semibold'>Fun Fact:</span> Aalap has a passion for vintage British motorcycles,
                gardening & woodworking
                </p>
            </div>
        </div>
    )
}

export default Profile
