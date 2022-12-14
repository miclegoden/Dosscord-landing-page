import {
  Box,
  Container,
  makeStyles,
  Typography,
  Grid,
  Button,
} from '@material-ui/core'
import { TESTIMONIALS, Testimonial } from '../constants/launch-partners'
import DownloadForOfflineIcon from '@material-ui/icons/DownloadForOffline'
import { filters } from '../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    minHeight: '60vh',
    justifyContent: 'center',
    marginBottom: 100,
    position: 'relative',
    padding: '0 20px',
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      minHeight: 'unset',
    },
  },
  featureGrid: {
    marginTop: 100,
    justifyContent: 'center',
  },
  title: {
    display: 'block',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
    },
  },
  content: {
    fontSize: 20,
    marginTop: 50,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: 16,
    },
  },
  testimonialText: {
    display: 'block',
    margin: 'auto',
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
    },
  },
  testimonial: {
    padding: theme.spacing(8),
    paddingBottom: theme.spacing(0),
    position: 'relative',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '& h6': {
        fontSize: 20,
      },
    },
  },
  testimonialQuote: {
    color: theme.palette.text.secondary,
    fontSize: 80,
    opacity: 0.2,
    transform: 'translate(-16px, 12px)',
  },
  logo: {
    filter: filters.textSecondary,
    height: 50,
    minWidth: 120,
    objectFit: 'contain',
    '&:hover': {
      filter: filters.secondary,
    },
  },
  bottomContent: {
    marginTop: '30px',
    justify: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: '30px',
    justify: 'center',
    alignItems: 'center',
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
}))

export const Testimonials = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          marginLeft={-8}
          marginRight={-8}
          position="relative"
          zIndex={2}
        >
          <Box className={classes.testimonial}>
            {TESTIMONIALS.map((testimonial: Testimonial, index: number) => (
              <Grid
                container
                spacing={6}
                alignItems="flex-start"
                className={classes.featureGrid}
              >
                {index % 2 === 0 ? (
                  <Grid
                    container
                    spacing={6}
                    alignItems="flex-start"
                    className={classes.featureGrid}
                  >
                    <Grid item sm={12} md={6}>
                      <img width="100%" src={testimonial.logo} alt="" />
                    </Grid>
                    <Grid item sm={12} md={6}>
                      <Box marginTop={6}>
                        <Typography
                          variant="subtitle1"
                          style={{ fontSize: 40 }}
                          color="textSecondary"
                        >
                          {testimonial.persona}
                        </Typography>
                      </Box>
                      <Box marginTop={2}>
                        <Typography
                          variant="subtitle1"
                          style={{ fontSize: 20 }}
                          color="textSecondary"
                        >
                          {testimonial.description}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                ) : (
                  <Grid
                    container
                    spacing={6}
                    alignItems="flex-start"
                    className={classes.featureGrid}
                  >
                    <Grid item sm={12} md={6}>
                      <Box marginTop={6}>
                        <Typography
                          variant="subtitle1"
                          style={{ fontSize: 40 }}
                          color="textSecondary"
                        >
                          {testimonial.persona}
                        </Typography>
                      </Box>
                      <Box marginTop={2}>
                        <Typography
                          variant="subtitle1"
                          style={{ fontSize: 20 }}
                          color="textSecondary"
                        >
                          {testimonial.description}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item sm={12} md={6}>
                      <img width="100%" src={testimonial.logo} alt="" />
                    </Grid>
                  </Grid>
                )}
              </Grid>
            ))}
          </Box>
        </Box>
      </Container>

      <Box marginTop={6}>
        <Typography
          className={classes.title}
          variant="h3"
          align="center"
          color="textPrimary"
        >
          RELIABLE TECH FOR STAYING CLOSE
        </Typography>

        <Typography
          className={classes.content}
          color="textSecondary"
          variant="body1"
        >
          ...where you can belong to a school club, a gaming group worldwide are
          community. Where just you and a handful of friends can spend time
          together. A place that makes it easy to talk every day and hang out
          more often
        </Typography>
        <img
          width="100%"
          src={
            process.env.PUBLIC_URL + '/imgs/assets/features/discord_img2.svg'
          }
          alt=""
        />
      </Box>
      <Box className={classes.bottomContent} marginTop={6}>
        <Typography
          className={classes.title}
          variant="h3"
          align="center"
          color="textPrimary"
        >
          Ready to start your journey?
        </Typography>
        <Grid
          className={classes.button}
          container
          justify="center"
          alignItems="center"
          spacing={6}
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
        </Grid>
      </Box>
    </Box>
  )
}
