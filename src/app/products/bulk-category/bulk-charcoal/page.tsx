import Link from "next/link";
import React from "react";

const BulkCharcoal = () => {
  return (
    <main className="bg-gradient-to-b from-lightPink to-white">
      <section className="container mx-auto max-w-[1300px] pt-14 ">
        <div id="header">
          <div className="py-3">
            <h4 className="bg-red text-white w-fit px-2 py-1 text-lg font-Dancing">Bulk Charcoal</h4>
          </div>
          <div className="flex flex-row">
            <p className="basis-2/3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
              suscipit eveniet nemo sed numquam unde officia vero. Voluptatum amet
              quas quam similique, qui facilis. Illo sit similique omnis numquam
              rem.
            </p>
            <div className="basis-1/4">

            </div>
          </div>
        </div>


        <div id="container" className="pt-16 pb-10">
          <div className="bg-origin-border 
                          rounded-full border-[3px] border-black w-[305px] h-[305px] 
                          flex flex-wrap items-center mx-auto cursor-pointer relative justify-center">
            <Link href="/products/bulk-category/bulk-charcoal/charcoal">
              <div
                className="absolute rounded-full left-0 top-0 w-full h-auto brightness-75 hover:brightness-50"
                style={{
                  backgroundImage: `url(/images/carbon.jpg)`,
                  aspectRatio: "1",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "20%",
                  backgroundPositionY: "35%",
                }}
              >

              </div>
              <p className="uppercase text-[#bebfc1] font-bold mx-auto brightness-200">
                learn more
              </p>
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
};

export default BulkCharcoal;
