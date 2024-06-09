import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, MenuItem } from '@mui/material';
import React from 'react';
import InMenu from '../Menu/Menu';
import { InModalDelete } from '../Modal/DeleteModal';
import { getProfessor, getStudent } from '../../services/login';
import { getBranch } from '../../services/lists/branch/request';
import InModalEditStudent from '../Modal/Edit/EditStudent';
import InModalViewStudent from '../Modal/View/ViewStudent';

interface MorePropsInterface {
  id: number;
  idMore: number;
  type: string;
}

export const More = (props: MorePropsInterface) => {
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openView, setOpenView] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [data, setData] = React.useState({});

  const handleDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleCloseView = () => {
    setOpenView(false);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleView = () => {
    if (props.type === 'Aluno') {
      getStudent(props.id).then((res) => {
        setData(res);
        setOpenView(true);
      });
    } else if (props.type === 'Professor') {
      getProfessor(props.id).then((res) => {
        setData(res);
        setOpenView(true);
      });
    } else if (props.type === 'Unidade') {
      getBranch(props.id).then((res) => {
        setData(res);
        setOpenView(true);
      });
    }
  };

  const handleEdit = () => {
    if (props.type === 'Aluno') {
      getStudent(props.id).then((res) => {
        setData(res);
        setOpenEdit(true);
        setOpenView(false);
      });
    } else if (props.type === 'Professor') {
      getProfessor(props.id).then((res) => {
        setData(res);
        setOpenEdit(true);
        setOpenView(false);
      });
    } else if (props.type === 'Unidade') {
      getBranch(props.id).then((res) => {
        setData(res);
        setOpenEdit(true);
        setOpenView(false);
      });
    }
  };

  return (
    <>
      <InMenu
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        renderAnchor={({ openMenu }) => (
          <IconButton
            id={`more-${props.idMore}`}
            size="small"
            onClick={(ev) => {
              ev.stopPropagation();
              openMenu(ev);
            }}
          >
            <MoreVertIcon />
          </IconButton>
        )}
      >
        <MenuItem id="view" onClick={() => handleView()}>
          Visualizar
        </MenuItem>
        <MenuItem id="edit" onClick={() => handleEdit()}>
          Editar
        </MenuItem>
        <MenuItem id="delete" onClick={() => handleDelete()}>
          Deletar
        </MenuItem>
      </InMenu>
      {props.type === 'Aluno' ? (
        <>
          <InModalViewStudent
            actualData={data}
            title={props.type}
            open={openView}
            onClose={handleCloseView}
          />
          <InModalEditStudent
            actualData={data}
            title={props.type}
            open={openEdit}
            onClose={handleCloseEdit}
          />
        </>
      ) : props.type === 'Professor' ? (
        <>
          <InModalViewStudent
            actualData={data}
            title={props.type}
            open={openView}
            onClose={handleCloseView}
          />
          <InModalEditStudent
            actualData={data}
            title={props.type}
            open={openEdit}
            onClose={handleCloseEdit}
          />
        </>
      ) : props.type === 'Unidade' ? (
        <>
          <InModalViewStudent
            actualData={data}
            title={props.type}
            open={openView}
            onClose={handleCloseView}
          />
          <InModalEditStudent
            actualData={data}
            title={props.type}
            open={openEdit}
            onClose={handleCloseEdit}
          />
        </>
      ) : null}
      <InModalDelete
        id={props.id}
        title={props.type}
        open={openDelete}
        onOpen={handleDelete}
        onClose={handleCloseDelete}
      />
    </>
  );
};
