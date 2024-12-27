import logoWithBg from "@/assets/images/logo-with-background.svg";
import iconMenu from "@/assets/icons/icon-menu.svg";
import iconDownload from "@/assets/icons/icon-download.svg";
import { HeaderClient } from "@/app/_components/HeaderClient";
import iconWarningCircle from "@/assets/icons/icon-warning-circle.svg";
import iconPlaystore from "@/assets/icons/icon-playstore.svg";

export const Header = () => {
  return (
    <HeaderClient
      logoWithBg={logoWithBg}
      iconMenu={iconMenu}
      iconDownload={iconDownload}
      iconPlaystore={iconPlaystore}
      iconWarning={iconWarningCircle}
    />
  );
};
