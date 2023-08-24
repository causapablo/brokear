import Link from "next/link";


const ProductsLanding = ({cat, img, link}: any) => {
    return (
        <div className=''>
            <Link href={link}>
                <div
                    className="hover:-translate-y-1 hover:scale-110 hover:brightness-75 duration-300 bg-origin-border 
                    rounded-full border-4 border-black w-60 h-60 flex flex-wrap items-center mx-auto cursor-pointer"
                    style={{
                        
                        backgroundImage: `url(${img})`,
                        aspectRatio: "1",
                        backgroundRepeat: "no-repeat",
                        backgroundPositionX: "20%",
                        backgroundPositionY: "40%",
                    }}
                >
                    <p className="uppercase text-[#D8D9DA] font-bold mx-auto brightness-200">
                        {cat}
                    </p>
                </div>
            </Link>
        </div>
    );
}
 
export default ProductsLanding;