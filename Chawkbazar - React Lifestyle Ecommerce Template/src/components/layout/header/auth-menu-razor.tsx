// razor
import Link from '@components/ui/link';
import React from 'react';

interface Props {
  href: string;
  btnProps: React.ButtonHTMLAttributes<any>;
  isAuthorized: boolean;
  children?:React.ReactNode;

}

const AuthMenu: React.FC<Props> = ({
  isAuthorized,
  href,
  btnProps,
  children,
}) => {
  return isAuthorized ? (
    <Link
      href={href}
      className="text-sm text-white font-normal focus:outline-none ms-2"
    >
      {children}
    </Link>
  ) : (
    <button
      className="text-sm  text-white font-normal focus:outline-none ms-2"
      aria-label="Authentication"
      {...btnProps}
    />
  );
};

export default AuthMenu;
