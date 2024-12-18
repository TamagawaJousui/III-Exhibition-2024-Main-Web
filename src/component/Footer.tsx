import { FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";
export default function Footer() {
  const [instagram, twitter, facebook] = [
    "https://www.instagram.com/iiiexhibition",
    "https://twitter.com/iiiexhibition",
    "https://www.facebook.com/iiiexhibition",
  ];

  return (
    <footer className="flex flex-col items-center justify-center gap-2 pb-12 font-serif text-primary">
      <div className="text-lg font-extrabold md:text-2xl">
        iiiExhibition 2024
      </div>
      <div className="flex gap-3 text-xl md:text-3xl">
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <InstagramLogo />
        </a>
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <XLogo />
        </a>
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <FacebookLogo />
        </a>
      </div>
      <div className="pt-0 text-xs font-extralight md:text-base">
        © 2024 - iii exhibition
      </div>
    </footer>
  );
}
