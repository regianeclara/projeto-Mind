import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SaveIcon from '@material-ui/icons/Save';
import api from '../../../services/api'

const useStyles = makeStyles((theme) => ({
  root: { display: 'flex', },
  title: { flexGrow: 1, },
  appBarSpacer: theme.mixins.toolbar,
  content: { flexGrow: 1, height: '100vh', overflow: 'auto', },
  container: { paddingTop: theme.spacing(2), paddingBottom: theme.spacing(4), },
  paper: { padding: 35, display: 'flex', overflow: 'auto', flexDirection: 'column', },
  formControl: { width: '100%' },
  btnSuccess: { backgroundColor: "green", color: "#fff", "&:hover": { backgroundColor: "#12b912" } }
}));

export default function UsuarioCadastrar() {
  const classes = useStyles();

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('');

  async function handleSubmit() {

    const data = {
      nome_usuario: nome,
      sobrenome_usuario: sobrenome,
      cpf_usuario: cpf,
      email_usuario: email,
      senha_usuario: senha,
      tipo_usuario: tipo
    }

    if (nome !== '' && sobrenome !== '' && cpf !== '' && email !== '' && senha !== '' && tipo !== '') {
      const response = await api.post('/api/usuarios', data);

      if (response.status === 200) {
        window.location.href = '/admin/usuarios'
      } else {
        alert('Erro ao cadastrar o usuário!');
      }
    } else {
      alert('Por favor, preencha todos os dados!');
    }
  }

  return (
    <div className={classes.root}>

      <MenuAdmin title={'USUÁRIOS'} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Button style={{ marginBottom: 10 }} variant="contained" href={'../usuarios'}><ArrowBackIcon />  Voltar</Button>
              <Paper className={classes.paper}>
                <h2>Cadastro de Usuários</h2>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      id="nome"
                      name="nome"
                      label="Nome"
                      fullWidth
                      autoComplete="nome"
                      value={nome}
                      onChange={e => setNome(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      id="sobrenome"
                      name="sobrenome"
                      label="Sobrenome"
                      fullWidth
                      autoComplete="sobrenome"
                      value={sobrenome}
                      onChange={e => setSobrenome(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      id="cpf"
                      name="cpf"
                      label="CPF"
                      value={cpf}
                      onChange={e => setCpf(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="email"
                      name="email"
                      label="Email"
                      fullWidth
                      autoComplete="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="labelTipo">Tipo</InputLabel>
                      <Select
                        labelId="labelTipo"
                        id="tipo"
                        value={tipo}
                        onChange={e => setTipo(e.target.value)}
                      >
                        <MenuItem value={1}>Administrador</MenuItem>
                        <MenuItem value={2}>Comum</MenuItem>

                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    type="password"
                    required
                    id="senha"
                    name="senha"
                    label="Senha"
                    fullWidth
                    autoComplete="senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button variant="contained" onClick={handleSubmit} className={classes.btnSuccess}>
                    <SaveIcon />  Salvar
                  </Button>
                </Grid>
              </Paper>
              <Box pt={4}>
                <Footer />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}