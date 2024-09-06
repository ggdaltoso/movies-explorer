import { FC, ReactNode } from 'react';

export const Shortcut: FC<{
  icon: ReactNode;
  title: string;
  onDoubleClick?: () => void;
}> = ({ icon, title, onDoubleClick }) => {
  return (
    <button
      className="group flex flex-col flex-grow-0 items-center justify-center gap-1 relative p-2"
      onDoubleClick={onDoubleClick}
    >
      <div className="min-w-8 min-h-8 after:w-full after:z-0 after:h-full group-focus:after:bg-r95-headerBackground group-focus:after:border-dashed group-focus:after:border after:opacity-30 after:absolute after:left-0 after:top-0 ">
        {icon}
      </div>
      <p className="pointer-events-none">{title}</p>
    </button>
  );
};
