import clsx from 'clsx';

interface StackTextProps {
  text: string | string[];
  className?: string;
}

const StackText: React.FC<StackTextProps & React.ComponentProps<'span'>> = ({
  text,
  className,
  ...props
}) => {
  return (
    <span className={clsx('stack-items', 'stack-text', className)} {...props}>
      <span data-before-text className="item stack-text-before">
        {Array.isArray(text) ? text.map((char, i) => <span key={i}>{char}</span>) : text}
      </span>
      <span data-after-text className="item stack-text-after">
        {Array.isArray(text) ? text.map((char, i) => <span key={i}>{char}</span>) : text}
      </span>
    </span>
  );
};
export default StackText;
