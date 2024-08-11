import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Title from "../ui/Title";
import { IoLogoWhatsapp } from "react-icons/io5";

const Contact = () => {
    return ( 
        <section className="contact relative py-8 bg-[#979795] flex flex-col items-center" id="contact">
            <Title>Contact</Title>
            <ul className="flex gap-16 py-8 px-8">
                <li data-aos='fade-up' data-aos-duration='1000' data-aos-offset='20' className="p-2 rounded-xl bg-[#4267B2] hover:bg-slate-50 text-slate-50 hover:text-[#4267B2] duration-500">
                    <a href="https://www.facebook.com/mohamed.elsaket.5" target="_blank">
                        <FaFacebook className="text-lg md:text-4xl" />
                    </a>
                </li>
                <li data-aos='fade-up' data-aos-duration='1000' data-aos-offset='20' className="p-2 rounded-xl bg-slate-950 hover:bg-slate-50 text-slate-50 hover:text-slate-950 duration-500">
                    <a href="https://github.com/MohamedElsaket" target="_blank">
                     <FaGithub className="text-lg md:text-4xl" />
                    </a>
                </li>
                <li data-aos='fade-up' data-aos-duration='1500' data-aos-offset='20' className="p-2 rounded-xl bg-[#E1306C] hover:bg-slate-50 text-slate-50 hover:text-[#E1306C] duration-500">
                    <a href="https://www.instagram.com/elsaket__/" target="_blank">
                        <FaInstagram className="text-lg md:text-4xl" />
                    </a>
                </li>
                <li data-aos='fade-up' data-aos-duration='2000' data-aos-offset='20' className="p-2 rounded-xl bg-[#25D366] hover:bg-slate-50 text-slate-50 hover:text-[#25D366] duration-500">
                    <a href="https://wa.me/2001030848281" target="_blank">
                        <IoLogoWhatsapp className="text-lg md:text-4xl" />
                    </a>
                </li>
            </ul>
        </section>
     );
}
 
export default Contact;