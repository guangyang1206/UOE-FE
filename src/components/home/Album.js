import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import logo from '../../images/logo.png';
import './header.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        UoE Shenzhen
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  logo: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 3),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
          UoE Shenzhen Alumni Association
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.logo}>
        <img src={logo}width="40%" />
      </div>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
              The University of Edinburgh Shenzhen Alumni Association
            </Typography>
            <Typography variant="h6" align="center" color="textPrimary" paragraph>
            Welcome to join us.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <Link href="/login" color="primary">
                    <Button variant="contained" color="primary">
                      Login
                    </Button>
                </Link>
                </Grid>
                <Grid item>
                <Link href="/signup" color="secondary">
                    <Button variant="outlined" color="primary">
                      Register
                    </Button>
                </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item key={1} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://www.ed.ac.uk/files/styles/banner_breakpoints_theme_uoe_desktop_1x/public/banner/about_0.jpg?itok=uEIHb_59&timestamp=1458234446"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                  爱丁堡大学深圳校友聚会趴
                  </Typography>
                  <Typography>
                  校友活动|抱团成长party来啦！学习娱乐两不误！
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href="https://mp.weixin.qq.com/s/49wqKMvDli54mgnCJeFaxw" color="primary">   
                    <Button size="small" color="primary">
                        View
                    </Button>
                  </Link>
                  {/* <Button size="small" color="primary">
                    Edit
                  </Button> */}
                </CardActions>
              </Card>
            </Grid>
            <Grid item key={2} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://www.ed.ac.uk/files/styles/panel_breakpoints_theme_uoe_desktop_1x/public/thumbnails/image/cam-about-city-basics.jpg?itok=JZESKNN8"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                  爱丁堡大学深圳校友会正式成立
                  </Typography>
                  <Typography>
                  官宣！爱丁堡大学深圳校友会正式成立啦！
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href="https://mp.weixin.qq.com/s/mWpoonjHcvjCbo9a38BJeA" color="primary">   
                      <Button size="small" color="primary">
                          View
                      </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          The University of Edinburgh Shenzhen Alumni Association
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Welcome to join us!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}