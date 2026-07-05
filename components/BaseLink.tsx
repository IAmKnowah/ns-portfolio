import Link from "next/link";
import { BASE_PATH } from "@/lib/basePath";

type Props = React.ComponentProps<typeof Link>;

export default function BaseLink({ href, ...props }: Props) {
  const path =
    typeof href === "string" && href.startsWith("/")
      ? `${BASE_PATH}${href}`
      : href;

  return <Link href={path} {...props} />;
}