import HomeIcon from "@assets/icons/home-page.svg";
import Bookmark from "@assets/icons/bookmark-empty.svg";
import Bookmark2 from "@assets/icons/bookmark-filled.svg";
import BookmarkPage from "@assets/icons/bookmark-page.svg";
import Bookmarks from "@assets/icons/bookmarks.svg";
import Linkedin from "@assets/icons/linkedin.svg";
import Github from "@assets/icons/github.svg";
import ComputerDead from "@assets/icons/computer-dead.svg";
import ComputerWarning from "@assets/icons/computer-warning.svg";
import Clear from "@assets/icons/clear.svg";
import DataNotFound from "@assets/icons/data-not-found.svg";
import BookResearch from "@assets/icons/book-research.svg";
import Error404 from "@assets/icons/404.svg";
import Sad from "@assets/icons/sad.svg";
import Refresh from "@assets/icons/refresh.svg";
import Search from "@assets/icons/search.svg";
import Add from "@assets/icons/add.svg";
import Clap from "@assets/icons/clap.svg";
import Close from "@assets/icons/close.svg";
import Back from "@assets/icons/back.svg";

class AppIcons {
  static GetIcon(type) {
    switch (type) {
      case "home":
        return HomeIcon;
      case "bookmark":
        return Bookmark;
      case "bookmark2":
        return Bookmark2;
      case "bookmark-page":
        return BookmarkPage;
      case "bookmarks":
        return Bookmarks;
      case "clear":
        return Clear;
      case "github":
        return Github;
      case "linkedin":
        return Linkedin;
      case "computer-dead":
        return ComputerDead;
      case "computer-warning":
        return ComputerWarning;
      case "data-not-found":
        return DataNotFound;
      case "book-research":
        return BookResearch;
      case "404":
        return Error404;
      case "sad":
        return Sad;
      case "refresh":
        return Refresh;
      case "search":
        return Search;
      case "add":
        return Add;
      case "clap":
        return Clap;
      case "close":
        return Close;
      case "back":
        return Back;
      default:
        return null;
    }
  }
}

export default AppIcons;
