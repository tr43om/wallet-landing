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
  type = "image/webp",
  desktop,
  mobile,
  tablet,
  sources,

  ...delegated
}: ResponsiveImageProps) => {
  const { devices } = useTheme();

  const makeSrcset = (sources: string[] | string | undefined) => {
    if (!sources) return "";

    return typeof sources === "string"
      ? sources
      : sources.map((q, i) => `${q} ${i + 1}x`).join(", ");
  };

  return (
    <picture>
      {desktop && (
        <source
          srcSet={makeSrcset(desktop)}
          type={type}
          media={devices.desktop}
        />
      )}
      {tablet && (
        <source
          srcSet={makeSrcset(tablet)}
          type={type}
          media={devices.tablet}
        />
      )}
      {mobile && (
        <source
          srcSet={makeSrcset(mobile)}
          type={type}
          media={devices.mobile}
        />
      )}
      {sources && <source srcSet={makeSrcset(sources)} type={type} />}

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
