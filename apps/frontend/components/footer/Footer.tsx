import Link from "next/link";
import { useTranslations } from "next-intl";
import Subscribe from "../subscribe/subscribe";

export default function Footer() {
    const t = useTranslations("footer");
    
    return (
        <footer className="flex items-center justify-center w-full h-auto ">
            <div className="border border-gray-100 border-dashed rounded-2xl md:rounded-3xl">
                <div className=" bg-[#0fff77]  bg-[radial-gradient(150%_100%_at_50%_0,#FFFFFF_0,#FFFFFF_0.41%,#ffffff00_29%,#ff700a_69.27%)] rounded-2xl md:rounded-3xl w-[96vw] p-6 md:p-28 items-center justify-center flex gap-6 flex-col md:flex-row">
                    <div className="info border p-3 rounded-2xl flex flex-col justify-center w-[100%] md:w-1/2">
                        
                        <Link className="text-grey-black text-base leading-[1.5rem] font-poppins cursor-pointer font-semibold hover:font-bold hover:text-active-white"  href={'/'}>Bitcoin Famba</Link>
                     
                        <p>
                            {t("description")}{" "}

                            <abbr
                                className="cursor-help underline decoration-dotted"
                                title={`${t("meaning.maputo")} \n${t("meaning.matola")} \n${t("meaning.region")} \n${t("meaning.bitcoin_famba")}`}
                            >
                                <strong>Maputo Matola</strong>
                            </abbr>{" "}

                            {t("description_plus")}
                        </p>

                        <Subscribe/>
                    </div>
                    <div className="social-link border p-3 rounded-2xl flex flex-col justify-center md:w-1/2">
                        
                        
                    </div>
                
            </div>
            </div>
            
        </footer>
    );
}


