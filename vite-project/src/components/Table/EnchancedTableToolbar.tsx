import {
  AddCircleOutline, //Tune
} from "@mui/icons-material";
import { Button, Toolbar, Typography, alpha } from "@mui/material";
import { useState } from "react";
import InModalRegisterStudent from "../Modal/Register/RegisterStudent";
import InModalRegisterProfessor from "../Modal/Register/RegisterProfessor";
import InModalRegisterBranch from "../Modal/Register/RegisterBranch";

export interface EnhancedTableToolbarProps {
  title: string;
  name: string | null;
}
export function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const [openRegister, setOpenRegister] = useState(false);

  const handleClicked = () => {
    setOpenRegister(true);
  };

  const handleClose = () => {
    setOpenRegister(false);
  };

  return (
    <Toolbar
      sx={{
        marginTop: 2,
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(props.name && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {props.title}
      </Typography>
      <>
        {props.name ? (
          <Button variant="contained" color="primary" onClick={handleClicked}>
            <AddCircleOutline />
            <Typography
              variant="button"
              id="tableTitle"
              component="div"
              style={{ width: "200px" }}
              sx={{ pr: -3, pl: -3 }}
            >
              {props.name}
            </Typography>
          </Button>
        ) : null}
        {/* <Button style={{ color: 'black' }}>
          <Tune />
          <Typography
            variant="button"
            id="tableTitle"
            component="div"
            style={{ width: '150px' }}
          >
            Filtros
          </Typography>
        </Button> */}
        {props.title === "Alunos" ? (
          <InModalRegisterStudent
            title={props.name}
            opened={openRegister}
            onClose={handleClose}
          />
        ) : props.title === "Professores" ? (
          <InModalRegisterProfessor
            title={props.name}
            opened={openRegister}
            onClose={handleClose}
          />
        ) : props.title === "Unidades" ? (
          <InModalRegisterBranch
            title={props.name}
            opened={openRegister}
            onClose={handleClose}
          />
        ) : null}
      </>
    </Toolbar>
  );
}
