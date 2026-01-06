interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
  return <main className={className || ''}>{children}</main>;
};
export default PageLayout;
