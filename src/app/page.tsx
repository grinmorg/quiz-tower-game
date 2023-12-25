import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 md:px-12">
          <div className="mx-auto w-full text-left md:w-11/12 md:text-center xl:w-9/12">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-200 md:text-6xl md:tracking-tight">
              <span>Сыграй в </span>{" "}
              <span className="leading-12 block w-full bg-gradient-to-r from-violet-500 to-green-400 bg-clip-text py-2 text-transparent lg:inline">
                QUIZ TOWER
              </span>{" "}
              <span></span>
            </h1>
            <p className="mb-8 px-0 text-lg text-gray-400 md:text-xl lg:px-24">
              Это интеллектуальная онлайн-игра, с элементами стратегии. С
              возможностью играть до 8-ми человек в одном лобби!
            </p>
            <div className="mb-4 space-x-0 md:mb-8 md:space-x-2">
              <Button color="secondary">Начать играть</Button>
            </div>
          </div>
          <div className="mx-auto mt-20 w-full text-center md:w-10/12">
            <div className="relative z-0 mt-8 w-full">
              <div className="relative overflow-hidden shadow-2xl">
                <div className="flex h-11 flex-none items-center rounded-xl rounded-b-none bg-violet-500 px-4">
                  <div className="flex space-x-1.5">
                    <div className="h-3 w-3 rounded-full border-2 border-white"></div>
                    <div className="h-3 w-3 rounded-full border-2 border-white"></div>
                    <div className="h-3 w-3 rounded-full border-2 border-white"></div>
                  </div>
                </div>
                <img
                  className="rounded-b-xl"
                  src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
