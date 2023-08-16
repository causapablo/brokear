import React from 'react'

function Burbuja({ imagen, etiqueta }: any) {
    return (
        <div className=''>
            <div
                className="hover:-translate-y-1 hover:scale-110 duration-300 bg-origin-border rounded-full 
                border-4 border-black w-72 h-72 flex flex-wrap items-center mx-auto cursor-pointer hover:brightness-75"
                style={{
                    
                    backgroundImage: `url(${imagen})`,
                    aspectRatio: "1",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "20%",
                    backgroundPositionY: "35%",
                }}
            >
                <p className="uppercase text-[#bebfc1] font-bold mx-auto brightness-200">
                    {etiqueta}
                </p>
            </div>
        </div>
    )
}

export default Burbuja
