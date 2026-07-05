import Link from "next/link";

type Props = React.ComponentProps<typeof Link>;

export default function BaseLink({ href, ...props }: Props) {
  return <Link href={href} {...props} />;
}