import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { ButtonAsButton, ButtonProps } from './Button.types';
import { baseStyles, isInternalLink, variants } from './Button.utils';

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
