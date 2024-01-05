import { PropsWithChildren } from "react";
import { Dialog, DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { closeModal } from "../../store/modalSlice";
import { resetUserForm } from "@/store/userFormSlice";

interface ModalProps {
  title?: string;
}

const BaseModal = (props: PropsWithChildren<ModalProps>) => {
  const { isOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const closeModalHandler = () => {
    dispatch(closeModal());
    dispatch(resetUserForm());
  };

  return (
    <Dialog open={isOpen} className="BaseModal" fullWidth>
      <CloseIcon onClick={closeModalHandler} className="close" />
      <DialogTitle>{props.title}</DialogTitle>
      {props.children}
    </Dialog>
  );
};
export default BaseModal;
