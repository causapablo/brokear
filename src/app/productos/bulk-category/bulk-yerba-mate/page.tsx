import Link from "next/link";

const BulkYerbaMate = () => {
  return (
    <main>
      <section>
        <h4>Bulk Yerba Mate</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          suscipit eveniet nemo sed numquam unde officia vero. Voluptatum amet
          quas quam similique, qui facilis. Illo sit similique omnis numquam
          rem.
        </p>
        <div className="flex">
            <Link href="/productos/bulk-yerba">
                <div
                  className=" bg-origin-border rounded-full 
                            border-4 border-black w-72 h-72 flex flex-wrap items-center mx-auto cursor-pointer hover:brightness-75"
                  style={{
                    backgroundImage: `url(/images/yerba.png)`,
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
                backgroundImage: `url(/images/yerba.png)`,
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
            <div
              className=" bg-origin-border rounded-full 
                        border-4 border-black w-72 h-72 flex flex-wrap items-center mx-auto cursor-pointer hover:brightness-75"
              style={{
                backgroundImage: `url(/images/yerba.png)`,
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
            <div
              className=" bg-origin-border rounded-full 
                        border-4 border-black w-72 h-72 flex flex-wrap items-center mx-auto cursor-pointer hover:brightness-75"
              style={{
                backgroundImage: `url(/images/yerba.png)`,
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

export default BulkYerbaMate;
