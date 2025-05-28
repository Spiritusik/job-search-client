export type ButtonProps = ButtonAsButton | ButtonAsExternalLink | ButtonAsInternalLink;

export type ButtonVariant = 'primary' | 'secondary';

export type BaseProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

export type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'href'> & {
    href?: undefined;
  };

export type ButtonAsExternalLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string;
    target?: string;
  };

export type ButtonAsInternalLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string;
  };