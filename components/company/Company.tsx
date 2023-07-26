import Wave from '../../public/icons/Wave'


const Company = () => {
  return (
    <section className="pt-0">
      <Wave />
      <div className="bg-lightPink ">
        <div className="container mx-auto">
          <h4 className="bg-red text-white uppercase text-2xl w-40 text-center font-semibold">
            La empresa
          </h4>
          <p className="pt-10 container text-justify font-base text-xl">
            En Brokear Productos & Servicios Argentina, ayudamos a los
            importadores y exportadores de todo el mundo a operar de manera
            segura, generando confianza desde el comienzo de la coordinación
            hasta la entrega a nuestros clientes, asumiendo el desafío
            permanente de cumplir con los más altos estándares de calidad
            internacional, agregando valor a nuestros productos en cada uno de
            nuestros procesos.
          </p>
        </div>
      </div>

    </section>
  );
}

export default Company;