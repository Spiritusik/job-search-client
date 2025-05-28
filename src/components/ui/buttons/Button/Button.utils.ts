import { ButtonVariant } from "./Button.types";

export const baseStyles = 'inline-block px-4 py-2 rounded text-sm font-medium transition';

export const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
  secondary:
    'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
};

export const isInternalLink = (href: string) => href.startsWith('/');