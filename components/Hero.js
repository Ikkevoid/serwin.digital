import Image from 'next/image'
import teamImage from '../public/hero.svg'

export default function Hero() {
    return (
        <div className="flex relative justify-evenly items-center w-full min-h-screen bg-gradient-to-r to-blue-600 from-sky-400">
            <svg viewBox="0 0 1200 120" className="absolute bottom-0 left-0 -mb-px w-full">
                <path opacity="0.25" d="M1200 120V73.71C1152.21 51.51 1096.41 41.54 1042 45.71C971.64 51.08 905.67 79.02 835.2 83.21C761.36 87.57 687.66 66.33 617 47.95C547.73 29.95 478.7 23.07 407.6 34.87C371.45 40.87 337.75 52.71 303.15 64.21C210.51 95 87 134.29 0 67.53V120H1200Z" fill="white" />
                <path opacity="0.5" d="M1200 120V104.19C1187 83.08 1172.36 63.14 1152.31 47.95C1100.59 8.73 1035 9 975.42 28.42C944.27 38.57 915.33 54.49 885.75 68.22C844.83 87.22 801.02 114.22 754.92 117.89C718.66 120.74 684.02 108.47 656.32 86.33C624.55 60.94 594 24.33 552.69 13.33C512.25 2.54 471.34 20.02 433.56 37.61C395.78 55.2 358.4 76.61 316.64 80.66C256.91 86.51 203.36 57.78 147.74 41.82C117.54 33.16 88.74 35.65 60.65 49.32C38.22 60.21 12.65 76.25 0 98.56V120H1200Z" fill="white" />
                <path d="M1200 120V114.37C1050.07 61 885.91 48.68 724.17 77.43C681.17 85.07 639.94 97.55 596.56 103.89C537.56 112.52 484.08 91.65 431 68.49C372.07 42.78 314 24.76 248.8 30C162.27 37 76.34 75.71 0 114.81V120H1200Z" fill="white" />
            </svg>

            <div className="flex relative flex-col gap-4 justify-evenly items-center p-4 py-16 max-w-screen-2xl lg:flex lg:flex-row-reverse">
                <Image src={teamImage} priority="true" alt="Hero image" draggable="false" className="select-none" />

                <article className="text-center lg:w-1/2 lg:max-w-2xl lg:text-left">
                    <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-tight text-gray-900 sm:text-5xl lg:text-8xl">Kreujemy wizerunek w internecie</h1>
                    <p className="text-xl text-gray-800 lg:text-2xl">Najważniejszy element do sukcesu Twojej firmy</p>
                </article>
            </div>


        </div>
    )
}
