import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Nav(){

    const t = useTranslations("menu");

    return(
        <nav>

            {t.markup((link)=>(
                <div className="flex gap-2 items-center relative">
                    <Link className="text-grey-black font-normal text-base leading-[1.5rem] font-poppins cursor-pointer hover:font-semibold hover:text-active-white" target="_blank" href="https://devday.btrust.tech">{t()}</Link>
                </div>
            ))

            }


        </nav>
    );
}