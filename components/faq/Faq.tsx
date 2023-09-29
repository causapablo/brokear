import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const Faq = () => {
  return (
    <section className="container mx-auto max-w-[1300px] px-3">
      <div className="lg:p-4 bg-peach mt-14 lg:w-10/12 mx-auto rounded-sm">
        <div id="header" className="p-4 lg:p-0">
          <h4 className="uppercase bg-red text-white font-semibold text-lg w-fit px-1 font-Dancing">FAQS</h4>
        </div>
        <div id="content">
          <Accordion sx={{ backgroundColor: "#b3d9be" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: "600" }}>
                Can I request samples of ingridients before making a wholesale
                purchase?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes. At Brokear P&S Argentina we take great pride in the exceptional
                quality of our products. As a trusted bulk wholesale supplier, we
                prioritize quality throughout our processes. As part of our
                stringent quality control measures, we offer the option to send
                samples for thorough specification checks. By sending samples, we
                allow you to assess the quality, specifications, and suitability of
                our products for your specific needs. This process helps us
                guarantee that you receive the finest products that align with your
                requirements.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#b3d9be" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: "600" }}>
                Do you offer any guarantees or warranties on the quality of the
                ingridients?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                As a reliable wholesale supplier, we prioritize the quality of our
                products. We work closely with our suppliers to ensure that each
                item meets stringent quality standards. From the sourcing stage to
                the final delivery, we take meticulous care and guarantee the
                integrity of every product.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#b3d9be" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: "600" }}>
                Are there any restrictions or limitations on shipping wholesale
                ingridient orders?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We take great pride in our extensive capabilities as a wholesale
                supplier. With our vast network of reliable sources, we can fulfill
                bulk orders without any limitations. We understand the importance of
                providing our customers with a wide range of options, and that’s why
                we have established strong relationships with numerous suppliers
                worldwide. This allows us to cater to different industries and meet
                the specific requirements of our customers. Whether you need
                products in large quantities or specialized items, we have the
                flexibility to accommodate your needs. Our logistics network enables
                us to handle bulk shipments with ease. We can consolidate multiple
                containers and ensure smooth transportation from the point of origin
                to your desired destination in a timely and cost-effective delivery.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#b3d9be" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: "600" }}>
                Can I customize or personalize my wholesale ingridient order?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, you can! At Brokear P&S Argentina we specialize in wholesale
                sourcing and building long-term relationships with our clients.
                Hence, w adapt our products to meet specific requirements and can
                accommodate packaging preferences and shipping frequency.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#b3d9be" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: "600" }}>
                What is the process for returning or exchanging wholesale ingridient
                purchases?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We’ve got our post-purchase support team that’s here to give our
                customers VIP treatment whenever they need it, even after they’ve
                received their product! We’ve got your back, always.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#b3d9be" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: "600" }}>
                Do you provide documentation or certifications for the ingridients,
                such as organic or non-GMO?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, we pride ourselves on our ability to source a wide range of
                certifications tailored to your company’s needs. Whether you require
                certifications such as Organic, Non-GMO, Kosher, Halal, or any
                additional ones, we are your trusted wholesale supplier. Our
                extensive network of reliable suppliers enables us to fulfill bulk
                orders while ensuring that the products meet your specific
                certification requirements. We understand the importance of offering
                certified products to meet the demands of discerning customers so we
                go the extra mile to adhere to the highest quality standards and
                certifications.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#b3d9be" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: "600" }}>
                Can I place recurring orders for wholesale ingridients?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, we build forecasting programs with our clients to help them
                predict the demand they’ll have, so they can make their purchases in
                a recurring and secure manner.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#b3d9be" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: "600" }}>
                How can I contact costumer support or seek assistence with my
                wholesale ingridient order?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Absolutely! We’re here to assist you with your wholesale ingredient
                order. If you have any questions, need assistance, or would like to
                speak with our team, please don’t hesitate to get in touch with us.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>


    </section>
  );
};

export default Faq;
