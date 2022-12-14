import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  Button,
} from '@material-ui/core'
import { EmailForm } from './EmailForm'
import { polywrapPalette } from '../theme'
import Divider from '@mui/material/Divider'
import { makeStyles } from '@material-ui/core/styles'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: `${polywrapPalette.secondary[1000]}85`,
    padding: `${theme.spacing(8)}px ${theme.spacing(5)}px`,
    zIndex: 2,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginLeft: -theme.spacing(3),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      width: `calc(100% + ${theme.spacing(3) * 2}px)`,
    },
  },
  cell: {},
  logo: {
    width: 'auto',
    height: '48px',
    cursor: 'pointer',
    transition: 'opacity 0.25s ease-in-out',
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(4),
    },
    '&:hover': {
      opacity: 0.8,
    },
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '50px',
    marginRight: 20,
    '&:last-of-type': {
      marginRight: 0,
    },
  },
  socialButton: {
    display: 'flex',
    justifyContent: 'flex',
  },
  social: {
    cursor: 'pointer',
    fontSize: 24,
    marginRight: theme.spacing(6),
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  navLink: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1,
    marginTop: theme.spacing(3),
    transition: 'color 0.25s ease-in-out',
    '&:hover': {
      color: polywrapPalette.primary.start,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  footerDivider: {
    backgroundColor: theme.palette.primary.main,
    height: 4,
    marginBottom: theme.spacing(4),
    width: theme.spacing(4),
  },
  footerLink: {
    display: 'block',
    fontSize: 14,
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  bottom: {
    marginTop: 50,
    borderTop: '2 solid #f44336',
    padding: 20,
  },
  navButton: {
    backgroundColor: polywrapPalette.primary.mid,
    borderRadius: 999,
    fontWeight: 700,

    [theme.breakpoints.down('xs')]: {
      fontSize: 10,
    },
  },
}))

