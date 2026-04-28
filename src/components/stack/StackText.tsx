import clsx from 'clsx';

interface StackTextProps {
  text: string;
  className?: string;
}

const StackText: React.FC<StackTextProps> = ({ text, className }) => {
  return (
    <p className={clsx('stack-items', 'stack-text', className)}>
      <span data-before-text className="item stack-text-before">
        {text}
      </span>
      <span data-after-text className="item stack-text-after">
        {text}
      </span>
    </p>
  );
};
export default StackText;
