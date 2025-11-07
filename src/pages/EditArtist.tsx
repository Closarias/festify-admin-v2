import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import { type ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getArtist, updateArtist } from "@/services/artists.ts";
import type { Artist, ArtistRequest } from "@/types/artist.ts";
import type { ErrorResponse } from "@/types/common.ts";


type ArtistForm = {
    id: string;
    name: string;
    genres: string;
    country: string;
    listeners: "" | number;
    status: "Activo" | "Borrador";
    biography: string;
}

const defaultArtistForm: ArtistForm = {
    id: "",
    name: "",
    genres: "",
    country: "ES",
    listeners: 0,
    status: "Activo",
    biography: "",
}

export default function EditArtist() {

    const [form, setForm] = useState<ArtistForm>(defaultArtistForm);
    const [formOriginal, setFormOriginal] = useState<ArtistForm>(defaultArtistForm);
    const [isValid, setValid] = useState<boolean>(false);
    const { id } = useParams();
    const [error, setError] = useState<string>();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getArtist(id).then((res: Artist | ErrorResponse) => {
                if ("id" in res) {
                    const artist: Artist = res as Artist;
                    setForm({
                        ...artist,
                        genres: artist.genres.join(", ")
                    })
                    setFormOriginal({
                        ...artist,
                        genres: artist.genres.join(", ")
                    });
                } else {
                    const errorResponse: ErrorResponse = res as ErrorResponse;
                    setError(errorResponse.detail);
                }
            }).catch((err) => {
                setError(err?.message ?? "Error cargando el usuario");
            });
        }
    }, [])

    useEffect(() => {
        setValid(
            form.name.trim().length > 2 &&
            form.genres.trim().length > 2);
    }, [form])

    const handleNameOnChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target;
        setForm({
            ...form,
            name: value,
        })
    }

    const handleGenresOnChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target;
        setForm({
            ...form,
            genres: value,
        })
    }

    const handleCountryOnChange = (evt: ChangeEvent<HTMLSelectElement>) => {
        const { value } = evt.target;
        setForm({
            ...form,
            country: value,
        })
    }

    const handleBiographyOnChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = evt.target;
        setForm({
            ...form,
            biography: value,
        })
    }

    const handleStatusOnChange = (evt: ChangeEvent<HTMLSelectElement>) => {
        const { value } = evt.target;
        setForm({
            ...form,
            status: value === 'Activo' ? 'Activo' : 'Borrador',
        })
    }

    const handleListenersOnChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const { value: valueText } = evt.target;
        const value = Number(valueText);
        setForm({
            ...form,
            listeners: value,
        })
    }

    const handleReset = () => {
        setForm(formOriginal);
    }

    if (error) {
        return <>
            <Header />
            <div className="flex flex-col items-center justify-center h-screen text-center p-4">
                <h1 className="text-6xl font-bold text-red-500">Error</h1>
                <h2 className="text-2xl mt-4">Error inesperado</h2>
                <p className="text-gray-600 mt-2">
                    {error}
                </p>
                <Link
                    to="/"
                    className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Volver al inicio
                </Link>
            </div>
            <Footer />
        </>
    }

    const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!id) {
            return;
        }
        const request: ArtistRequest = {
            ...form,
            listeners: form.listeners == "" ? 0 : form.listeners,
            genres: form.genres.split(",").map(a => a.trim()),
        }
        try {
            const response = await updateArtist(id, request);
            if ("id" in response) {
                const artist: Artist = response as Artist;
                alert(`Artista con id ${artist.id} ha sido actualizado con éxito.`);
                navigate('/artists');
            } else {
                const error: ErrorResponse = response as ErrorResponse;
                alert(error.detail);
            }
        } catch (err: any) {
            console.log(err)
            alert(err?.message ?? 'Error desconocido');
        };

    }

    const btnSaveClassnames = "px-4 py-2 rounded-lg text-white " + (isValid ? "bg-green-900" : "bg-gray-400");

    return <>
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
            <Link to="/artists" className="text-sm px-3 py-2 rounded-lg border">Volver</Link>
            <div className="max-w-5xl mx-auto h-16 px-4 flex items-center justify-center"><h1 className="font-semibold">Editar artista</h1></div>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                    <label className="block text-neutral-50 mb-1">Nombre</label>
                    <input className="w-full px-3 py-2 rounded-lg border" type="text" value={form.name} onChange={handleNameOnChange} placeholder="Nombre del artista" />
                </div>
                <div>
                    <label className="block text-neutral-50 mb-1">Géneros (coma)</label>
                    <input type="text" value={form.genres} onChange={handleGenresOnChange} className="w-full px-3 py-2 rounded-lg border" placeholder="Indie, Electrónica" />
                </div>
                <div>
                    <label className="block text-neutral-50 mb-1">País</label>
                    <select value={form.country} onChange={handleCountryOnChange} className="w-full px-3 py-2 rounded-lg border">
                        <option value="AF">Afganistán</option>
                        <option value="AL">Albania</option>
                        <option value="DE">Alemania</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AG">Antigua y Barbuda</option>
                        <option value="SA">Arabia Saudita</option>
                        <option value="DZ">Argelia</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaiyán</option>
                        <option value="BS">Bahamas</option>
                        <option value="BH">Baréin</option>
                        <option value="BD">Bangladés</option>
                        <option value="BB">Barbados</option>
                        <option value="BE">Bélgica</option>
                        <option value="BZ">Belice</option>
                        <option value="BJ">Benín</option>
                        <option value="BY">Bielorrusia</option>
                        <option value="BO">Bolivia</option>
                        <option value="BA">Bosnia y Herzegovina</option>
                        <option value="BW">Botsuana</option>
                        <option value="BR">Brasil</option>
                        <option value="BN">Brunéi</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="BT">Bután</option>
                        <option value="CV">Cabo Verde</option>
                        <option value="KH">Camboya</option>
                        <option value="CM">Camerún</option>
                        <option value="CA">Canadá</option>
                        <option value="QA">Catar</option>
                        <option value="CF">República Centroafricana</option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CY">Chipre</option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoras</option>
                        <option value="CG">Congo</option>
                        <option value="CD">Congo (Rep. Dem.)</option>
                        <option value="KR">Corea del Sur</option>
                        <option value="KP">Corea del Norte</option>
                        <option value="CR">Costa Rica</option>
                        <option value="CI">Costa de Marfil</option>
                        <option value="HR">Croacia</option>
                        <option value="CU">Cuba</option>
                        <option value="DK">Dinamarca</option>
                        <option value="DM">Dominica</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egipto</option>
                        <option value="SV">El Salvador</option>
                        <option value="AE">Emiratos Árabes Unidos</option>
                        <option value="ER">Eritrea</option>
                        <option value="SK">Eslovaquia</option>
                        <option value="SI">Eslovenia</option>
                        <option value="ES">España</option>
                        <option value="US">Estados Unidos</option>
                        <option value="EE">Estonia</option>
                        <option value="ET">Etiopía</option>
                        <option value="PH">Filipinas</option>
                        <option value="FI">Finlandia</option>
                        <option value="FJ">Fiyi</option>
                        <option value="FR">Francia</option>
                        <option value="GA">Gabón</option>
                        <option value="GM">Gambia</option>
                        <option value="GE">Georgia</option>
                        <option value="GH">Ghana</option>
                        <option value="GD">Granada</option>
                        <option value="GR">Grecia</option>
                        <option value="GT">Guatemala</option>
                        <option value="GN">Guinea</option>
                        <option value="GQ">Guinea Ecuatorial</option>
                        <option value="GW">Guinea-Bisáu</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haití</option>
                        <option value="HN">Honduras</option>
                        <option value="HU">Hungría</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IQ">Irak</option>
                        <option value="IR">Irán</option>
                        <option value="IE">Irlanda</option>
                        <option value="IS">Islandia</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italia</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japón</option>
                        <option value="JO">Jordania</option>
                        <option value="KZ">Kazajistán</option>
                        <option value="KE">Kenia</option>
                        <option value="KG">Kirguistán</option>
                        <option value="KI">Kiribati</option>
                        <option value="KW">Kuwait</option>
                        <option value="LA">Laos</option>
                        <option value="LS">Lesoto</option>
                        <option value="LV">Letonia</option>
                        <option value="LB">Líbano</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libia</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lituania</option>
                        <option value="LU">Luxemburgo</option>
                        <option value="MK">Macedonia del Norte</option>
                        <option value="MG">Madagascar</option>
                        <option value="MY">Malasia</option>
                        <option value="MW">Malaui</option>
                        <option value="MV">Maldivas</option>
                        <option value="ML">Malí</option>
                        <option value="MT">Malta</option>
                        <option value="MA">Marruecos</option>
                        <option value="MH">Islas Marshall</option>
                        <option value="MU">Mauricio</option>
                        <option value="MR">Mauritania</option>
                        <option value="MX">México</option>
                        <option value="FM">Micronesia</option>
                        <option value="MD">Moldavia</option>
                        <option value="MC">Mónaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="ME">Montenegro</option>
                        <option value="MZ">Mozambique</option>
                        <option value="MM">Myanmar</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Níger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NO">Noruega</option>
                        <option value="NZ">Nueva Zelanda</option>
                        <option value="OM">Omán</option>
                        <option value="NL">Países Bajos</option>
                        <option value="PK">Pakistán</option>
                        <option value="PW">Palaos</option>
                        <option value="PA">Panamá</option>
                        <option value="PG">Papúa Nueva Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Perú</option>
                        <option value="PL">Polonia</option>
                        <option value="PT">Portugal</option>
                        <option value="GB">Reino Unido</option>
                        <option value="CF">República Centroafricana</option>
                        <option value="CZ">República Checa</option>
                        <option value="DO">República Dominicana</option>
                        <option value="RW">Ruanda</option>
                        <option value="RO">Rumania</option>
                        <option value="RU">Rusia</option>
                        <option value="WS">Samoa</option>
                        <option value="KN">San Cristóbal y Nieves</option>
                        <option value="SM">San Marino</option>
                        <option value="ST">Santo Tomé y Príncipe</option>
                        <option value="VC">San Vicente y las Granadinas</option>
                        <option value="SB">Islas Salomón</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leona</option>
                        <option value="SG">Singapur</option>
                        <option value="SY">Siria</option>
                        <option value="SO">Somalia</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="ZA">Sudáfrica</option>
                        <option value="SD">Sudán</option>
                        <option value="SS">Sudán del Sur</option>
                        <option value="SE">Suecia</option>
                        <option value="CH">Suiza</option>
                        <option value="SR">Surinam</option>
                        <option value="TH">Tailandia</option>
                        <option value="TZ">Tanzania</option>
                        <option value="TJ">Tayikistán</option>
                        <option value="TL">Timor Oriental</option>
                        <option value="TG">Togo</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad y Tobago</option>
                        <option value="TN">Túnez</option>
                        <option value="TM">Turkmenistán</option>
                        <option value="TR">Turquía</option>
                        <option value="TV">Tuvalu</option>
                        <option value="UA">Ucrania</option>
                        <option value="UG">Uganda</option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistán</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VE">Venezuela</option>
                        <option value="VN">Vietnam</option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabue</option>
                    </select>
                </div>
                <div>
                    <label className="block text-neutral-50 mb-1">Oyentes mensuales</label>
                    <input type="number" onChange={handleListenersOnChange} value={form.listeners} className="w-full px-3 py-2 rounded-lg border" placeholder="1200000" />
                </div>
                <div>
                    <label className="block text-neutral-50 mb-1">Estado</label>
                    <select value={form.status} onChange={handleStatusOnChange} className="w-full px-3 py-2 rounded-lg border">
                        <option>Activo</option>
                        <option>Borrador</option>
                    </select>
                </div>

                <div className="sm:col-span-2">
                    <label className="block text-neutral-50 mb-1">Biografía</label>
                    <textarea rows={5} className="w-full px-3 py-2 rounded-lg border"
                        placeholder="Resumen del artista, estilo, trayectoria…" onChange={handleBiographyOnChange} value={form.biography} />
                </div>
                <div className="sm:col-span-2 flex items-center gap-3 mt-2">

                    <button type="reset" onClick={handleReset} className="px-4 py-2 rounded-lg border">Deshacer cambios</button>
                    <button disabled={!isValid} className={btnSaveClassnames} onClick={handleSubmitForm}>Guardar artista</button>
                </div>
            </form>
        </main>
        <Footer />
    </>
}