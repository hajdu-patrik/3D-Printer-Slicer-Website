import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ForwardedRef, ReactNode } from 'react';
import Link, { type LinkProps } from 'next/link';

/**
 * Every variant below is the exact class string that already existed inline at each call site
 * (Buy me a coffee / Documentation / Prusa & Orca links / Try again / Retry / Go back now), only
 * with the bare `transition` utility narrowed to the properties that actually change on hover
 * (see the animations task: fewer watched properties, identical hover effect and timing).
 */
export type ButtonVariant = 'coffee' | 'primary-home' | 'primary-gradient' | 'secondary-doc' | 'media';

const variantClassName: Record<ButtonVariant, string> = {
  coffee:
    'inline-flex items-center gap-2 rounded-xl border-2 border-black bg-[#FFDD00] px-5 py-3 text-sm font-bold text-black transition-[transform,filter] duration-150 ease-in-out hover:-translate-y-0.5 hover:brightness-105',
  'primary-home':
    'inline-flex items-center justify-center gap-2 rounded-xl border-2 border-brand-ink bg-white from-brand-coral to-[#ee9160] px-5 py-3 text-sm font-bold text-brand-ink transition-[transform,filter] duration-150 ease-in-out hover:-translate-y-0.5 hover:brightness-105',
  'primary-gradient':
    'inline-flex items-center justify-center rounded-xl border-2 border-brand-ink bg-linear-to-b/srgb from-brand-coral to-[#ee9160] px-5 py-3 text-sm font-bold text-brand-ink transition-[transform,filter] duration-150 ease-in-out hover:-translate-y-0.5 hover:brightness-105',
  'secondary-doc':
    'inline-flex items-center justify-center gap-2 rounded-xl border-2 border-brand-ink bg-white px-5 py-3 text-sm font-bold text-brand-ink transition-[transform,background-color] duration-150 ease-in-out hover:-translate-y-0.5 hover:bg-[#fff1e4]',
  media: 'group relative z-10 flex h-52 items-center justify-center overflow-hidden transition-transform hover:-translate-y-0.5 sm:h-56'
};

type CommonProps = {
  variant: ButtonVariant;
  className?: string;
  children?: ReactNode;
};

type AsAnchor = CommonProps & { as?: 'a' } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>;
type AsButton = CommonProps & { as: 'button' } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;
type AsLink = CommonProps & { as: 'link' } & Omit<LinkProps, 'className'>;

export type ButtonProps = AsAnchor | AsButton | AsLink;

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const { variant, className, children } = props;
  const classes = className ? `${variantClassName[variant]} ${className}` : variantClassName[variant];

  if (props.as === 'button') {
    const { as: _as, variant: _variant, className: _className, children: _children, ...rest } = props;
    return (
      <button ref={ref as ForwardedRef<HTMLButtonElement>} type="button" className={classes} {...rest}>
        {children}
      </button>
    );
  }

  if (props.as === 'link') {
    const { as: _as, variant: _variant, className: _className, children: _children, ...rest } = props;
    return (
      <Link ref={ref as ForwardedRef<HTMLAnchorElement>} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { as: _as, variant: _variant, className: _className, children: _children, ...rest } = props;
  return (
    <a ref={ref as ForwardedRef<HTMLAnchorElement>} className={classes} {...rest}>
      {children}
    </a>
  );
});

Button.displayName = 'Button';

export default Button;
