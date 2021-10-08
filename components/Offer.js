import Image from 'next/image'
import www from '../public/Offer/www.svg'
import store from '../public/Offer/store.svg'
import seo from '../public/Offer/seo.svg'
import art from '../public/Offer/art.svg'
import { TextHeader } from './TextHeader'

function Card(props) {
    return (
        <div className="relative my-16 max-w-screen-2xl md:mb-32">
            <div className={`absolute inset-0 bg-gradient-to-r shadow-md -skew-y-6 sm:skew-y-0 sm:-rotate-3 sm:rounded-2xl ${props.gradient}`} />
            <div className={`absolute inset-0 m-4 bg-gradient-to-r rounded-2xl ${props.gradient}`} />

            <div className={`relative justify-around items-center gap-4 py-8 px-4 m-4 rounded-2xl shadow-md bg-white/70 backdrop-blur-xl md:flex ${props.reverse ? "md:flex-row-reverse" : ""}`}>
                <div className="w-full select-none lg:w-1/3">
                    <Image src={props.image} alt="Offer image" loading="eager" draggable="false" />
                </div>

                <article className="w-full lg:w-1/2 lg:max-w-2xl">
                    <h2 className="text-4xl font-semibold text-gray-800 lg:text-5xl">{props.title}</h2>
                    <p className="mt-4 text-xl text-gray-600">{props.description}</p>
                </article>
            </div>
        </div>
    )
}

export default function Offer() {
    return (
        <div className="flex overflow-x-hidden flex-col items-center py-16 min-h-screen bg-white" >
            <TextHeader>Co możemy dla ciebie zrobić?</TextHeader>
            <Card image={www} title="Strony WWW" description="Tworzymy dostosowane do najnowszych trendów, responsywne i zoptymalizowane strony internetowe." reverse gradient="from-orange-400 to-rose-500" />
            <Card image={store} title="Sklepy internetowe" description="Projektujemy oraz wdrażamy nowoczesne i skuteczne sklepy internetowe w systemie Saleor oraz Woocommerce." gradient="from-blue-400 to-cyan-500" />
            <Card image={seo} title="Pozycjonowanie" description="Zajmujemy się optymalizacją oraz audytem Twojej strony. Budujemy pozycję Twojej strony w wyszukiwarce Google." reverse gradient="from-purple-400 to-fuchsia-500" />
            <Card image={art} title="Projekty graficzne" description="Wykonamy logo Twojej firmy lub produktu, projekt wykonany będzie w grafice wektorowej, przystosowanej do stron internetowych i druku." gradient="from-green-400 to-cyan-500" />
        </div>
    )

}