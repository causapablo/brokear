import React from 'react';
import Sidebarblog from '../../../components/sidebarblog/Sidebarblog';
import PrivacyComponent from '../../../components/privacy/Privacy';

function layout({ children } : any) {
    return (
        <section className='bg-gradient-to-b from-lightPink to-white'>
            <div className='container mx-auto max-w-[1300px] pt-[45px] mb-12'>
                <div className='flex flex-col lg:flex-row gap-32'>
                    <div id='content' className='basis-3/4 leading-loose'>
                        {children}
                    </div>
                    <div id='sidebar' className='basis-4/12'>
                        <Sidebarblog />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default layout
