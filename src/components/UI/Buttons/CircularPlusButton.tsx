import BaseButton, { BaseButtonProps } from "@/components/base/BaseButton";
import styles from "./Buttons.module.scss";
import { Add } from "@mui/icons-material";

const CircularPlusButton = (props: BaseButtonProps) => {
  const className = `${styles.CircularPlusButton} ${props.className || ""}`;

  return (
    <BaseButton
      color="purple"
      {...props}
      className={className}
      
    >
      <Add className={styles.plus} />
    </BaseButton>
  );
};

export default CircularPlusButton;
