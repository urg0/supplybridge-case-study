import Logo from "@assets/images/supplybridge-logo.jpeg";

class AppImages {
  static GetImage(type) {
    switch (type) {
      case "logo":
        return Logo;
      default:
        return null;
    }
  }
}

export default AppImages;
