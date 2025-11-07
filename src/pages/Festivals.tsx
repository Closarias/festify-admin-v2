import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import { Link } from "react-router-dom";

export default function Festivals() {
    return (
        <>
            <Header />
            <main className="mx-auto px-4 py-12 bg-purple-950">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                    <div>
                        <h1 className="text-2xl font-extrabold">Festivales</h1>
                        <p className="text-sm">Crea y gestiona eventos.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input id="search" placeholder="Buscar por nombre/ciudad" className="px-3 py-2 rounded-lg border w-64" />
                        <Link to="/new-festivals" className="px-3 py-2 rounded-lg bg-purple-500 text-white text-sm">Nuevo festival</Link>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <span>Resultados:</span>
                        <span id="result-count" className="font-medium" aria-live="polite">9</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="sort">Ordenar</label>
                        <select id="sort" className="px-2 py-1 rounded border">
                            <option value="title-asc">Título (A–Z)</option>
                            <option value="title-desc">Título (Z–A)</option>
                            <option value="start-asc">Fecha inicio (asc)</option>
                            <option value="start-desc">Fecha inicio (desc)</option>
                            <option value="start-asc">Precio desde (asc)</option>
                            <option value="start-desc">Precio desde (desc)</option>
                        </select>
                    </div>
                </div>

                <section id="grid" className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <article data-festival data-name="SunWave Fest" data-city="Barcelona" data-start="2025-07-12" data-end="2025-07-14"
                        className="rounded-xl border p-4 hover:shadow-sm transition shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
                        <div className="flex items-start justify-between gap-3">
                            <header>
                                <h3 className="text-lg font-semibold">SunWave Fest</h3>
                                <p className="mt-1 text-sm text-neutral-600">Música alternativa</p>
                            </header>
                            <span className="inline-flex items-center justify-center text-xs font-semibold px-2 py-1 rounded-full bg-neutral-100 border text-neutral-900">
                                JUL 2025
                            </span>
                        </div>

                        <dl className="mt-4 space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">🗓️</dt>
                                <dd>12 Jul 2025 — 14 Jul 2025</dd>
                            </div>
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">📍</dt>
                                <dd>Barcelona</dd>
                            </div>
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">💶</dt>
                                <dd>85€ - 120€</dd>
                            </div>
                        </dl>

                        <div className="mt-4 flex items-center justify-end gap-2">
                            <Link to="/edit-festivals" className="px-2 py-1 rounded border bg-purple-500">Editar</Link>
                            <button className="px-2 py-1 rounded border text-red-700">Eliminar</button>
                        </div>
                    </article>

                    <article data-festival data-name="SunWave Fest" data-city="Barcelona" data-start="2025-07-12" data-end="2025-07-14"
                        className="rounded-xl border p-4 hover:shadow-sm transition shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
                        <div className="flex items-start justify-between gap-3">
                            <header>
                                <h3 className="text-lg font-semibold">SunWave Fest</h3>
                                <p className="mt-1 text-sm text-neutral-600">R&B , Trap</p>
                            </header>
                            <span className="inline-flex items-center justify-center text-xs font-semibold px-2 py-1 rounded-full bg-neutral-100 border text-neutral-900">
                                JUL 2025
                            </span>
                        </div>

                        <dl className="mt-4 space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">🗓️</dt>
                                <dd>12 Jul 2025 — 14 Jul 2025</dd>
                            </div>
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">📍</dt>
                                <dd>Barcelona</dd>
                            </div>
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">💶</dt>
                                <dd>85€ - 120€</dd>
                            </div>
                        </dl>

                        <div className="mt-4 flex items-center justify-end gap-2">
                            <Link to="/edit-festivals" className="px-2 py-1 rounded border bg-purple-500">Editar</Link>
                            <button className="px-2 py-1 rounded border text-red-700">Eliminar</button>
                        </div>
                    </article>

                    <article data-festival data-name="SunWave Fest" data-city="Barcelona" data-start="2025-07-12" data-end="2025-07-14"
                        className="rounded-xl border p-4 hover:shadow-sm transition shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
                        <div className="flex items-start justify-between gap-3">
                            <header>
                                <h3 className="text-lg font-semibold">SunWave Fest</h3>
                                <p className="mt-1 text-sm text-neutral-600">Pop 90's</p>
                            </header>
                            <span className="inline-flex items-center justify-center text-xs font-semibold px-2 py-1 rounded-full bg-neutral-100 border text-neutral-900">
                                JUL 2025
                            </span>
                        </div>

                        <dl className="mt-4 space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">🗓️</dt>
                                <dd>12 Jul 2025 — 14 Jul 2025</dd>
                            </div>
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">📍</dt>
                                <dd>Barcelona</dd>
                            </div>
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">💶</dt>
                                <dd>85€ - 120€</dd>
                            </div>
                        </dl>

                        <div className="mt-4 flex items-center justify-end gap-2">
                            <Link to="/edit-festivals" className="px-2 py-1 rounded border bg-purple-500">Editar</Link>
                            <button className="px-2 py-1 rounded border text-red-700">Eliminar</button>
                        </div>
                    </article>

                    <article data-festival data-name="SunWave Fest" data-city="Barcelona" data-start="2025-07-12" data-end="2025-07-14"
                        className="rounded-xl border p-4 hover:shadow-sm transition shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
                        <div className="flex items-start justify-between gap-3">
                            <header>
                                <h3 className="text-lg font-semibold">SunWave Fest</h3>
                                <p className="mt-1 text-sm text-neutral-600">Techno</p>
                            </header>
                            <span className="inline-flex items-center justify-center text-xs font-semibold px-2 py-1 rounded-full bg-neutral-100 border text-neutral-900">
                                JUL 2025
                            </span>
                        </div>

                        <dl className="mt-4 space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">🗓️</dt>
                                <dd>12 Jul 2025 — 14 Jul 2025</dd>
                            </div>
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">📍</dt>
                                <dd>Barcelona</dd>
                            </div>
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">💶</dt>
                                <dd>85€ - 120€</dd>
                            </div>
                        </dl>

                        <div className="mt-4 flex items-center justify-end gap-2">
                            <Link to="/edit-festivals" className="px-2 py-1 rounded border bg-purple-500">Editar</Link>
                            <button className="px-2 py-1 rounded border text-red-700">Eliminar</button>
                        </div>
                    </article>

                    <article data-festival data-name="SunWave Fest" data-city="Barcelona" data-start="2025-07-12" data-end="2025-07-14"
                        className="rounded-xl border p-4 hover:shadow-sm transition shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
                        <div className="flex items-start justify-between gap-3">
                            <header>
                                <h3 className="text-lg font-semibold">SunWave Fest</h3>
                                <p className="mt-1 text-sm text-neutral-600">Música alternativa</p>
                            </header>
                            <span className="inline-flex items-center justify-center text-xs font-semibold px-2 py-1 rounded-full bg-neutral-100 border text-neutral-900">
                                JUL 2025
                            </span>
                        </div>

                        <dl className="mt-4 space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">🗓️</dt>
                                <dd>12 Jul 2025 — 14 Jul 2025</dd>
                            </div>
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">📍</dt>
                                <dd>Barcelona</dd>
                            </div>
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">💶</dt>
                                <dd>85€ - 120€</dd>
                            </div>
                        </dl>

                        <div className="mt-4 flex items-center justify-end gap-2">
                            <Link to="/edit-festivals" className="px-2 py-1 rounded border bg-purple-500">Editar</Link>
                            <button className="px-2 py-1 rounded border text-red-700">Eliminar</button>
                        </div>
                    </article>

                    <article data-festival data-name="SunWave Fest" data-city="Barcelona" data-start="2025-07-12" data-end="2025-07-14"
                        className="rounded-xl border p-4 hover:shadow-sm transition shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
                        <div className="flex items-start justify-between gap-3">
                            <header>
                                <h3 className="text-lg font-semibold">SunWave Fest</h3>
                                <p className="mt-1 text-sm text-neutral-600">Música alternativa</p>
                            </header>
                            <span className="inline-flex items-center justify-center text-xs font-semibold px-2 py-1 rounded-full bg-neutral-100 border text-neutral-900">
                                JUL 2025
                            </span>
                        </div>

                        <dl className="mt-4 space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">🗓️</dt>
                                <dd>12 Jul 2025 — 14 Jul 2025</dd>
                            </div>
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">📍</dt>
                                <dd>Barcelona</dd>
                            </div>
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">💶</dt>
                                <dd>85€ - 120€</dd>
                            </div>
                        </dl>

                        <div className="mt-4 flex items-center justify-end gap-2">
                            <Link to="/edit-festivals" className="px-2 py-1 rounded border bg-purple-500">Editar</Link>
                            <button className="px-2 py-1 rounded border text-red-700">Eliminar</button>
                        </div>
                    </article>

                    <article data-festival data-name="SunWave Fest" data-city="Barcelona" data-start="2025-07-12" data-end="2025-07-14"
                        className="rounded-xl border p-4 hover:shadow-sm transition shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
                        <div className="flex items-start justify-between gap-3">
                            <header>
                                <h3 className="text-lg font-semibold">SunWave Fest</h3>
                                <p className="mt-1 text-sm text-neutral-600">Música alternativa</p>
                            </header>
                            <span className="inline-flex items-center justify-center text-xs font-semibold px-2 py-1 rounded-full bg-neutral-100 border text-neutral-900">
                                JUL 2025
                            </span>
                        </div>

                        <dl className="mt-4 space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">🗓️</dt>
                                <dd>12 Jul 2025 — 14 Jul 2025</dd>
                            </div>
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">📍</dt>
                                <dd>Barcelona</dd>
                            </div>
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">💶</dt>
                                <dd>85€ - 120€</dd>
                            </div>
                        </dl>

                        <div className="mt-4 flex items-center justify-end gap-2">
                            <Link to="/edit-festivals" className="px-2 py-1 rounded border bg-purple-500">Editar</Link>
                            <button className="px-2 py-1 rounded border text-red-700">Eliminar</button>
                        </div>
                    </article>

                    <article data-festival data-name="SunWave Fest" data-city="Barcelona" data-start="2025-07-12" data-end="2025-07-14"
                        className="rounded-xl border p-4 hover:shadow-sm transition shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
                        <div className="flex items-start justify-between gap-3">
                            <header>
                                <h3 className="text-lg font-semibold">SunWave Fest</h3>
                                <p className="mt-1 text-sm text-neutral-600">Música alternativa</p>
                            </header>
                            <span className="inline-flex items-center justify-center text-xs font-semibold px-2 py-1 rounded-full bg-neutral-100 border text-neutral-900">
                                JUL 2025
                            </span>
                        </div>

                        <dl className="mt-4 space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">🗓️</dt>
                                <dd>12 Jul 2025 — 14 Jul 2025</dd>
                            </div>
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">📍</dt>
                                <dd>Barcelona</dd>
                            </div>
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">💶</dt>
                                <dd>85€ - 120€</dd>
                            </div>
                        </dl>

                        <div className="mt-4 flex items-center justify-end gap-2">
                            <Link to="/edit-festivals" className="px-2 py-1 rounded border bg-purple-500">Editar</Link>
                            <button className="px-2 py-1 rounded border text-red-700">Eliminar</button>
                        </div>
                    </article>

                    <article data-festival data-name="SunWave Fest" data-city="Barcelona" data-start="2025-07-12" data-end="2025-07-14"
                        className="rounded-xl border p-4 hover:shadow-sm transition shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
                        <div className="flex items-start justify-between gap-3">
                            <header>
                                <h3 className="text-lg font-semibold">SunWave Fest</h3>
                                <p className="mt-1 text-sm text-neutral-600">Música alternativa</p>
                            </header>
                            <span className="inline-flex items-center justify-center text-xs font-semibold px-2 py-1 rounded-full bg-neutral-100 border text-neutral-900">
                                JUL 2025
                            </span>
                        </div>

                        <dl className="mt-4 space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">🗓️</dt>
                                <dd>12 Jul 2025 — 14 Jul 2025</dd>
                            </div>
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">📍</dt>
                                <dd>Barcelona</dd>
                            </div>
                            <div className="flex items-center gap-2">
                                <dt className="text-neutral-500">💶</dt>
                                <dd>85€ - 120€</dd>
                            </div>
                        </dl>

                        <div className="mt-4 flex items-center justify-end gap-2">
                            <Link to="/edit-festivals" className="px-2 py-1 rounded border bg-purple-500">Editar</Link>
                            <button className="px-2 py-1 rounded border text-red-700">Eliminar</button>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}