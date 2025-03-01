import { IconCloud } from "../magicui/icon-cloud";

const slugs = [
  "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=FAB005",
  "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=gwR0hbBi5JeZ&format=png&color=4D4D4D",
  "https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=13631&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=13677&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=e57Y1CnsOasB&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
  "https://img.icons8.com/?size=100&id=62452&format=png&color=000000",

];
// const slugs = [
//   "typescript",
//   "javascript",
//   "MongoDB",
//   "react",
//   "html5",
//   "css3",
//   "nodedotjs",
//   "express",
//   "nextdotjs",
//   "firebase",
//   "vercel",
//   "git",
//   "github",
//   "visualstudiocode",
//   "figma",
//   "Node.js",
//   "Tailwind CSS",

// ];

export function BannerIconCloud() {
  const images = slugs.map(
    (slug) => slug,
  );
  // const images = slugs.map(
  //   (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  // );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
