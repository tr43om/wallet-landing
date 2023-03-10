import styled, { useTheme } from "styled-components";

interface ResponsiveImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback: string;
  type?: string;
  desktop?: string;
  mobile: string;
  tablet?: string;
}

const ResponsiveImage = ({
  fallback,
  type,
  desktop,
  mobile,
  tablet,
  ...delegated
}: ResponsiveImageProps) => {
  const { devices } = useTheme();

  return (
    <picture>
      {desktop && (
        <source srcSet={desktop} type={type} media={devices.desktop} />
      )}
      {tablet && <source srcSet={tablet} type={type} media={devices.tablet} />}
      {mobile && <source srcSet={mobile} type={type} media={devices.mobile} />}
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
