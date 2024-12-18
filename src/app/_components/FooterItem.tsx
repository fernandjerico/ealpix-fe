export const FooterItem = ({ href, text }: { href: string; text: string }) => {
  return (
    <a
      href={href}
      className="self-stretch text-secondary-text-color text-base font-normal leading-normal tracking-tight">
      {text}
    </a>
  );
};
