import BaseButton, { BaseButtonProps } from "@/components/base/BaseButton";

const SecondaryButton = (props: BaseButtonProps) => {
  const className = `SecondaryButton ${props.className || ""}`;

  return (
    <BaseButton
      color="secondary"
      variant="text"
      {...props}
      className={className}
    >
      {props.children}
    </BaseButton>
  );
};

export default SecondaryButton;
