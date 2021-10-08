import { motion } from 'framer-motion'
import Image from 'next/image'
import project1 from '../public/Projects/project1.png'
import project2 from '../public/Projects/project2.png'
import project3 from '../public/Projects/project3.png'
import { TextHeader } from './TextHeader'

const Slide = ({ title, description, image, reverse, link }) => (
    <div className={`flex z-10 flex-col gap-4 px-4 pb-32 justify-between items-center  max-w-screen-2xl ${reverse ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
        <motion.a
            className="flex justify-center w-full lg:w-2/5"
            transition={{ type: "spring", bounce: 1, duration: 3, repeat: Infinity }}
            animate={{ y: [0, 10, 0] }}
            href={link} target="_blank" rel="noopener noreferrer"
        >
            <Image src={image} alt={title} loading="eager" quality={80} draggable="false" />
        </motion.a>

        <article className="flex flex-col justify-between p-8 px-4 rounded-xl shadow-lg bg-white/70 backdrop-blur-lg min-h-64 lg:max-w-2xl md:p-8">
            <a href={link} target="_blank" rel="noopener noreferrer" ><h2 className="text-3xl font-extrabold tracking-tight leading-none text-gray-800 sm:text-5xl lg:text-5xl">{title}</h2></a>
            <p className="mt-2 text-xl text-gray-600">{description}</p>
        </article>

    </div >
)

export default function Projects() {
    return (
        <div className="flex relative flex-col items-center py-16 min-h-screen bg-gradient-to-br to-blue-600 from-sky-400">
            <svg viewBox="0 0 1200 120" className="absolute top-0 left-0 -mt-px w-full">
                <path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" className="text-white fill-current" opacity=".25" />
                <path d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z" className="text-white fill-current" opacity=".5" />
                <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" className="text-white fill-current" />
            </svg>
            <svg viewBox="0 0 1200 120" className="absolute bottom-0 left-0 -mb-px w-full">
                <path opacity="0.25" d="M1200 120V73.71C1152.21 51.51 1096.41 41.54 1042 45.71C971.64 51.08 905.67 79.02 835.2 83.21C761.36 87.57 687.66 66.33 617 47.95C547.73 29.95 478.7 23.07 407.6 34.87C371.45 40.87 337.75 52.71 303.15 64.21C210.51 95 87 134.29 0 67.53V120H1200Z" fill="white" />
                <path opacity="0.5" d="M1200 120V104.19C1187 83.08 1172.36 63.14 1152.31 47.95C1100.59 8.73 1035 9 975.42 28.42C944.27 38.57 915.33 54.49 885.75 68.22C844.83 87.22 801.02 114.22 754.92 117.89C718.66 120.74 684.02 108.47 656.32 86.33C624.55 60.94 594 24.33 552.69 13.33C512.25 2.54 471.34 20.02 433.56 37.61C395.78 55.2 358.4 76.61 316.64 80.66C256.91 86.51 203.36 57.78 147.74 41.82C117.54 33.16 88.74 35.65 60.65 49.32C38.22 60.21 12.65 76.25 0 98.56V120H1200Z" fill="white" />
                <path d="M1200 120V114.37C1050.07 61 885.91 48.68 724.17 77.43C681.17 85.07 639.94 97.55 596.56 103.89C537.56 112.52 484.08 91.65 431 68.49C372.07 42.78 314 24.76 248.8 30C162.27 37 76.34 75.71 0 114.81V120H1200Z" fill="white" />
            </svg>

            <TextHeader>Współprace i realizacje</TextHeader>

            <Slide title="XLI LO Kraków" link="https://www.xlilo.krakow.pl/" image={project3} description="Strona WWW Liceum, prace polegały na przeniesieniu dokumentów z poprzedniej strony na nowy system oraz wdrożenie standardu WCAG." />
            <Slide title="Zielarnia Miejska Łąka" link="https://zielarniamiejska.pl" image={project2} description="Sklep internetowy na systemie PrestaShop, dostosowanie warstwy wizualnej oraz optymalizacja sklepu, dostosowanie produktów i koszyka." reverse />
            <Slide title="Szkoła Kobyle" link="https://szkolakobyle.edu.pl" image={project1} description="Strona WWW szkoły, prace polegały na przeniesieniu dokumentów z poprzedniej strony na nowy system oraz stworzenie nowej warstwy wizualnej strony." />

        </div >
    )
}
