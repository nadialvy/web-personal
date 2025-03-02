"use client";

import clsxm from "clsx";
import Image, { type ImageProps } from "next/image";

type NextImageProps = {
  useSkeleton?: boolean;
  imgClassName?: string;
  serverStaticImg?: boolean;
  blurClassName?: string;
  alt: string;
  width: string | number;
  isAWSAsset?: boolean;
  loading?: "lazy" | "eager";
  priority?: boolean;
} & (
  | { width: string | number; height: string | number }
  | { layout: "fill"; width?: string | number; height?: string | number }
) &
  ImageProps;

/**
 *
 * @description Must set width using `w-` className
 */
export default function NextImage({
  src,
  width,
  height,
  alt,
  className,
  imgClassName,
  loading = "lazy",
  priority = false,
  ...rest
}: NextImageProps) {
  const widthIsSet = className?.includes("w-") ?? false;

  return (
    <figure
      style={!widthIsSet ? { width: `${width}px` } : undefined}
      className={className}
    >
      <Image
        className={clsxm(imgClassName)}
        src={`/images${src}`}
        width={width}
        height={height}
        alt={alt}
        loading={loading}
        priority={priority}
        {...rest}
      />
    </figure>
  );
}
