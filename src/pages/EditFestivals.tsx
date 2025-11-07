import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

export default function EditFestivals() {
    return (
        <>
            <Header />
            <main className="mx-auto px-4 py-8 bg-yellow-950 w-full h-screen">
                <Link to="/festivals" className="text-sm px-3 py-2 rounded-lg border">Volver</Link>
                <div className="max-w-5xl mx-auto h-16 px-4 flex items-center justify-center"><h1 className="font-semibold">Guardar festival</h1></div>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <input placeholder="Nombre" className="px-3 py-2 rounded-lg border" />
                    <input placeholder="Ciudad" className="px-3 py-2 rounded-lg border" />
                    <input type="date" className="px-3 py-2 rounded-lg border" />
                    <input type="date" className="px-3 py-2 rounded-lg border" />
                    <input placeholder="Precio desde (€)" className="px-3 py-2 rounded-lg border" />
                    <select className="px-3 py-2 rounded-lg border"><option>Estado: Borrador</option><option>Publicado</option></select>
                    <div className="sm:col-span-2">
                        <label className="block text-neutral-600 mb-1">Descripción</label>
                        <textarea rows={4} className="w-full px-3 py-2 rounded-lg border"></textarea>
                    </div>

                </form>
                <div className="sm:col-span-2 flex items-center gap-3 mt-2">
                    <button className="px-4 py-2 rounded-lg bg-neutral-900 text-white">Guardar</button>
                </div>
            </main>
            <Footer />
        </>
    )
}