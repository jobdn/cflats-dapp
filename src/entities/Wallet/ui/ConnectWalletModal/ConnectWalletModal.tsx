import Zoom from "@mui/material/Zoom";
import Modal from "@mui/material/Modal";
import { useConnect } from "wagmi";

import { config } from "@/shared/config/wagmi";
import { WalletItem } from "../WalletItem/WalletItem";

import classes from "./ConnectWalletModal.module.scss";

type ConnectWalletModalProps = {
  modalIsOpen: boolean;
  onClose: () => void;
};

const ConnectWalletModal = (props: ConnectWalletModalProps) => {
  const { modalIsOpen, onClose } = props;

  const { connectors } = useConnect({ config });

  return (
    <Modal
      open={modalIsOpen}
      onClose={onClose}
      classes={{ root: classes.rootModal }}
      disablePortal
    >
      <Zoom in={modalIsOpen}>
        <div className={classes.modalContent}>
          {connectors.map((connector) => (
            <WalletItem
              key={connector.uid}
              connector={connector}
              closeModal={onClose}
            />
          ))}
        </div>
      </Zoom>
    </Modal>
  );
};

export default ConnectWalletModal;
