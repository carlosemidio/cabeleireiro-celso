import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center relative z-0">
      <div className="flex flex-col gap-8">
        <div className=" flex sm:hidden justify-center">
          <Image
            src="https://lh3.googleusercontent.com/p/AF1QipPvtnQ5XgvBE4DAUCAYYJCb4aAa1nFkVOjHRNXh=w768-h768-n-o-v1"
            alt="Cabeleireiro Celso"
            width={1000}
            height={300}
            className="max-w-100"
          />
        </div>
        <div className="flex flex-col gap-6 sm:mt-24 sm:mb-12">
          <div className="text-center">
            <h1 className="text-4xl text-blue-800 sm:text-6xl">
              Celso Cabeleireiro
            </h1>
            <h2 className="text-blue-800 text-3xl sm:text-4xl">
              Cortes Masculinos
            </h2>
          </div>
          <div className="text-center text-slate-600 text-lg sm:text-xl">
            <p className="">
              Cabeleireiro em{" "}
              <span className="font-semibold">Parque Mandaqui</span>
            </p>
          </div>
        </div>
        <div className="hidden sm:flex justify-center w-100 h-[600px]">
          <Image
            src="https://lh3.googleusercontent.com/p/AF1QipPvtnQ5XgvBE4DAUCAYYJCb4aAa1nFkVOjHRNXh=w768-h768-n-o-v1"
            alt="Cabeleireiro Celso"
            width={1100}
            height={300}
            className="max-w-100 object-cover"
          />
        </div>

        <div className="text-center my-8 ">
          <Button className="hidden bg-blue-800 text-white text-xl hover:bg-blue-900">
            Entrar em Contato
          </Button>
        </div>
      </div>
      <div className="text-center mt-8">
        <h2 className="text-3xl text-blue-800 border-t-2 border-blue-800 inline-block p-2">
          Galeria
        </h2>
      </div>
      <div className="max-w-6xl mx-auto p-4 mt-4 grid grid-cols- gap-4 sm:grid-cols-2">
        <div className="mx-auto w-full">
          <Image
            src="https://lh3.googleusercontent.com/p/AF1QipPvtnQ5XgvBE4DAUCAYYJCb4aAa1nFkVOjHRNXh=w768-h768-n-o-v1"
            width={300}
            height={300}
            alt="Cabeleireiro Celso"
            layout="responsive"
          />
        </div>
        <div className="mx-auto w-full">
          <Image
            src="https://lh3.googleusercontent.com/p/AF1QipNgaRQB1jCmBjCr85zLCj2RV7VcFUKwPETKl7h3=w960-h960-n-o-v1"
            width={300}
            height={300}
            alt="Cabeleireiro Celso"
            layout="responsive"
          />
        </div>
      </div>
      <div className="mx-auto">
        <div className="text-center my-8">
          <h2 className="text-3xl text-blue-800 border-t-2 border-blue-800 inline-block p-2">
            Onde Estamos
          </h2>
        </div>
        <div className="mx-auto w-full">
          <Link
            target="blank"
            href="https://www.google.com/maps/place/Cabeleireiro+Celso+Masculino/data=!3m1!4b1!4m2!3m1!1s0x94cef7b26b67876d:0x1e3ce37fc83c7af6"
          >
            <Image
              src="/images/mapa.png"
              width={1000}
              height={300}
              alt="Mapa do Estabelecimento"
            ></Image>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-evenly sm:flex-row gap-4 pb-16 px-4 pt-4 mt-16 border-t-2 border-blue-800">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-blue-800">Onde Estamos</h2>
          <div>
            <button className="bg-blue-800 text-white p-2">
              <Link
                href={
                  "https://www.google.com/maps/dir//Cabeleireiro+Celso+Masculino/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cef7b26b67876d:0x1e3ce37fc83c7af6!2m2!1d-46.6356381!2d-23.4826457"
                }
                target="blank"
              >
                Ver Rotas
              </Link>
            </button>
          </div>
          <div className="text-slate-600">
            <p>Rua Helena do Sacramento, 650 - Parque Mandaqui</p>
            <p>São Paulo - SP</p>
            <p>02433-020</p>
            <p>Brasil</p>
          </div>
        </div>
        <div className="text-slate-600">
          <h2 className="text-blue-800 text-xl mb-4 ">
            Horário de funcionamento
          </h2>
          <div>
            <p>Seg, Ter, Qua - Fechado</p>
          </div>
          <div>
            <p>Qui, Sex, Sáb - 08:45 - 16:00</p>
          </div>
          <div>
            <p>Doming - Fechado</p>
          </div>
        </div>
      </div>
    </div>
  );
}
