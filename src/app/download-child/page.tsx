import Image from "next/image";
import logoEalpix from "@/assets/icons/logo-only.svg";
import iconDownload from "@/assets/icons/download.svg";
import iconPlay from "@/assets/icons/play.svg";
import iconWarningCircle from "@/assets/icons/warning-circle.svg";

export default function DownloadChild() {
  return (
    <div className="flex justify-center items-center py-8 px-4 lg:px-8 lg:w-2/6 mx-auto">
      <div className="container">
        <div className="py-5 rounded-lg bg-gradient-to-r from-primary-color to-primary-linear-color flex flex-col justify-center items-center shadow-md">
          <div className="flex flex-row gap-3 items-center justify-center">
            <Image src={logoEalpix} alt="Ealpix Logo" />
            <h3 className="text-white text-2xl lg:text-3xl font-semibold">
              Get Child App
            </h3>
          </div>
          <div className="flex flex-col items-center mt-5 w-full px-5">
            <p className="mt-3 text-white text-xs lg:text-sm text-center">
              Install this app on your child’s device
            </p>
            <button className="mt-3 py-3 inline-flex justify-center items-center gap-2 bg-white rounded w-full">
              <span className="text-primary-color text-sm lg:text-base font-medium">
                Download
              </span>
              <Image src={iconDownload} alt="Icon Download" />
            </button>
            <a href="#" className="mt-3 flex flex-row items-center">
              <p className="text-white text-xs lg:text-sm">Watch Tutorial</p>
              <Image src={iconPlay} alt="Icon Play" />
            </a>
          </div>
        </div>
        <div className="mt-6 lg:mt-8">
          <div className="px-3 py-6 rounded-lg bg-white flex flex-col justify-center shadow-md dm:shadow-sm">
            <div className="container border border-border-color rounded-lg p-4 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)]">
              <h3 className="text-primary-text-color text-base lg:text-lg font-medium text-center">
                Open child app
              </h3>
              <p className="mt-1 text-secondary-text-color text-xs lg:text-sm font-normal text-center px-2">
                The child app icon will be hidden after installation. You can go
                to this page to open the child app.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="mt-6 py-1.5 px-4 text-white font-medium text-base bg-primary-color rounded">
                Open
              </button>
            </div>
          </div>
        </div>
        {/* <div className="mt-6 lg:mt-8 flex justify-center">
          <iframe
            className="w-full max-w-4xl h-48 sm:h-48 lg:h-60 rounded-lg"
            src="https://www.youtube.com/embed/XcQb07nwle4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div> */}
        <div className="mt-6 lg:mt-8">
          <div className="p-4 rounded-lg shadow-sm bg-primary-1-color">
            <div className="flex flex-row gap-2 items-start">
              <Image src={iconWarningCircle} alt="Icon Help" />
              <div className="flex flex-col">
                <h3 className="text-primary-text-color text-sm lg:text-base font-semibold">
                  Help Center
                </h3>
                <p className="mt-1 text-secondary-text-color text-xs lg:text-sm font-normal">
                  If you are having problems installing the app, please contact
                  us
                </p>
                <a
                  href="#"
                  className="mt-1 text-primary-color text-xs lg:text-sm font-normal">
                  here!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
