import Header from '../header/Header';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <main className={className || ''}>
      <Header />
      {children}
    </main>
  );
};
export default PageLayout;
