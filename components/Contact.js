import { AnimatePresence, motion } from "framer-motion"
import { MailIcon, PhoneIcon, UserCircleIcon, CheckIcon } from '@heroicons/react/solid'
import { TextHeader } from "./TextHeader"
import { useState } from "react"


export default function Contact() {
    const inputBoxStyle = "mt-2 mb-6 text-gray-400 rounded-md shadow-inner duration-300 outline-none focus-within:text-gray-600 focus-within:ring-2 bg-white/50 relative"
    const inputStyle = "py-4 pl-12 w-full bg-transparent appearance-none text-gray-700 focus:outline-none"
    const inputIconBoxStyle = "flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
    const [sent, setSent] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                apikey: "7f1126ee-40cc-4fb4-a128-b7c49b7a0388",
                subject: "Serwin.digital - nowa wiadomość",
                "Imię": e.target.name.value,
                from_name: e.target.name.value,
                "Email": e.target.email.value,
                "Telefon": e.target.phone.value,
                "Wiadomość": e.target.message.value,
            }),
        })
        const result = await response.json()
        if (result.success) {
            setSent(true)
        }
    }

    return (
        <div className="flex relative flex-col justify-center items-center py-16 px-4 min-h-screen bg-gradient-to-br to-blue-600 shadow-inner from-sky-400">
            <svg viewBox="0 0 1200 120" className="absolute top-0 left-0 -mt-px w-full">
                <path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" fill="white" opacity=".25" className="text-white fill-current" />
                <path d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z" fill="white" opacity=".5" className="text-white fill-current" />
                <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" className="text-white fill-current" />
            </svg>

            <TextHeader>Skontaktuj się z nami</TextHeader>

            <div className="flex z-10 flex-col gap-4 mb-8 w-full max-w-2xl md:mb-0">

                <div className="flex flex-col gap-4 md:flex-row">
                    <motion.a href="tel:737 323 900"
                        className="flex flex-col flex-1 justify-center items-center p-4 font-medium text-gray-700 rounded-xl shadow-md transition bg-white/70 backdrop-blur-lg"
                        whileTap={{ scale: .95 }}
                    >
                        <PhoneIcon className="mb-2 w-8 h-8 drop-shadow-md" />
                        <p>737 323 900</p>
                    </motion.a>

                    <motion.a href="mailto:kontakt@serwin.digital"
                        className="flex flex-col flex-1 justify-center items-center p-4 font-medium text-gray-700 rounded-xl shadow-md transition bg-white/70 backdrop-blur-lg"
                        whileTap={{ scale: .95 }}
                    >
                        <MailIcon className="mb-2 w-8 h-8 drop-shadow-md" />
                        <p>kontakt@serwin.digital</p>
                    </motion.a>
                </div>

                <form className="flex overflow-hidden flex-col p-8 px-4 rounded-xl shadow-md bg-white/70 backdrop-blur-lg md:p-16" onSubmit={handleSubmit}>

                    <input type="checkbox" name="botcheck" className="hidden" />

                    <label htmlFor="formName" className="text-gray-600">Imię i nazwisko</label>
                    <div className={inputBoxStyle}>
                        <div className={inputIconBoxStyle}>
                            <UserCircleIcon className="w-6 h-6 fill-current" />
                        </div>
                        <input className={inputStyle}
                            name="name"
                            id="formName"
                            placeholder="Imię i nazwisko"
                            required
                        />
                    </div>

                    <label htmlFor="formEmail" className="text-gray-600">Email</label>
                    <div className={inputBoxStyle}>
                        <div className={inputIconBoxStyle}>
                            <MailIcon className="w-6 h-6 fill-current" />
                        </div>
                        <input className={inputStyle}
                            type="email"
                            name="email"
                            id="formEmail"
                            placeholder="Email"
                            required
                        />
                    </div>

                    <label htmlFor="formPhone" className="text-gray-600">Telefon</label>
                    <div className={inputBoxStyle}>
                        <div className={inputIconBoxStyle}>
                            <PhoneIcon className="w-6 h-6 fill-current" />
                        </div>
                        <input className={inputStyle}
                            type="tel"
                            name="phone"
                            id="formPhone"
                            placeholder="Telefon"
                            required
                        />
                    </div>

                    <label htmlFor="formMessage" className="text-gray-600">Wiadomość</label>
                    <textarea
                        className="p-4 mt-2 mb-6 h-56 text-gray-700 rounded-md shadow-inner duration-300 outline-none resize-y bg-white/50 focus:ring-2"
                        type="text"
                        name="message"
                        id="formMessage"
                        placeholder="Wiadomość"
                        required
                    />

                    <motion.button
                        className="self-end p-4 max-w-xs font-bold text-blue-500 rounded-md ring shadow-md transition focus:outline-none focus:ring-blue-500"
                        type="submit"
                        whileTap={{ scale: .95 }}
                    >
                        Wyślij wiadomość
                    </motion.button>

                    <AnimatePresence>
                        {sent ?
                            <motion.div className="flex absolute inset-0 justify-center items-center bg-gradient-to-tr to-blue-300 from-sky-200"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}>
                                <CheckIcon aria-label="wysłano wiadomość" className="w-32 text-xl text-gray-700" />
                            </motion.div> : ""}
                    </AnimatePresence>
                </form>
            </div>
        </div >
    )
}
