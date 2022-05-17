/*-----------IMPORT COMPONENTS-----------*/
import ContainerAvatares from "./ContainerAvatares";
/*-----------IMPORT MUI & CSS-----------*/
import { Modal, Grid } from "@mui/material";
import { BoxStyledEditProfile } from "../../Style/StyledComponents";

export default function ModalEditProfile(props: any) {
  let { handleClose, open, userInfo, setUserInfo, avatar, setAvatar } = props;
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <BoxStyledEditProfile>
              <ContainerAvatares
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                avatar={avatar}
                setAvatar={setAvatar}
                handleClose={handleClose}
              />
            </BoxStyledEditProfile>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}
