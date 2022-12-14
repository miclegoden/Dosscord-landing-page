import { Box, Grid, makeStyles, Typography, useTheme } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'center',
    marginBottom: 100,
    position: 'relative',
    padding: '0 20px',
    zIndex: 0,
    marginTop: 80,
    [theme.breakpoints.down('sm')]: {
      marginTop: 100,
      minHeight: 'unset',
    },
  },
  blurredPoly: {
    right: '-10%',
    opacity: '0.2',
    position: 'absolute',
    top: '-30%',
    width: '40vw',
    zIndex: 0,
  },
  cell: {
    margin: '64px  0',
    maxWidth: theme.breakpoints.values.md,
    position: 'relative',
  },
  featureGrid: {
    justifyContent: 'center',
  },
  featureItem: {
    position: 'relative',
  },
  featureIconContainer: {
    height: 96,
    margin: 'auto',
    width: 96,
  },
  featureIconBg: {
    height: '140%',
    left: '-20%',
    opacity: 0,
    position: 'absolute',
    top: '0%',
    width: '140%',
    zIndex: -1,
  },
  featureIcon: {
    width: '100%',
  },
  featureTitle: {
    margin: '20px auto',
    lineHeight: 1,
    whiteSpace: 'nowrap',
  },
  featureDescription: {
    marginTop: 20,
  },
  animatedBlob: {
    fill: theme.palette.secondary.dark,
    left: '5%',
    opacity: '0.5',
    mixBlendMode: 'multiply',
    position: 'absolute',
    top: '5%',
    width: '90%',
  },
  description: {
    marginTop: 20,
  },
}))

export const Features = () => {
  const classes = useStyles()

  return (
    <Box display="flex" alignItems="center" className={classes.root}>
      {/* <Box className={classes.blurredPoly}>
        <Parallax
          y={[-90, 100]}
          disabled={window.innerWidth < theme.breakpoints.values.md}
        >
          <img
            width="100%"
            src={`${process.env.PUBLIC_URL}/imgs/polywrapper-hero-blurred.png`}
            alt="Polywrap"
          />
        </Parallax>
      </Box> */}
      {/* <Parallax
        y={[-5, 5]}
        // disabled={window.innerWidth < theme.breakpoints.values.md}
      > */}
      <Typography variant="h3" color="textPrimary" align="center">
        Wrappers are Next-Gen SDKs
      </Typography>
      <Box className={classes.cell}>
        <Grid
          container
          spacing={6}
          alignItems="flex-start"
          className={classes.featureGrid}
        >
          {/* {features.map((feature, index) => {
              return (
                <Grid
                  key={feature.slug}
                  xs={12}
                  sm={6}
                  md={4}
                  item
                  className={classes.featureItem}
                >
                  <Box position="relative">
                    <Box
                      position="relative"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      className={classes.featureIconContainer}
                    >
                      <img
                        className={classes.featureIconBg}
                        width="100%"
                        src={`${process.env.PUBLIC_URL}/imgs/assets/blob-1.png`}
                        alt=""
                      />
                      <img
                        className={classes.featureIcon}
                        width="100%"
                        src={`${process.env.PUBLIC_URL}/imgs/assets/features/${feature.slug}.png`}
                        alt=""
                      />
                    </Box>
                    <Typography
                      variant="subtitle1"
                      color="textPrimary"
                      align="center"
                      className={classes.featureTitle}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      align="center"
                      className={classes.featureDescription}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Grid>
              )
            })} */}
          <Grid item sm={12} md={6}>
            <img
              width="100%"
              src={`${process.env.PUBLIC_URL}/imgs/assets/features/discord_img1.svg`}
              alt=""
            />
          </Grid>
          <Grid item sm={12} md={6}></Grid>
        </Grid>
      </Box>
      {/* </Parallax> */}
    </Box>
  )
}
