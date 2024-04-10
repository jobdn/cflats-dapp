import Zoom from "@mui/material/Zoom";
import Modal from "@mui/material/Modal";
import { useConnect } from "wagmi";

import { config } from "@/shared/config/wagmi";
import { WalletItem } from "../WalletItem/WalletItem";

import classes from "./ConnectWalletModal.module.scss";
import type { PortalProps } from "@mui/material";

type ConnectWalletModalProps = {
  modalIsOpen: boolean;
  container: PortalProps["container"];
  onClose: () => void;
};

const ConnectWalletModal = (props: ConnectWalletModalProps) => {
  const { modalIsOpen, container, onClose } = props;

  const { connectors } = useConnect({ config });

  return (
    <Modal
      open={modalIsOpen}
      onClose={onClose}
      classes={{ root: classes.rootModal, backdrop: classes.backdropModal }}
      container={container}
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
