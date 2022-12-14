import {
  Box,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
  Container,
  TextField,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { polywrapPalette } from '../../theme'
import KeyboardArrowRightOutlined from '@material-ui/icons/KeyboardArrowRightOutlined'
import { EmailForm } from '../../components/EmailForm'

interface IFormInput {
  email: string
  username: string
  password: string
}

const schema = yup.object().shape({
  email: yup.string().required().email(),
  username: yup.string().required().min(2).max(25),
  password: yup.string().required().min(8).max(120),
})

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    margin: 'auto',
    maxWidth: theme.breakpoints.values.lg,
    paddingLeft: theme.spacing(3),
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      minHeight: 'unset',
      padding: '0',
    },
  },
  technicalPreview: {
    color: polywrapPalette.secondary.end,
    fontWeight: 700,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    paddingLeft: 2, // Optical alignment with 'A' below
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
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
  heroTitle: {
    fontWeight: 900,
    marginBottom: 20,
    marginTop: 20,
    [theme.breakpoints.down('md')]: {
      fontSize: 48,
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 36,
    },
  },
  heroBody: {
    fontSize: 16,
    lineHeight: 1.75,
  },
  polywrapLink: {
    alignItems: 'center',
    color: theme.palette.primary.main,
    display: 'inline-flex',
    fontWeight: 700,
    marginLeft: 8,
    textDecoration: 'underline',
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
  heroIllustration: {
    animation: `$float 6s infinite`,
    [theme.breakpoints.down('sm')]: {
      order: -1,
    },
  },
  heading: {
    textAlign: 'center',
    margin: theme.spacing(1, 0, 4),
  },
  submitButton: {
    marginTop: theme.spacing(4),
  },
}))

export const SignIn = () => {
  const theme = useTheme()
  const classes = useStyles()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  })

  const { heading, submitButton } = useStyles()

  const [json, setJson] = useState<string>()

  const onSubmit = (data: IFormInput) => {
    setJson(JSON.stringify(data))
  }

  return (
    <>
      <Grid
        className={classes.root}
        container
        justify="center"
        alignItems="center"
        direction={matches ? 'row-reverse' : 'row'}
      >
        <Grid item sm={12} md={7}>
          {/* <Typography
              variant="subtitle2"
              color="secondary"
              className={classes.technicalPreview}
            >
              Technical Preview
            </Typography> */}
          {/* <Typography
              className={classes.heroTitle}
              color="textPrimary"
              variant="h2"
            >
              Welcome
            </Typography>
            <Typography
              className={classes.heroBody}
              color="textSecondary"
              variant="body1"
            >
              Access is limited to a small group of testers during the alpha
              release of Polywrap Hub.
              <br />
              Sign up today for your chance to try it out early and help us
              improve.
            </Typography> */}
          <Box marginTop={4}>
            {/* <EmailForm location="signup" /> */}
            <Typography className={heading} variant="h3">
              Sign Up Form
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <TextField
                {...register('email')}
                variant="outlined"
                margin="normal"
                label="Email"
                helperText={errors.email?.message}
                error={!!errors.email?.message}
                fullWidth
                required
              />
              <TextField
                {...register('username')}
                variant="outlined"
                margin="normal"
                label="Username"
                helperText={errors.username?.message}
                error={!!errors.username?.message}
                fullWidth
              />
              <TextField
                {...register('password')}
                variant="outlined"
                margin="normal"
                label="Password"
                helperText={errors.password?.message}
                error={!!errors.password?.message}
                type="password"
                fullWidth
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={submitButton}
              >
                Sign Up
              </Button>
              {json && (
                <>
                  <Typography variant="body1">
                    Below is the JSON that would normally get passed to the
                    server when a form gets submitted
                  </Typography>
                  <Typography variant="body2">{json}</Typography>
                </>
              )}
            </form>
          </Box>
          <Box marginTop={4}>
            <Typography component="div" variant="body2">
              Already have an account?
              <Box className={classes.polywrapLink}>
                <Link
                  href="https://docs.polywrap.io/guides/create-as-wrapper/project-setup"
                  target="_blank"
                >
                  Sign in
                </Link>
                <KeyboardArrowRightOutlined />
              </Box>
            </Typography>
          </Box>
        </Grid>
        <Grid className={classes.heroIllustration} item sm={12} md={5}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="100%"
            height="100%"
          >
            <img
              className={classes.heroPolywrapper}
              src={process.env.PUBLIC_URL + '/imgs/polywrapper-hero.svg'}
              alt="Polywrap Logo"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
