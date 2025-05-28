import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type ButtonVariant = 'primary' | 'secondary';

type BaseProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'href'> & {
    href?: undefined;
  };

type ButtonAsExternalLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string;
    target?: string;
  };

type ButtonAsInternalLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsExternalLink | ButtonAsInternalLink;

const baseStyles = 'inline-block px-4 py-2 rounded text-sm font-medium transition';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
  secondary:
    'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
};

const isInternalLink = (href: string) => href.startsWith('/');

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    className,
    ...restProps
  } = props as ButtonProps;

  const classes = clsx(baseStyles, variants[variant], className);

  if (props['href'] && typeof props.href === 'string') {

    if (isInternalLink(props.href)) {
      return (
        <Link {...props} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <a {...props} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button {...(restProps as ButtonAsButton)} className={classes}>
      {children}
    </button>
  );
}
