import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Video from './video.svg'
import Image from './image.svg'
import Audio from './headphones.svg'
import Text from './filetext.svg'

export default function AddButton() {
const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    <Fab  className="add" color="secondary" aria-label="add" onClick={handleClick}>
        <AddIcon />
      </Fab>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{display:"flex"}}
      >
      <div style={{display:"flex"}}>
        <MenuItem onClick={handleClose}><img src={Audio} />Audio</MenuItem>
        <MenuItem onClick={handleClose}><img src={Video} />Video</MenuItem>
        <MenuItem onClick={handleClose}><img src={Text} />Text</MenuItem>
        <MenuItem onClick={handleClose}><img src={Image} />Image</MenuItem>
      </div>
        </Menu>
    </div>
  );
}
