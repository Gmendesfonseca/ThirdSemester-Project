import {
  AddCircleOutline, //Tune
} from "@mui/icons-material";
import { Button, Toolbar, Typography, alpha } from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface EnhancedTableToolbarProps {
  title: string;
  name: string;
}
export function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const navigate = useNavigate();

  const handleClicked = () => {
    navigate("/branch/register");
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(props.name && {
          bgcolor: "#403d39",
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
      </>
    </Toolbar>
  );
}
