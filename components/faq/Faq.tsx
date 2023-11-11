'use client'
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../src/redux/translateSlice';


const Faq = () => {

  const isSpanish = useSelector(selectLanguage);

  return (
    <section className="container mx-auto max-w-[1300px] px-3">
      <div className="lg:p-4 bg-peach mt-14 lg:w-10/12 mx-auto rounded-sm">
        <div id="header" className="p-4 lg:p-0">
          <h4 className="uppercase bg-red text-white font-semibold text-lg w-fit px-1 font-Dancing">FAQS</h4>
        </div>
        <div id="content">
          <Accordion sx={{ backgroundColor: "#b3d9be", borderRadius:"10px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: "600" }}>
                {isSpanish ? '¿Puedo solicitar muestras de ingredientes antes de realizar una compra mayorista?' : 'Can I request samples of ingridients before making a wholesale purchase?'}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor:"#FCDDB0", borderBottomLeftRadius : "10px" ,borderBottomRightRadius : "10px"}}>
              <Typography>
                {isSpanish ? 'Sí. En Brokear P&S Argentina estamos muy orgullosos de la calidad excepcional de nuestros productos. Como proveedor mayorista de confianza, priorizamos la calidad en todos nuestros procesos. Como parte de nuestras estrictas medidas de control de calidad, ofrecemos la opción de enviar muestras para realizar comprobaciones exhaustivas de las especificaciones. Al enviar muestras, le permitimos evaluar la calidad, las especificaciones y la idoneidad de nuestros productos para sus necesidades específicas. Este proceso nos ayuda a garantizar que recibas los mejores productos que se ajusten a tus necesidades.' : 'Yes. At Brokear P&S Argentina we take great pride in the exceptional quality of our products. As a trusted bulk wholesale supplier, we prioritize quality throughout our processes. As part of our stringent quality control measures, we offer the option to send samples for thorough specification checks. By sending samples, we allow you to assess the quality, specifications, and suitability of our products for your specific needs. This process helps us guarantee that you receive the finest products that align with your requirements.'}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#b3d9be", borderRadius:"10px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: "600" }}>
                {isSpanish ? '¿Ofrecen garantías sobre la calidad de los ingredientes?' : 'Do you offer any guarantees or warranties on the quality of the ingridients?'}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor:"#FDE5D4", borderBottomLeftRadius : "10px" ,borderBottomRightRadius : "10px"}}>
              <Typography>
                {isSpanish ? 'Como proveedor mayorista confiable, priorizamos la calidad de nuestros productos. Trabajamos en estrecha colaboración con nuestros proveedores para garantizar que cada artículo cumpla con estrictos estándares de calidad. Desde la etapa de abastecimiento hasta la entrega final, cuidamos meticulosamente y garantizamos la integridad de cada producto.' : 'As a reliable wholesale supplier, we prioritize the quality of our products. We work closely with our suppliers to ensure that each item meets stringent quality standards. From the sourcing stage to the final delivery, we take meticulous care and guarantee the integrity of every product.'}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#b3d9be", borderRadius:"10px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: "600" }}>
                {isSpanish ? '¿Existen restricciones o limitaciones en el envío de pedidos de ingredientes al por mayor?' : 'Are there any restrictions or limitations on shipping wholesale ingridient orders?'}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor:"#FDE5D4", borderBottomLeftRadius : "10px" ,borderBottomRightRadius : "10px"}}>
              <Typography>
                {isSpanish ? 'Estamos muy orgullosos de nuestras amplias capacidades como proveedor mayorista. Con nuestra amplia red de fuentes confiables, podemos cumplir con pedidos al por mayor sin ninguna limitación. Entendemos la importancia de brindarles a nuestros clientes una amplia gama de opciones y es por eso que hemos establecido relaciones sólidas con numerosos proveedores en todo el mundo. Esto nos permite atender a diferentes industrias y cumplir con los requisitos específicos de nuestros clientes. Ya sea que necesite productos en grandes cantidades o artículos especializados, tenemos la flexibilidad para satisfacer sus necesidades. Nuestra red logística nos permite manejar envíos a granel con facilidad. Podemos consolidar múltiples contenedores y garantizar un transporte fluido desde el punto de origen hasta el destino deseado en una entrega oportuna y rentable.' : 'We take great pride in our extensive capabilities as a wholesale supplier. With our vast network of reliable sources, we can fulfill bulk orders without any limitations. We understand the importance of providing our customers with a wide range of options, and that’s why we have established strong relationships with numerous suppliersworldwide. This allows us to cater to different industries and meet the specific requirements of our customers. Whether you need products in large quantities or specialized items, we have the flexibility to accommodate your needs. Our logistics network enables us to handle bulk shipments with ease. We can consolidate multiple containers and ensure smooth transportation from the point of origin to your desired destination in a timely and cost-effective delivery.'}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#b3d9be", borderRadius:"10px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: "600" }}>
                {isSpanish ? '¿Puedo personalizar mi pedido de ingredientes al por mayor?' : 'Can I customize or personalize my wholesale ingridient order?'}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor:"#FDE5D4", borderBottomLeftRadius : "10px" ,borderBottomRightRadius : "10px"}}>
              <Typography>
                {isSpanish ? '¡Sí podes! En Brokear P&S Argentina nos especializamos en abastecimiento mayorista y en construir relaciones de largo plazo con nuestros clientes. Por lo tanto, adaptamos nuestros productos para cumplir con requisitos específicos y podemos adaptarnos a las preferencias de embalaje y la frecuencia de envío.' : 'Yes, you can! At Brokear P&S Argentina we specialize in wholesale sourcing and building long-term relationships with our clients. Hence, w adapt our products to meet specific requirements and can accommodate packaging preferences and shipping frequency.'}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#b3d9be", borderRadius:"10px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: "600" }}>
                {isSpanish ? '¿Cuál es el proceso para devolver o cambiar compras de ingredientes al por mayor?' : 'What is the process for returning or exchanging wholesale ingridient purchases?'}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor:"#FDE5D4", borderBottomLeftRadius : "10px" ,borderBottomRightRadius : "10px"}}>
              <Typography>
                {isSpanish ? 'Contamos con nuestro equipo de soporte post-compra que está aquí para brindarles a nuestros clientes un trato VIP cuando lo necesiten, ¡incluso después de haber recibido su producto! Te respaldamos, siempre.' : 'We’ve got our post-purchase support team that’s here to give our customers VIP treatment whenever they need it, even after they’ve received their product! We’ve got your back, always.'}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#b3d9be", borderRadius:"10px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: "600" }}>
                {isSpanish ? '¿Proporcionan documentación o certificaciones para los ingredientes, como orgánicos o no transgénicos?' : 'Do you provide documentation or certifications for the ingridients, such as organic or non-GMO?'}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor:"#FDE5D4", borderBottomLeftRadius : "10px" ,borderBottomRightRadius : "10px"}}>
              <Typography>
                {isSpanish ? 'Sí, nos enorgullecemos de nuestra capacidad para obtener una amplia gama de certificaciones adaptadas a las necesidades de su empresa. Ya sea que necesite certificaciones como Orgánica, Sin OGM, o cualquier otra adicional, somos su proveedor mayorista de confianza. Nuestra amplia red de proveedores confiables nos permite cumplir con pedidos al por mayor y al mismo tiempo garantizar que los productos cumplan con sus requisitos de certificación específicos. Entendemos la importancia de ofrecer productos certificados para satisfacer las demandas de los clientes más exigentes, por lo que hacemos un esfuerzo adicional para cumplir con los más altos estándares y certificaciones de calidad.' : 'Yes, we pride ourselves on our ability to source a wide range of certifications tailored to your company’s needs. Whether you require certifications such as Organic, Non-GMO, or any additional ones, we are your trusted wholesale supplier. Our extensive network of reliable suppliers enables us to fulfill bulk orders while ensuring that the products meet your specific certification requirements. We understand the importance of offering certified products to meet the demands of discerning customers so we go the extra mile to adhere to the highest quality standards and certifications.'}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#b3d9be", borderRadius:"10px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: "600" }}>
              {isSpanish ? '¿Puedo realizar pedidos recurrentes de ingredientes al por mayor?' : 'Can I place recurring orders for wholesale ingridients?'}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor:"#FDE5D4", borderBottomLeftRadius : "10px" ,borderBottomRightRadius : "10px"}}>
              <Typography>
                {isSpanish ? 'Sí, creamos programas de pronóstico con nuestros clientes para ayudarlos a predecir la demanda que tendrán, para que puedan realizar sus compras de manera recurrente y segura.' : 'Yes, we build forecasting programs with our clients to help them predict the demand they’ll have, so they can make their purchases in a recurring and secure manner.'}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#b3d9be", borderRadius:"10px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: "600" }}>
                {isSpanish ? '¿Cómo puedo comunicarme con atención al cliente o buscar ayuda con mi pedido de ingredientes al por mayor?' : 'How can I contact costumer support or seek assistence with my wholesale ingridient order?'}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor:"#FDE5D4", borderBottomLeftRadius : "10px" ,borderBottomRightRadius : "10px"}}>
              <Typography>
                {isSpanish ? '¡Absolutamente! Estamos aquí para ayudarte con tu pedido de ingredientes al por mayor. Si tienes alguna pregunta, necesitas ayuda o deseas hablar con nuestro equipo, no dudes en ponerte en contacto con nosotros.' : 'Absolutely! We’re here to assist you with your wholesale ingredient order. If you have any questions, need assistance, or would like to speak with our team, please don’t hesitate to get in touch with us.'}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>


    </section>
  );
};

export default Faq;