export const Footer = () => {
  const classes = useStyles()

  return (
    <Box component="footer" className={classes.root}>
      <Container className={classes.cell}>
        <Grid container justify="space-between" spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle1"
              style={{ fontSize: 40 }}
              color="textSecondary"
            >
              IMAGINE A PLACE
            </Typography>
            <Box className={classes.socialContainer} marginTop={3}>
              <Grid container spacing={4}>
                <Grid className={classes.socialButton} item xs={12} md={6}>
                  <TwitterIcon className={classes.social} />
                  <InstagramIcon className={classes.social} />
                  <FacebookIcon className={classes.social} />
                  <YouTubeIcon className={classes.social} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            {/* <Typography variant="h4">Get Wrapped</Typography> */}
            <Box marginTop={2} marginBottom={6}>
              <Grid container spacing={4}>
                <Grid item xs={6} sm={3}>
                  <Typography variant="h6">Product</Typography>
                  <Box marginTop={2}>
                    <Box className={classes.footerDivider} />
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href="https://docs.polywrap.io/"
                      target="_blank"
                      color="textPrimary"
                      variant="body1"
                    >
                      Download
                    </Link>
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href="https://github.com/polywrap/demos"
                      target="_blank"
                      color="textPrimary"
                      variant="body1"
                    >
                      Nitro
                    </Link>
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href="https://github.com/polywrap/integrations"
                      target="_blank"
                      color="textPrimary"
                      variant="body1"
                    >
                      Status
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography variant="h6">Company</Typography>
                  <Box marginTop={2}>
                    <Box className={classes.footerDivider} />
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href="https://discord.com/invite/Z5m88a5qWu"
                      target="_blank"
                      color="textPrimary"
                      variant="body1"
                    >
                      About
                    </Link>
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href="https://twitter.com/polywrap_io"
                      target="_blank"
                      color="textPrimary"
                      variant="body1"
                    >
                      Jobs
                    </Link>
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href="https://blog.polywrap.io/"
                      target="_blank"
                      color="textPrimary"
                      variant="body1"
                    >
                      Branding
                    </Link>
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href="https://eyes.polywrap.io/"
                      target="_blank"
                      color="textPrimary"
                      variant="body1"
                    >
                      Newsroom
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography variant="h6">Resource</Typography>
                  <Box marginTop={2}>
                    <Box className={classes.footerDivider} />
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href="https://handbook.polywrap.io"
                      target="_blank"
                      color="textPrimary"
                      variant="body1"
                    >
                      College
                    </Link>
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href="https://forum.polywrap.io"
                      target="_blank"
                      color="textPrimary"
                      variant="body1"
                    >
                      Support
                    </Link>
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href="https://snapshot.org/#/polywrap.eth"
                      target="_blank"
                      color="textPrimary"
                      variant="body1"
                    >
                      Safety
                    </Link>
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href="https://gnosis-safe.io/app/#/safes/0x8c3FA50473065f1D90f186cA8ba1Aa76Aee409Bb/balances"
                      target="_blank"
                      color="textPrimary"
                      variant="body1"
                    >
                      Blog
                    </Link>
                  </Box>
                  <Link
                    className={`${classes.navLink} ${classes.footerLink}`}
                    href="https://gnosis-safe.io/app/#/safes/0x8c3FA50473065f1D90f186cA8ba1Aa76Aee409Bb/balances"
                    target="_blank"
                    color="textPrimary"
                    variant="body1"
                  >
                    Feedback
                  </Link>
                  <Link
                    className={`${classes.navLink} ${classes.footerLink}`}
                    href="https://gnosis-safe.io/app/#/safes/0x8c3FA50473065f1D90f186cA8ba1Aa76Aee409Bb/balances"
                    target="_blank"
                    color="textPrimary"
                    variant="body1"
                  >
                    Developers
                  </Link>
                  <Link
                    className={`${classes.navLink} ${classes.footerLink}`}
                    href="https://gnosis-safe.io/app/#/safes/0x8c3FA50473065f1D90f186cA8ba1Aa76Aee409Bb/balances"
                    target="_blank"
                    color="textPrimary"
                    variant="body1"
                  >
                    StreamKit
                  </Link>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography variant="h6">Policies</Typography>
                  <Box marginTop={2}>
                    <Box className={classes.footerDivider} />
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href="https://handbook.polywrap.io"
                      target="_blank"
                      color="textPrimary"
                      variant="body1"
                    >
                      Terms
                    </Link>
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href="https://forum.polywrap.io"
                      target="_blank"
                      color="textPrimary"
                      variant="body1"
                    >
                      Privacy
                    </Link>
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href="https://snapshot.org/#/polywrap.eth"
                      target="_blank"
                      color="textPrimary"
                      variant="body1"
                    >
                      Cookie Settings
                    </Link>
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href="https://gnosis-safe.io/app/#/safes/0x8c3FA50473065f1D90f186cA8ba1Aa76Aee409Bb/balances"
                      target="_blank"
                      color="textPrimary"
                      variant="body1"
                    >
                      Guidelines
                    </Link>
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href="https://gnosis-safe.io/app/#/safes/0x8c3FA50473065f1D90f186cA8ba1Aa76Aee409Bb/balances"
                      target="_blank"
                      color="textPrimary"
                      variant="body1"
                    >
                      Acknowledgements
                    </Link>
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href="https://gnosis-safe.io/app/#/safes/0x8c3FA50473065f1D90f186cA8ba1Aa76Aee409Bb/balances"
                      target="_blank"
                      color="textPrimary"
                      variant="body1"
                    >
                      Licenses
                    </Link>
                    <Link
                      className={`${classes.navLink} ${classes.footerLink}`}
                      href="https://gnosis-safe.io/app/#/safes/0x8c3FA50473065f1D90f186cA8ba1Aa76Aee409Bb/balances"
                      target="_blank"
                      color="textPrimary"
                      variant="body1"
                    >
                      Moderation
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Divider />
        <Box className={classes.bottom}>
          <Grid container justify="space-between" spacing={6}>
            <Typography variant="h6">Discord</Typography>
            <Button
              href="https://contribute.polywrap.io/"
              target="_blank"
              rel="noredirect"
              variant="contained"
              className={classes.navButton}
            >
              Open Discord
            </Button>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
