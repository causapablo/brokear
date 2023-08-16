import React from "react";
import Link from "next/link";
import News from "../news/News";
import jsonNews from '../../public/news.json';
import { BsArrowRight } from "react-icons/bs";

const Articles = () => {
    return (
        <section className="container mx-auto max-w-[1300px] py-16">
            <div className="flex justify-between">
                <div className="">
                    <h4 className="bg-red text-white font-semibold w-fit text-center px-1 py-1">LATEST ARTICLES</h4>
                </div>
                <div className="">
                    <Link href="/productos">
                        <div className="flex justify-center">
                            <p className="text-red font-semibold hover:underline-offset-4 cursor-pointer hover:text-lightRed">View All Articles</p>
                            <p className="pt-1 pl-3 text-red cursor-pointer"><BsArrowRight className="font-bold hover:text-lightRed" /></p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
                {
                    jsonNews.map((item, index) => (
                        <div key={index} className="py-3">
                            <News urlImagen={item.url} titulo={item.titulo} />
                        </div>

                    ))
                }
            </div>
        </section>
    );
}

export default Articles;