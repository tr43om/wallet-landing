import styled, { useTheme } from "styled-components";

interface ResponsiveImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback: string;
  type?: string;
  desktop?: string | string[];
  mobile?: string | string[];
  tablet?: string | string[];
  sources?: string[];
}

const ResponsiveImage = ({
  fallback,
  type,
  desktop,
  mobile,
  tablet,
  sources,
  ...delegated
}: ResponsiveImageProps) => {
  const { devices } = useTheme();
  const desktopSrcSet =
    typeof desktop === "string"
      ? desktop
      : desktop?.map((q, i) => `${q} ${i + 1}x, `).join(" ");

  const tabletSrcSet =
    typeof tablet === "string"
      ? tablet
      : tablet?.map((q, i) => `${q} ${i + 1}x, `).join(" ");

  const mobileSrcSet =
    typeof mobile === "string"
      ? mobile
      : mobile?.map((q, i) => `${q} ${i + 1}x, `).join(" ");

  const sourcesSet = sources?.map((q, i) => `${q} ${i + 1}x, `).join(" ");

  return (
    <picture>
      {desktop && (
        <source srcSet={desktopSrcSet} type={type} media={devices.desktop} />
      )}
      {tablet && (
        <source srcSet={tabletSrcSet} type={type} media={devices.tablet} />
      )}
      {mobile && (
        <source srcSet={mobileSrcSet} type={type} media={devices.mobile} />
      )}
      {sources && <source srcSet={sourcesSet} type={type} />}

      <Image {...delegated} src={fallback} />
    </picture>
  );
};

const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;

export default ResponsiveImage;
