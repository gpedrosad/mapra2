import Prensa from "../components/Prensa";
import Footer from "../components/Footer";

export default function PrensaPage() {
    return (
        <main className="min-h-screen bg-transparent">
            <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
                <header className="mb-6 sm:mb-10">
                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
                        Prensa
                    </h1>
                    <p className="mt-2 text-sm sm:text-base text-zinc-700 max-w-2xl">
                        Recortes, entrevistas y menciones destacadas.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-6">
                    <Prensa className="w-full" />
                </div>
            </section>

            <Footer email="contacto@marcelapedrosa.com" />
        </main>
    );
}