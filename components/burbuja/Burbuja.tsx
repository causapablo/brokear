import React from 'react'

function Burbuja({ imagen, etiqueta }: any) {
    return (
        <div className=''>
            <div
                className="hover:-translate-y-1 hover:scale-110 duration-300 bg-origin-border rounded-full border-4 border-black w-60 h-60 flex flex-wrap items-center mx-auto cursor-pointer"
                style={{
                    
                    backgroundImage: `url(${imagen})`,
                    aspectRatio: "1",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "20%",
                    backgroundPositionY: "40%",
                }}
            >
                <p className="uppercase text-[#D8D9DA] font-bold mx-auto brightness-200">
                    {etiqueta}
                </p>
            </div>
        </div>
    )
}

export default Burbuja
