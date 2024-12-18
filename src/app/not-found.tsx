import Image from "next/image";
import notFound from "@/assets/images/not-found.png";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center py-8 px-4 lg:px-8 mx-auto h-screen">
      <h1 className="text-primary-text-color text-5xl font-bold">404</h1>
      <h1 className="mt-4 text-primary-text-color text-5xl font-bold">Oops!</h1>
      <Image src={notFound} alt="Not Found" className="mt-10" height={350} />
    </div>
  );
}
