import Link from 'next/link';

interface ExLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ExLink: React.FC<ExLinkProps> = ({ href, children, className }) => {
  const isExternal =
    href.startsWith('http://') || href.startsWith('https://') || /\.[a-zA-Z0-9]{2,}$/.test(href);

  return (
    <>
      {isExternal ? (
        <a href={href} target="_blank" className={className || ''}>
          {children}
        </a>
      ) : (
        <Link href={href} className={className || ''}>
          {children}
        </Link>
      )}
    </>
  );

  return <div>ExLink Component</div>;
};
export default ExLink;
