import React from 'react'
import Sidebarblog from '../../../components/sidebarblog/Sidebarblog'
function Privacy() {
    return (
        <section className='bg-gradient-to-b from-lightPink to-white'>
            <div className='container mx-auto max-w-[1300px] pt-[45px] mb-12'>
                <div className='flex flex-row gap-32'>
                    <div id='terms and conditions' className='basis-3/4 leading-loose'>
                        <h1 className='font-Fitgree text-[38px] font-semibold'>Privacy Policy</h1>
                        <div className='text-[18px] space-y-5'>
                            <p>Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy.</p>
                            <ul className='list-disc pl-7'>
                                <li className="marker:text-red">Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.</li>
                                <li className="marker:text-red">We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.</li>
                                <li className="marker:text-red">We will only retain personal information as long as necessary for the fulfillment of those purposes.</li>
                                <li className="marker:text-red">We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</li>
                                <li className="marker:text-red">Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.</li>
                                <li className="marker:text-red">We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.</li>
                                <li className="marker:text-red">We will make readily available to customers information about our policies and practices relating to the management of personal information.</li>
                            </ul>
                            <p>We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.</p>
                        </div>
                    </div>
                    <div id='sidebar' className='basis-4/12'>
                        <Sidebarblog />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Privacy
