import Logo from "@assets/images/startupfon-logo.jpeg";
import WorkingCat from "@assets/images/working-cat.gif";
class AppImages {
  static GetImage(type) {
    switch (type) {
      case "logo":
        return Logo;
      case "working-cat":
        return WorkingCat;
      default:
        return null;
    }
  }
}

export default AppImages;
