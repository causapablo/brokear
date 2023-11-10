import Link from 'next/link'

function Burbuja({ imagen, etiqueta, link }: any) {
    let long  = false;
    if(etiqueta.length > 15) long = true;
    return (
        <div className='bg-origin-border 
        rounded-full border-[3px] border-black w-[174px] h-[174px] md:w-[315px] md:h-[315px] 
        flex flex-wrap items-center mx-auto cursor-pointer relative justify-center group'>
            <Link href={link}>
                <div
                    className="absolute rounded-full left-0 top-0 w-full h-auto brightness-75 group-hover:brightness-50"
                    style={{

                        backgroundImage: `url(${imagen})`,
                        aspectRatio: "1",
                        backgroundRepeat: "no-repeat",
                        backgroundSize : "cover",
                        backgroundPositionX: "20%",
                        backgroundPositionY: "35%",
                    }}
                >

                </div>
                <div>
                    <p className={ long == true ? "uppercase text-xs md:text-[16px] text-[#D8D9DA] font-bold brightness-200 group-hover:brightness-200": "uppercase text-sm md:text-[16px] text-[#D8D9DA] font-bold brightness-200 group-hover:brightness-200"}>
                        {etiqueta}
                    </p>
                </div>

            </Link>
        </div>
    )
}

export default Burbuja
