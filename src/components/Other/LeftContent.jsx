import { Download } from "lucide-react";

const LeftContent = () => {
    return (
        <div className="flex w-full flex-col justify-center bg-black px-6 py-12 font-mono-custom sm:px-10 sm:py-16 md:w-1/2 md:px-10 lg:px-16 xl:px-20">
            <h2 className="text-sm font-bold uppercase tracking-wider text-pink-200 sm:text-base">Kanishk Pratap</h2>
            <h3 className="mt-3 mb-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Hi, I'm KANISHK<br />
                <span className="text-2xl text-[#f05a93] sm:text-3xl">I'm a Developer|</span></h3>
            <p className="max-w-2xl text-sm font-bold leading-relaxed text-gray-400 sm:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident dignissimos rem quam nisi expedita ratione voluptatum facere magnam hic, quia debitis asperiores dolorem iusto ipsum, id laboriosam ipsa aspernatur.</p>
            <div className="flex items-center">
                <button className="mt-8 flex items-center gap-3.5 rounded-full bg-[#F62F7A] px-7 py-3.5 font-bold text-white sm:mt-10 sm:px-8 sm:py-4"> <Download size={18} />Download CV</button>
            </div>
        </div>
    );
}

export default LeftContent;
