"use client"

import { ArrowRightCircleIcon, ChartLineIcon, FileChartLineIcon, MapPinIcon, UserIcon } from "lucide-react";

const Pagina = () => {
    return <main className="grow-1">
        <section>
            <h1 className="pt-6 px-6 text-lg">Serviços</h1>
            <ul className="flex flex-col">
                <li>
                    <a href="#" className="flex flex-row gap-6 p-6 items-center">
                        <span className="inline-block p-3 rounded-xl bg-primary">
                            <ChartLineIcon />
                        </span>
                        <span className="font-bold grow-1">Realizar Análise de Solo</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex flex-row gap-6 p-6 items-center">
                        <span className="inline-block p-3 rounded-xl bg-primary">
                            <UserIcon />
                        </span>
                        <span className="font-bold grow-1">Perfil da Propriedade</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex flex-row gap-6 p-6 items-center">
                        <span className="inline-block p-3 rounded-xl bg-primary">
                            <MapPinIcon />
                        </span>
                        <span className="font-bold grow-1">Localização das Fazendas</span>
                    </a>
                </li>
            </ul>
        </section>

        <section>
            <h1 className="text-sm px-6 pt-6">Últimas análises realizadas</h1>

            <ul>
                <li>
                    <a href="#" className="grow-1 flex flex-row gap-6 p-6 items-center">
                        <span className="inline-block p-3 rounded-xl bg-secondary">
                            <FileChartLineIcon />
                        </span>
                        <span className="grow-1 flex flex-col">
                            <time dateTime="2024-12-10" className="text-xs">10/12/2024</time>
                            <span className="text-sm">Fazenda Santa Bárbara</span>
                        </span>
                        <ArrowRightCircleIcon />
                    </a>
                </li>
                <li>
                    <a href="#" className="grow-1 flex flex-row gap-6 p-6 items-center">
                        <span className="inline-block p-3 rounded-xl bg-secondary">
                            <FileChartLineIcon />
                        </span>
                        <span className="grow-1 flex flex-col">
                            <time dateTime="2024-12-10" className="text-xs">10/12/2024</time>
                            <span className="text-sm">Fazenda Santa Bárbara</span>
                        </span>
                        <ArrowRightCircleIcon />
                    </a>
                </li>
                <li>
                    <a href="#" className="grow-1 flex flex-row gap-6 p-6 items-center">
                        <span className="inline-block p-3 rounded-xl bg-secondary">
                            <FileChartLineIcon />
                        </span>
                        <span className="grow-1 flex flex-col">
                            <time dateTime="2024-12-10" className="text-xs">10/12/2024</time>
                            <span className="text-sm">Fazenda Santa Bárbara</span>
                        </span>
                        <ArrowRightCircleIcon />
                    </a>
                </li>
                <li>
                    <a href="#" className="grow-1 flex flex-row gap-6 p-6 items-center">
                        <span className="inline-block p-3 rounded-xl bg-secondary">
                            <FileChartLineIcon />
                        </span>
                        <span className="grow-1 flex flex-col">
                            <time dateTime="2024-12-10" className="text-xs">10/12/2024</time>
                            <span className="text-sm">Fazenda Santa Bárbara</span>
                        </span>
                        <ArrowRightCircleIcon />
                    </a>
                </li>
                <li>
                    <a href="#" className="grow-1 flex flex-row gap-6 p-6 items-center">
                        <span className="inline-block p-3 rounded-xl bg-secondary">
                            <FileChartLineIcon />
                        </span>
                        <span className="grow-1 flex flex-col">
                            <time dateTime="2024-12-10" className="text-xs">10/12/2024</time>
                            <span className="text-sm">Fazenda Santa Bárbara</span>
                        </span>
                        <ArrowRightCircleIcon />
                    </a>
                </li>
                <li>
                    <a href="#" className="grow-1 flex flex-row gap-6 p-6 items-center">
                        <span className="inline-block p-3 rounded-xl bg-secondary">
                            <FileChartLineIcon />
                        </span>
                        <span className="grow-1 flex flex-col">
                            <time dateTime="2024-12-10" className="text-xs">10/12/2024</time>
                            <span className="text-sm">Fazenda Santa Bárbara</span>
                        </span>
                        <ArrowRightCircleIcon />
                    </a>
                </li>
                <li>
                    <a href="#" className="grow-1 flex flex-row gap-6 p-6 items-center">
                        <span className="inline-block p-3 rounded-xl bg-secondary">
                            <FileChartLineIcon />
                        </span>
                        <span className="grow-1 flex flex-col">
                            <time dateTime="2024-12-10" className="text-xs">10/12/2024</time>
                            <span className="text-sm">Fazenda Santa Bárbara</span>
                        </span>
                        <ArrowRightCircleIcon />
                    </a>
                </li>
                <li>
                    <a href="#" className="grow-1 flex flex-row gap-6 p-6 items-center">
                        <span className="inline-block p-3 rounded-xl bg-secondary">
                            <FileChartLineIcon />
                        </span>
                        <span className="grow-1 flex flex-col">
                            <time dateTime="2024-12-10" className="text-xs">10/12/2024</time>
                            <span className="text-sm">Fazenda Santa Bárbara</span>
                        </span>
                        <ArrowRightCircleIcon />
                    </a>
                </li>
            </ul>
        </section>
    </main>
}

export default Pagina
