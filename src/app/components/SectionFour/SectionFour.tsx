import { SectionFour, SectionFourContent, SectionConteiner } from './styles';
import Image from "next/image";


export default function SectionFourComponent() {
    return (
        <SectionFour>
            <SectionConteiner>
                <Image
                    className='img_left'
                    src="/images/img_left.jfif" // Caminho da imagem na pasta public
                    alt="Imagem section four"
                    width={500} // Largura da imagem
                    height={300} // Altura da imagem
                />

                <SectionFourContent>
                    <p>
                        LVF_Code is a software company focused on delivering the best value to its customers. We work with the best professionals and developers in the country.
                        Our specialty is web development using the best cutting-edge technologies. We have extensive experience in all types of technology products such as e-commerce, e-learning, systems for your company and process automation.
                    </p>
                </SectionFourContent>
            </SectionConteiner>

            <SectionConteiner>             
                <SectionFourContent>
                    <p>
                        We work for small and large companies; we have a variety of services ranging from project development lifecycle from scratch, legacy project recovery, outsourcing, and so on.
                        If you want to have not only a good web application in production but also improve your software processes and quality assurance, we can help.
                    </p>
                </SectionFourContent>
                <Image
                    className='img_left'
                    src="/images/img_right.jfif" // Caminho da imagem na pasta public
                    alt="Imagem section four"
                    width={500} // Largura da imagem
                    height={300} // Altura da imagem
                />
            </SectionConteiner>
        </SectionFour>


    );
}