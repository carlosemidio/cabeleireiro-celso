import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-24 relative z-0">
      <div className="flex flex-col gap-4">
        <div className=" flex sm:hidden justify-center mb-4">
          <Image
            src="https://lh3.googleusercontent.com/p/AF1QipPvtnQ5XgvBE4DAUCAYYJCb4aAa1nFkVOjHRNXh=w768-h768-n-o-v1"
            alt="Cabeleireiro Celso"
            width={1000}
            height={300}
            className="max-w-100"
          />
        </div>
        <div className="relative flex flex-col gap-4 sm:mt-24 sm:mb-12">
          <div className="text-center relative">
            <ContentCutIcon className="absolute text-slate-200/50 w-72 h-72 z-0 -rotate-[30deg] -translate-y-10 -translate-x-64 sm:-translate-x-96"></ContentCutIcon>
            <h1 className="relative z-1 text-4xl text-blue-800 sm:text-6xl">
              Celso Cabeleireiro
            </h1>
            <h2 className="relative z-1 text-blue-800 text-3xl sm:text-4xl">
              Cortes Masculinos
            </h2>
          </div>
          <div className="relative z-1 text-center text-slate-600 text-lg sm:text-xl">
            <p className="">
              Cabeleireiro em{" "}
              <span className="font-semibold">Parque Mandaqui</span>
            </p>
          </div>
        </div>
        <div className="relative z-1 hidden sm:flex justify-center h-[600px]">
          <Image
            src="https://lh3.googleusercontent.com/p/AF1QipPvtnQ5XgvBE4DAUCAYYJCb4aAa1nFkVOjHRNXh=w768-h768-n-o-v1"
            alt="Cabeleireiro Celso"
            width={1100}
            height={300}
            className="object-cover"
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-2 justify-center">
          <CameraAltIcon className="text-blue-800 text-4xl"></CameraAltIcon>
          <h2 className="text-4xl text-blue-800">Galeria</h2>
        </div>
        <div className=" max-w-full grid grid-cols-1 gap-4 px-2 sm:px-0 sm:grid-cols-2">
          <div className="mx-auto w-full">
            <Image
              src="https://lh3.googleusercontent.com/p/AF1QipPvtnQ5XgvBE4DAUCAYYJCb4aAa1nFkVOjHRNXh=w768-h768-n-o-v1"
              width={300}
              height={300}
              alt="Cabeleireiro Celso"
              layout="responsive"
              className="object-cover"
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
          <div className="mx-auto w-full">
            <Image
              src="/images/galeria/cabeleireiro-celso-1.jpeg"
              width={300}
              height={300}
              alt="Cabeleireiro Celso"
              layout="responsive"
            />
          </div>
          <div className="mx-auto w-full">
            <Image
              src="/images/galeria/cabeleireiro-celso-2.jpeg"
              width={300}
              height={300}
              alt="Cabeleireiro Celso"
              layout="responsive"
            />
          </div>
          <div className="mx-auto w-full">
            <Image
              src="/images/galeria/cabeleireiro-celso-3.jpeg"
              width={300}
              height={300}
              alt="Cabeleireiro Celso"
              layout="responsive"
            />
          </div>
          <div className="mx-auto w-full">
            <Image
              src="/images/galeria/cabeleireiro-celso-5.jpeg"
              width={300}
              height={300}
              alt="Cabeleireiro Celso"
              layout="responsive"
            />

            <Image
              src="/images/galeria/cabeleireiro-celso-4.jpeg"
              width={300}
              height={300}
              style={{ marginTop: "1rem" }}
              alt="Cabeleireiro Celso"
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center">
          <LocationOnIcon className="text-blue-800 text-4xl"></LocationOnIcon>
          <h2 className="text-4xl text-blue-800 p-2">Onde Estamos</h2>
        </div>
        <div className="w-full">
          <Link
            target="blank"
            href="https://www.google.com/maps/place/Cabeleireiro+Celso+Masculino/data=!3m1!4b1!4m2!3m1!1s0x94cef7b26b67876d:0x1e3ce37fc83c7af6"
          >
            <Image
              src="/images/mapa.png"
              width={1000}
              height={300}
              alt="Mapa do Estabelecimento"
              layout="responsive"
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
            <p>Seg - Fechado</p>
          </div>
          <div>
            <p>Ter, Qua, Qui, Sex, Sáb - 08:45 - 16:00</p>
          </div>
          <div>
            <p>Dom - Fechado</p>
          </div>
        </div>
      </div>
    </div>
  );
}
