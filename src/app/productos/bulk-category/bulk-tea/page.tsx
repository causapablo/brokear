import Link from "next/link";

const BulkTea = () => {
  return (
    <main className="bg-gradient-to-b from-lightPink to-white">
      <section className="container mx-auto max-w-[1300px] pt-14 ">
        <h4 className="bg-red text-white w-fit px-1 text-lg">Bulk Tea</h4>
        <p className="w-7/12 pt-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          suscipit eveniet nemo sed numquam unde officia vero. Voluptatum amet
          quas quam similique, qui facilis. Illo sit similique omnis numquam
          rem.
        </p>
        <div className="flex pt-8 pb-20 pl-40 justify-center flex-wrap">
          <Link href="/productos/bulk-tea">
            <div
              className=" bg-origin-border rounded-full border-4 border-black w-72 h-72 
              flex flex-wrap items-center mx-auto cursor-pointer hover:brightness-75"
              style={{
                backgroundImage: `url(/images/tea.jpg)`,
                aspectRatio: "1",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "20%",
                backgroundPositionY: "35%",
              }}
            >
              <p className="uppercase text-[#bebfc1] font-bold mx-auto brightness-200">
                learn more
              </p>
            </div>
          </Link>
          <div
            className=" bg-origin-border rounded-full 
                        border-4 border-black w-72 h-72 flex flex-wrap items-center mx-auto cursor-pointer hover:brightness-75"
            style={{
              backgroundImage: `url(/images/tea.jpg)`,
              aspectRatio: "1",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "20%",
              backgroundPositionY: "35%",
            }}
          >
            <p className="uppercase text-[#bebfc1] font-bold mx-auto brightness-200">
              learn more
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BulkTea;
