import Link from 'next/link';

export default function Menulink({ children, to }) {
  return <Link href={to}>{children}</Link>;
}
