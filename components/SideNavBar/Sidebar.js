import { useEffect, useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home as HomeIcon, Inbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material';
import NoSSR from 'react-no-ssr';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
console.log("sidebar called");
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(open);
  };

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  useEffect(() => {
    console.log('Menu component mounted');

    // Add any initialization logic here

    return () => {
      console.log('Menu component unmounted');

      // Add any cleanup logic here
    };
  }, []);
  const sideList = () => (
    <List>
      <ListItem
        button
        selected={selectedItem === 0}
        onClick={() => handleItemClick(0)}
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem
        button
        selected={selectedItem === 1}
        onClick={() => handleItemClick(1)}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem
        button
        selected={selectedItem === 2}
        onClick={() => handleItemClick(2)}
      >
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Mail" />
      </ListItem>
    </List>
  );

  return (
    <div>
      {/* <button onClick={toggleDrawer(true)}>Open Sidebar</button> */}
      {/* <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}> */}
        {sideList()}
      {/* </Drawer> */}
    </div>
  );
};
const MenuWithNoSSR = () => (
    <NoSSR onSSR={<div>Loading...</div>}>
      <Sidebar />
    </NoSSR>
  );
  
  export default MenuWithNoSSR;
