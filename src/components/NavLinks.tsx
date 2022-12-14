import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Link, useMediaQuery, useTheme } from '@material-ui/core'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import DownloadForOfflineIcon from '@material-ui/icons/DownloadForOffline'
import { polywrapPalette } from '../theme'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'

type Anchor = 'right'

const useStyles = makeStyles((theme) => ({
  navLink: {
    fontSize: 14,
    fontWeight: 700,
    marginRight: theme.spacing(6),
    transition: 'color 0.25s ease-in-out',
    '&:hover': {
      color: polywrapPalette.primary.start,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
      marginRight: theme.spacing(2),
    },
  },
  navButton: {
    backgroundColor: polywrapPalette.primary.mid,
    borderRadius: 999,
    fontWeight: 700,
    // [theme.breakpoints.down('xs')]: {
    //   display: 'none',
    // },
  },
  downloadButton: {
    borderRadius: 999,
    fontSize: 12,
    padding: '9px 15px',
    marginTop: 40,
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      marginTop: 40,
      fontSize: 12,
    },
  },
  menu: {
    width: 250,
    paddingLeft: 20,
  },
}))

interface NavLinkProps {
  type?: 'footer'
  scrollPosition: number
}

export const NavLinks = (props: NavLinkProps) => {
  const theme = useTheme(),
    // scrollPosition = props.scrollPosition,
    isMobile = useMediaQuery(theme.breakpoints.down('md'), {
      defaultMatches: true,
    }),
    classes = useStyles()

  const [state, setState] = useState(false)

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setState(open)
  }

  const menuList = [
    'Download',
    'Nitor',
    'Discover',
    'Safety',
    'Support',
    'Blog',
    'Career',
  ]

  const list = (anchor: Anchor) => (
    <Box
      className={classes.menu}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <p>Discord</p>
      <Divider />
      <List>
        {menuList.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Button
        className={classes.downloadButton}
        href="https://discord.gg/bGsqQrNhqd"
        target="_blank"
        rel="noredirect"
        startIcon={<DownloadForOfflineIcon />}
        type="submit"
        variant="contained"
      >
        Download for Windows
      </Button>
    </Box>
  )

  return (
    <Box display="flex" alignItems="center" flexWrap="">
      <Link
        className={classes.navLink}
        href=""
        target="_blank"
        rel="noredirect"
        color="textSecondary"
        variant="body1"
        style={{ display: `${!isMobile ? 'flex' : 'none'}` }}
      >
        Download
      </Link>
      <Link
        className={classes.navLink}
        href=""
        target="_blank"
        rel="noredirect"
        color="textSecondary"
        variant="body1"
        style={{ display: `${!isMobile ? 'flex' : 'none'}` }}
      >
        Nitro
      </Link>
      <Link
        className={classes.navLink}
        href=""
        target="_blank"
        rel="noredirect"
        color="textSecondary"
        variant="body1"
        style={{ display: `${!isMobile ? 'flex' : 'none'}` }}
      >
        Discover
      </Link>
      <Link
        className={classes.navLink}
        href=""
        target="_blank"
        rel="noredirect"
        color="textSecondary"
        variant="body1"
        style={{ display: `${!isMobile ? 'flex' : 'none'}` }}
      >
        Safety
      </Link>
      <Link
        className={classes.navLink}
        href=""
        target="_blank"
        rel="noredirect"
        color="textSecondary"
        variant="body1"
        style={{ display: `${!isMobile ? 'flex' : 'none'}` }}
      >
        Support
      </Link>
      <Link
        className={classes.navLink}
        href=""
        target="_blank"
        rel="noredirect"
        color="textSecondary"
        variant="body1"
        style={{ display: `${!isMobile ? 'flex' : 'none'}` }}
      >
        Blog
      </Link>
      <Link
        className={classes.navLink}
        href=""
        target="_blank"
        rel="noredirect"
        color="textSecondary"
        variant="body1"
        style={{ display: `${!isMobile ? 'flex' : 'none'}` }}
      >
        Career
      </Link>

      <Button
        href=""
        target="_blank"
        rel="noredirect"
        variant="contained"
        className={classes.navButton}
      >
        Open Discord
      </Button>
      <IconButton
        onClick={toggleDrawer('right', true)}
        color="inherit"
        aria-label="showMenu"
        component="label"
        style={{ display: `${isMobile ? 'flex' : 'none'}` }}
      >
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        anchor="right"
        open={state}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {list('right')}
      </SwipeableDrawer>
    </Box>
  )
}
