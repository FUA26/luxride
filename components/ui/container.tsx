import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return <div className={cn('mx-auto max-w-6xl', className)}>{children}</div>;
};

export default Container;
