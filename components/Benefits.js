import Image from 'next/image'
import graph from '../public/Icons/Graph.png'
import show from '../public/Icons/Show.png'
import shield from '../public/Icons/Shield.png'
import lock from '../public/Icons/Lock.png'
import { TextHeader } from './TextHeader'

const Card = ({ image, text, wide }) => (
    <article className={`flex overflow-x-hidden flex-col flex-grow justify-center items-center gap-8 p-8 px-4 rounded-xl shadow-inner duration-500 hover:ring bg-blueGray-50 ${wide ? "lg:col-span-5" : "lg:col-span-7"} md:p-8`}>
        <Image src={image} alt="icon" quality={90} loading="eager" draggable="false" />
        <p className="max-w-xl text-xl text-center text-gray-900">
            {text}
        </p>
    </article>
)

export default function Positives() {
    return (
        <div className="flex flex-col justify-center items-center py-16 w-full min-h-screen bg-white">
            <TextHeader>Gwarancja jakości</TextHeader>
            <div className="grid gap-8 p-4 w-full max-w-screen-2xl to-blue-500 from-sky-400 lg:grid-cols-12">
                <Card image={graph} wide text="Nasze prace projektowane są od podstaw. Gwarantuje to wydajność jak i dostępność strony. Stworzona strona zdobywa najwyższe możliwe wyniki w testach Google Lighthouse." />
                <Card image={show} text="Wszystkie strony internetowe są responsywne - projektowane tak by dostosowywać się do smartfonów, tabletów i komputerów. Ich wygląd jest zależny od urządzenia, na jakim są przeglądane." />
                <Card image={shield} text="Każda strona jest wykonana z użyciem najnowszych technologii, co przekłada się na jej bezpieczeństwo, dodatkowo strony posiadają szereg zabezpieczeń m.in. certyfikat SSL, który wymagany jest do stworzenia zaufanego wizerunku." />
                <Card image={lock} wide text="Zajmujemy się zarejestrowaniem domeny oraz serwera, na którym będzie znajdować się Twoja strona, dzięki wiedzy i doświadczeniu wybieramy wydajne oraz bezawaryjne rozwiązania. Dodatkowo każdy pakiet obejmuje konfigurację poczty na domenie Twojej strony." />
            </div>
        </div>
    )
}

