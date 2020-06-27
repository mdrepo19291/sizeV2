import React, { useState } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Collapse,
         List,
         ListItem,
         ListItemText,
         ListItemIcon,
         Divider
         } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import PetsIcon from '@material-ui/icons/Pets';
import FaceIcon from '@material-ui/icons/Face';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import PublicIcon from '@material-ui/icons/Public';
import DeckIcon from '@material-ui/icons/Deck';
import FlareIcon from '@material-ui/icons/Flare';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';


const navLinks = [
    //  {name:'New',type:'link',link:'add-document'},
      {name:'Top 10',      link:'top10',   icon:'fa fa-list-ol'},
      {name:'Comparision', link:'compare',  icon:<ViewCarouselIcon style={{ color: green[500] }}/>},
      {name:'Videos',      link:'videos',   icon:'fa fa-play'},
]
const navMoreColor = "primary";
const navLinksMore = [
      {name:'Sports',      link:'sports',   icon:<SportsFootballIcon color={navMoreColor} fontSize="small"/>,},
      {name:'Animals',     link:'animals',  icon:<PetsIcon color={navMoreColor} fontSize="small"/>,},
      {name:'Military',    link:'military', icon:<MDBIcon icon="fighter-jet" style={{color:'#3f51b5'}}/>,},
      {name:'Superhero',   link:'superhero',icon:<EmojiPeopleIcon color={navMoreColor} fontSize="small"/>,},
      {name:'Anime',       link:'anime',    icon:<FaceIcon color={navMoreColor} fontSize="small"/>,},
      {name:'Monsters',    link:'monsters', icon:<MDBIcon icon="pastafarianism" style={{color:'#3f51b5'}}/>,},
      {name:'Gaming',      link:'gaming',   icon:<SportsEsportsIcon color={navMoreColor} fontSize="small"/>,},
      {name:'Countries',   link:'countries',icon:<PublicIcon color={navMoreColor} fontSize="small"/>,},
      {name:'Geography',   link:'geography',icon:<FilterHdrIcon color={navMoreColor} fontSize="small"/>,},
      {name:'Space',       link:'space',    icon:<FlareIcon color={navMoreColor} fontSize="small"/>,},
      {name:'Infrastractures', link:'infrastructure', icon:<DeckIcon color={navMoreColor} fontSize="small"/>,},
    ]

const NavBar = () => {

    const matches = useMediaQuery('(min-width:768px)');
    const [ isOpen, setIsOpen ] = useState<boolean>(false);
    const [ sidebarDrop, setSidebarDrop ] = useState<boolean>(false);

    // Toggle the SideBar (on small devices)
    const toggleDrawer = (open: boolean) => (
          event: React.KeyboardEvent | React.MouseEvent | React.SyntheticEvent<MouseEvent>,
          // event: React.SyntheticEvent<MouseEvent> 
          //      | React.SyntheticEvent<MouseEvent, Event>
          //      | React.MouseEvent<HTMLDivElement, MouseEvent>
          //      | React.KeyboardEvent<HTMLDivElement>
        ) => { 
          if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
              (event as React.KeyboardEvent).key === 'Shift')
          ) {
            return;
          }
          console.log(event.target);
          setIsOpen(open);
    };

  return (
      <MDBNavbar color="cyan accent-3" light expand="md" fixed="top" scrolling transparent>
        <MDBNavbarBrand className="ml-2" href={"/"}>
          {/* <strong className="white-text"></strong> */}
          <img src={"/data/images/logo.png"} style={{height:'2rem'}} alt="Logo" />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleDrawer(true)} />
            <MDBCollapse id="navbarCollapse3" isOpen={false} navbar >
                {
                    matches
                    ? // Show Nav Menu for large devices
                    <MDBNavbarNav right>
                            {   navLinks.map( link =>
                                    <MDBNavItem>
                                        <MDBNavLink to={"/"+link.link} className="mr-1">{link.name}</MDBNavLink>
                                    </MDBNavItem>
                                )
                            }
                            <MDBNavItem>
                              <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    Categories
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default" right>
                                    {   navLinksMore.map( link => 
                                            <MDBDropdownItem href={`/category/${link.link}`}>{link.name}</MDBDropdownItem>
                                        )
                                    }
                                </MDBDropdownMenu>
                              </MDBDropdown>
                            </MDBNavItem>
                            <MDBNavItem className="ml-4">
                                <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <MDBIcon icon="user-circle" size="lg" />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default">
                                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                    </MDBNavbarNav>
                    : // Show Left Drawer for small media devices
                    <SwipeableDrawer
                        anchor={'left'}
                        open={isOpen}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                      > 
                        <div
                            className=""
                            role="presentation"
                            onClick={toggleDrawer(false)}
                            onKeyDown={toggleDrawer(false)}
                            >
                            <List>
                                {
                                navLinks.map( link => 
                                    <Link to={"/"+link.link}>
                                      <ListItem button key={link.link}>
                                      <ListItemIcon>
                                          {
                                              typeof link.icon === 'string'
                                              ? <Icon className={link.icon} style={{ color: green[500] }} fontSize="small"/>
                                              : link.icon
                                          }
                                      </ListItemIcon>
                                        <ListItemText primary={link.name} />
                                      </ListItem>
                                    </Link>)
                                }
                            </List>
                            <Divider />
                        </div>
                            <ListItem button onClick={()=>setSidebarDrop(!sidebarDrop)}>
                                <ListItemIcon><InboxIcon color="primary"/></ListItemIcon>
                                <ListItemText primary="Categories" />
                                {sidebarDrop ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={sidebarDrop} timeout="auto" unmountOnExit>
                              <div 
                                onClick={toggleDrawer(false)}
                                onKeyDown={toggleDrawer(false)}>
                                <List component="div" disablePadding>
                                    {
                                      navLinksMore.map( link =>
                                        <Link to={`/category/${link.link}`}>
                                          <ListItem button key={link.link} className="pl-5">
                                            <ListItemIcon>
                                              {link.icon}
                                              {/* <Icon className="fa fa-plus-circle" color="primary" fontSize="small"/> */}
                                            </ListItemIcon>
                                            <ListItemText primary={link.name} />
                                          </ListItem>
                                        </Link>)
                                    }
                                </List>
                              </div>
                            </Collapse>
                    </SwipeableDrawer>
                }
            
            </MDBCollapse>
      </MDBNavbar>
    );
}

export default NavBar;