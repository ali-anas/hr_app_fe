import clsx from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className, disabled, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
       'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white hover:bg-blue-400',
        className,
        {
        'bg-slate-200 text-slate-500 hover:bg-slate-200': disabled,
        }
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}