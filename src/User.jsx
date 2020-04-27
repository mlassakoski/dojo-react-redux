// @flow
import React from "react";
import {
  Paper,
  Typography,
  Grid,
  MenuItem,
  Button,
  Container,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import { RenderedSelect, RenderedTextField } from "./components/wrapped";
import { createUser, loadUser } from "./store/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10rem",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  header: {
    padding: theme.spacing(2),
  },
  footer: {
    marginTop: theme.spacing(1),
    height: theme.spacing(8),
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

type Props = {
  handleSubmit: Function,
  onCreateUser: Function,
  onLoadUser: Function,
  loading: boolean,
  submitting: boolean,
};

const User = ({
  handleSubmit,
  onCreateUser,
  onLoadUser,
  submitting,
  loading,
}: Props) => {
  const classes = useStyles();

  const onSubmit = (user) => onCreateUser(user);

  const onLoad = (id) => onLoadUser(id);

  return (
    <Container maxWidth="md">
      <Paper className={classes.root}>
        <div className={classes.header}>
          <Typography variant="h5" className={classes.title}>
            Novo usuario
          </Typography>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={classes.container}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Field
                name="name"
                type="text"
                component={RenderedTextField}
                label="Nome"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Field
                name="surname"
                type="text"
                component={RenderedTextField}
                label="Sobrenome"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Field
                name="email"
                type="text"
                component={RenderedTextField}
                label="Email"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Field name="gender" component={RenderedSelect} label="Genero">
                <MenuItem value="m">Masculino</MenuItem>
                <MenuItem value="f">Feminino</MenuItem>
              </Field>
            </Grid>
          </Grid>

          <div className={classes.footer}>
            {loading ? <CircularProgress /> : null}

            <Button
              color="primary"
              variant="contained"
              className={classes.button}
              onClick={() => onLoad("xBeUc0lg1ZsC1RZc")}
            >
              Load user
            </Button>
            <Button
              color="primary"
              type="submit"
              variant="contained"
              disabled={submitting}
              className={classes.button}
            >
              Salvar
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { loading } = state.user;
  return { loading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateUser: (user: User) => dispatch(createUser(user)),
    onLoadUser: (id: number) => dispatch(loadUser(id)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: "userForm",
  })
)(User);
