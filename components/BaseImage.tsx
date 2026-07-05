import { BASE_PATH } from "@/lib/basePath";

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export default function BaseImage({ src = "", ...props }: Props) {
  const path =
    typeof src === "string" && src.startsWith("/")
      ? `${BASE_PATH}${src}`
      : src;

  return <img src={path} {...props} />;
}