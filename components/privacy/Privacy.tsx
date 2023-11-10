'use client'
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/translateSlice';

function Privacy() {

    const isSpanish = useSelector(selectLanguage);
    
    return (
        <div>
            <h1 className='font-Grotesk text-[38px] font-semibold px-2 lg:px-0'>{isSpanish ? 'Política de privacidad' : 'Privacy Policy'}</h1>
            <div className='text-[18px] space-y-5 px-2 lg:px-0'>
                <p>{isSpanish ? 'Tu privacidad es muy importante para nosotros. En consecuencia, hemos desarrollado esta Política para que comprendas cómo recopilamos, usamos, comunicamos, divulgamos y utilizamos la información personal. A continuación se describe nuestra política de privacidad.' : 'Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy.'}</p>
                <ul className='list-disc pl-7 px-2 lg:px-0'>
                    <li className="marker:text-red">{isSpanish ? 'Antes o en el momento de recopilar información personal, identificaremos los propósitos para los cuales se recopila la información.' : 'Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.'}</li>
                    <li className="marker:text-red">{isSpanish ? 'Recopilaremos y utilizaremos información personal únicamente con el objetivo de cumplir los fines especificados por nosotros y para otros fines compatibles, a menos que obtengamos el consentimiento del individuo en cuestión o según lo exija la ley.' : 'We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.'}</li>
                    <li className="marker:text-red">{isSpanish ? 'Solo conservaremos información personal el tiempo que sea necesario para el cumplimiento de dichos fines.' : 'We will only retain personal information as long as necessary for the fulfillment of those purposes.'}</li>
                    <li className="marker:text-red">{isSpanish ? 'Recopilaremos información personal por medios legales y justos y, cuando corresponda, con el conocimiento o consentimiento del individuo en cuestión.' : 'We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.'}</li>
                    <li className="marker:text-red">{isSpanish ? 'Los datos personales deben ser relevantes para los fines para los cuales se utilizarán y, en la medida necesaria para esos fines, deben ser precisos, completos y actualizados.' :'Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.'}</li>
                    <li className="marker:text-red">{isSpanish ? 'Protegeremos la información personal mediante medidas de seguridad razonables contra pérdida o robo, así como contra acceso, divulgación, copia, uso o modificación no autorizados.' : 'We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.'}</li>
                    <li className="marker:text-red">{isSpanish ? 'Pondremos a disposición de los clientes información sobre nuestras políticas y prácticas relacionadas con la gestión de información personal.' : 'We will make readily available to customers information about our policies and practices relating to the management of personal information.'}</li>
                </ul>
                <p>{isSpanish ? 'Nos comprometemos a realizar nuestro negocio de acuerdo con estos principios para garantizar que se proteja y mantenga la confidencialidad de la información personal.' : 'We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained. Drop It!'}</p>
            </div>
        </div>
    )
}

export default Privacy
