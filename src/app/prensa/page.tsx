import Prensa from "../components/Prensa";
import Footer from "../components/Footer";
import { getManagedImageUrl } from "@/lib/managed-image-store";

export default async function PrensaPage() {
    const pressImageUrl = await getManagedImageUrl("press.feature.image");

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
                    <Prensa
                        className="w-full"
                        item={{
                            imageUrl: pressImageUrl,
                            title: "pr_title_default",
                            deck: "pr_deck_default",
                            source: "pr_source_cronica",
                            section: "pr_section_entertainment",
                            date: "pr_date_2019_05_13",
                        }}
                    />
                </div>
            </section>

            <Footer email="contacto@marcelapedrosa.com" />
        </main>
    );
}
