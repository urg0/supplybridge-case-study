import Loading from "@assets/animations/loading.json";
import Loading2 from "@assets/animations/loading2.json";
import BookmarkLoading from "@assets/animations/bookmark-loading.json";

class AppAnimations {
  static getAnimation(type) {
    switch (type) {
      case "loading":
        return Loading;
      case "loading2":
        return Loading2;
      case "bookmark-loading":
        return BookmarkLoading;
      default:
        return null;
    }
  }
}

export default AppAnimations;
