/**
 * CustomButton Component
 *
 * This component renders a fully customizable button that supports:
 * - Displaying text and/or an icon (icon can be positioned on the left or right)
 * - Triggering an onClick event or redirecting to a specified URL (via href)
 * - Fully customizable styles including background color, text color, hover effects, border color, font size, padding, and margin
 * - Auto-detects icon-only buttons and ensures they have a square shape with a proper hover effect
 * - Default redirection opens in a new tab (target="_blank")
 *
 * Props:
 * @prop {string} [text] - The text to display on the button.
 * @prop {React.ReactNode} [icon] - An optional icon element.
 * @prop {"left" | "right"} [iconPosition='left'] - Position of the icon relative to the text.
 * @prop {string} [bgColor='bg-gray-800'] - Tailwind CSS class for the button background color.
 * @prop {string} [textColor='text-black'] - Tailwind CSS class for the text color.
 * @prop {string} [hoverBgColor='bg-yellow-500'] - Tailwind CSS class for the background color on hover.
 * @prop {string} [borderColor='border-gray-900'] - Tailwind CSS class for the border color.
 * @prop {string} [fontSize='text-[10px]'] - Tailwind CSS class for font size.
 * @prop {string} [padding='py-1 px-4'] - Tailwind CSS class for padding.
 * @prop {string} [margin='mt-[10px] ml-[6px]'] - Tailwind CSS class for margin.
 * @prop {() => void} [onClick] - A callback function that is triggered when the button is clicked.
 * @prop {string} [href] - The URL to redirect to when the button is clicked. If provided, the button renders as an anchor element.
 * @prop {"_blank" | "_self" | "_parent" | "_top"} [target='_blank'] - The target attribute for the link, defaults to "_blank".
 *
 * Usage Examples:
 *
 * // 1. Button with onClick event:
 * <CustomButton text="Click Me!" onClick={() => alert("Button Clicked!")} />
 *
 * // 2. Button that redirects to a URL (opens in a new tab by default):
 * <CustomButton text="Go to Google" href="https://www.google.com" />
 *
 * // 3. Button with icon only (square shape & proper hover effect):
 * <CustomButton icon={<FiExternalLink size={14} />} href="https://github.com" />
 *
 * // 4. Button with text and icon (icon on the right):
 * <CustomButton
 *   text="Next"
 *   icon={<FiArrowRight size={14} />}
 *   iconPosition="right"
 * />
 *
 * Note: Ensure that 'clsx' is installed (e.g., `pnpm add clsx`) and import any icon library you plan to use.
 */

import clsx from "clsx";

interface CustomButtonProps {
  text?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  borderColor?: string;
  fontSize?: string;
  padding?: string;
  margin?: string;
  rounded?:string;
  onClick?: () => void;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  icon,
  iconPosition = "left",
  bgColor = "bg-gray-800",
  textColor = "text-black",
  hoverBgColor = "bg-yellow-500",
  borderColor = "border-gray-900",
  fontSize = "text-[10px]",
  padding = "py-1 px-4",
  margin = "mt-[10px] ml-[6px]",
  rounded = "rounded-sm",
  onClick,
  href,
  target = "_blank",
}) => {
  const isIconOnly = !!icon && !text; // Detect if it's an icon-only button

  const buttonClass = clsx(
    "relative inline-flex items-center justify-center gap-1", // Fix alignment
    bgColor || "bg-pink-500", // Ensure bgColor is applied
    textColor || "text-white",
    margin || "mt-[10px] ml-[6px]",
    fontSize || "text-[10px]",
    padding || "py-1 px-4",
    rounded,
    isIconOnly && "!bg-gray-800 w-6 h-6" // Force bg color and size for icon-only buttons
  );

  const hoverClass = clsx(
    "absolute top-1 flex items-center justify-center gap-1 transition-all duration-200",
    "group-hover:cursor-pointer group-hover:mt-[5px] group-hover:ml-[5.1px] border",
    hoverBgColor,
    borderColor,
    rounded,
    textColor,
    fontSize,
    padding,
    isIconOnly && "w-6 h-6 p-0" // Ensure hover effect matches button size
  );

  const ButtonContent = (
    <>
      {iconPosition === "left" && icon}
      {text && <p>{text}</p>}
      {iconPosition === "right" && icon}
    </>
  );

  return (
    <div className="relative group">
      {href ? (
        <a
          href={href}
          target={target}
          rel="noopener noreferrer"
          className={buttonClass}
        >
          {ButtonContent}
        </a>
      ) : (
        // biome-ignore lint/a11y/useButtonType: <explanation>
        <button className={buttonClass} onClick={onClick}>
          {ButtonContent}
        </button>
      )}

      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div className={hoverClass} onClick={href ? undefined : onClick}>
        {ButtonContent}
      </div>
    </div>
  );
};

export default CustomButton;
