import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

export default function NewFestivals() {
    return (
        <>
            <Header />
            <main className="mx-auto px-4 py-8 w-full h-screen bg-teal-950">
                <div className="flex items-center justify-between mb-6">
                    <Link to="/festivals" className="text-sm px-3 py-2 rounded-lg border">Volver</Link>
                    <h1 className="font-semibold text-xl">Nuevo festival</h1>
                    <span></span>
                </div>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div >
                        <label className="block text-neutral-700 mb-1">Nombre</label>
                        <input placeholder="Nombre del festival" className="w-full px-3 py-2 rounded-lg border" />
                    </div>
                    <div>
                        <label className="block text-neutral-700 mb-1">Ciudad</label>
                        <input placeholder="Ciudad" className="w-full px-3 py-2 rounded-lg border" />
                    </div>

                    <div>
                        <label className="block text-neutral-700 mb-1">Breve descripción</label>
                        <input placeholder="Descripción" className="w-full px-3 py-2 rounded-lg border" />
                    </div>
                    <div>
                        <label className="block text-neutral-700 mb-1">Precio (€)</label>
                        <input placeholder="Precio desde (€)" className="w-8.5  px-3 py-2 rounded-lg border" />
                        <input placeholder="Precio hasta (€)" className="w-8.5 px-3 py-2 rounded-lg border" />
                    </div>
                    <div>
                        <label className="block text-neutral-700 mb-1">Fecha inicio</label>
                        <input type="date" className="w-full px-3 py-2 rounded-lg border" />
                    </div>
                    <div>
                        <label className="block text-neutral-700 mb-1">Fecha fin</label>
                        <input type="date" className="w-full px-3 py-2 rounded-lg border" />
                    </div>

                    <div className="sm:col-span-2 flex items-center gap-3 mt-2">
                        <button className="px-4 py-2 rounded-lg bg-neutral-900 text-white">Guardar</button>
                        <button type="reset" className="px-4 py-2 rounded-lg border">Limpiar</button>
                    </div>
                </form>
            </main>
            <Footer />
        </>
    )
}