import Link from "next/link";


const ProductsLanding = ({ cat, img, link }: any) => {
    return (
        <div className='bg-origin-border 
        rounded-full border-[3px] border-black w-[305px] h-[305px] 
        flex flex-wrap items-center mx-auto cursor-pointer relative justify-center'>
            <Link href={link}>
                <div
                    className="absolute rounded-full left-0 top-0 w-full h-auto brightness-75 hover:brightness-50"
                    style={{

                        backgroundImage: `url(${img})`,
                        aspectRatio: "1",
                        backgroundRepeat: "no-repeat",
                        backgroundPositionX: "20%",
                        backgroundPositionY: "40%",
                    }}
                >

                </div>
                <div className="">
                    <p className="uppercase text-[#D8D9DA] font-bold brightness-200">
                        {cat}
                    </p>
                </div>

            </Link>
        </div>
    );
}

export default ProductsLanding;