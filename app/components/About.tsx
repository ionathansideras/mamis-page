import { Award, Users } from "lucide-react";

export default function About() {
    return (
        <section
            id="about"
            className="py-30 sm:py-16 md:py-30 px-5 lg:px-20 md:px-10 bg-white"
        >
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                            Apie Irinos masažo terapiją
                        </h3>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                            Esu masažo specialistė, turinti daugiau nei 6 metų
                            patirtį. Atlieku klasikinius, atpalaiduojančius bei
                            anticeliulitinius masažus. Kiekvieną klientą
                            pasitinku su rūpesčiu ir nuoširdžiu noru padėti.
                        </p>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                            Masažuotojos kelią pasirinkau vedama noro padėti
                            žmonėms jaustis geriau – tiek fiziškai, tiek
                            emociškai. Džiaugiuosi galėdama užtikrinti
                            kokybiškas ir profesionalias masažo paslaugas
                            kiekvienam.
                        </p>
                    </div>
                    <div className="space-y-4 sm:space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div className="flex items-start space-x-3">
                                <Award className="h-6 w-6 text-primary my-auto flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Specializuojuosi šiose srityse
                                    </h4>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Users className="h-6 w-6 my-auto text-primary  flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        300+ laimingų klientų
                                    </h4>
                                    {/* <p className="text-gray-600 text-sm">
                                        Successfully treated
                                    </p> */}
                                </div>
                            </div>
                        </div>
                        <div className="bg-secondary-light p-4 sm:p-6 rounded-xl">
                            <h4 className="font-semibold text-gray-900 mb-3">
                                Specializations
                            </h4>
                            <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                                <li>
                                    • Klasikinis nugaros ir viso kūno masažas
                                </li>
                                <li>
                                    • Atpalaiduojantis nugaros ir viso kūno
                                    masažas įtampos mažinimui
                                </li>
                                <li>
                                    • Anticeliulitinis masažas kūno linijų
                                    gerinimui
                                </li>
                                <li>• Kaklo, pečių ir kojų masažai</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
