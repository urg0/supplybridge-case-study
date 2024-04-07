import Lottie from "react-lottie";

export default function LottiePlayer({
  animationData,
  style,
  loop = true,
  autoplay = true,
  speed = 1,
}) {
  const defaultOptions = {
    loop: loop,
    autoplay: autoplay,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} speed={speed} style={style} />;
}
