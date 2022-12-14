import { Parallax } from 'react-scroll-parallax'
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import DownloadForOfflineIcon from '@material-ui/icons/DownloadForOffline'
import { polywrapPalette } from '../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    margin: 'auto',
    maxWidth: theme.breakpoints.values.lg,
    paddingLeft: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      minHeight: 'unset',
      padding: '0',
    },
    [theme.breakpoints.up('xs')]: {
      maxWidth: '90vw',
    },
  },
  heroPolywrapper: {
    display: 'flex',
    marginLeft: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    objectFit: 'cover',
    height: 'auto',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      aspectRatio: '3/2',
      maxWidth: '60vw',
      margin: '80px auto 20px',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 20,
      marginTop: 100,
    },
  },

  buttonGroup: {
    display: 'flex',
    marginTop: '30px',
  },
  heroTitle: {
    fontWeight: 900,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      fontSize: 48,
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginTop: 10,
      fontSize: 28,
    },
  },
  heroBody: {
    fontSize: 20,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: 16,
    },
  },
  heroSignUpFlex: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  heroTextField: {
    borderRadius: '99px 16px 16px 99px',
    maxWidth: 400,
    width: '100%',
    '& .MuiInput-input': {
      height: 38,
    },
  },
  downloadButton: {
    borderRadius: 999,
    fontSize: 18,
    padding: '9px 28px',
    marginTop: 40,
    marginRight: 30,
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      marginTop: 12,
      marginRight: 0,
      fontSize: 14,
    },
  },
  openDiscordButton: {
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 999,
    fontSize: 18,
    padding: '9px 28px',
    marginTop: 40,
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      marginTop: 12,
      fontSize: 14,
    },
  },
  heroSignupSuccess: {
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 8,
    boxShadow: `0 8px 16px ${polywrapPalette.secondary[900]}88`,
    fontWeight: 700,
    padding: 8,
    width: '100%',
  },
  technicalPreview: {
    color: polywrapPalette.secondary.end,
    fontWeight: 700,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    paddingLeft: 2, // Optical alignment with 'A' below
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: 12,
    },
  },
  '@keyframes fadeInUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(5%)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0%)',
    },
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0)',
      transitionTimingFunction: 'ease-in',
    },
    '50%': {
      transform: 'translateY(-3%)',
      transitionTimingFunction: 'ease-out',
    },
  },
  heroContent: {
    animation: `$fadeInUp 1s 1s forwards ease-in`,
    opacity: 0,
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  heroIllustration: {
    animation: `$float 6s infinite`,
    [theme.breakpoints.down('sm')]: {
      order: -1,
    },
  },
  errorText: {
    color: '#f44336',
  },
}))

export const Hero = () => {
  const theme = useTheme()
  const classes = useStyles()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <Grid
      className={classes.root}
      container
      justify="center"
      alignItems="center"
      spacing={6}
      direction={matches ? 'row-reverse' : 'row'}
    >
      <Grid item md={1}></Grid>
      <Grid item sm={12} md={10}>
        <Parallax
          y={[60, -60]}
          disabled={window.innerWidth < theme.breakpoints.values.md}
        >
          <Box className={classes.heroContent}>
            <Typography
              className={classes.heroTitle}
              color="textPrimary"
              variant="h1"
            >
              IMAGINE A PLACE...
            </Typography>
            <Typography
              className={classes.heroBody}
              color="textSecondary"
              variant="body1"
            >
              ...where you can belong to a school club, a gaming group worldwide
              are community. Where just you and a handful of friends can spend
              time together. A place that makes it easy to talk every day and
              hang out more often
            </Typography>
            <Grid
              className={classes.buttonGroup}
              container
              justify="center"
              alignItems="center"
              spacing={6}
              direction={matches ? 'row-reverse' : 'row'}
            >
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
              <Button
                className={classes.openDiscordButton}
                href="https://discord.gg/bGsqQrNhqd"
                target="_blank"
                rel="noredirect"
                type="submit"
                variant="contained"
              >
                Open Discord in your browser
              </Button>
            </Grid>
          </Box>
        </Parallax>
      </Grid>
      <Grid item md={1}></Grid>
    </Grid>
  )
}
