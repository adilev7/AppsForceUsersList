import BaseButton, { BaseButtonProps } from "@/components/base/BaseButton";

const PrimaryButton = (props: BaseButtonProps) => {
  const className = `PrimaryButton ${props.className || ""}`;

  return (
    <BaseButton color="green" {...props} className={className}>
      {props.children}
    </BaseButton>
  );
};

export default PrimaryButton;
