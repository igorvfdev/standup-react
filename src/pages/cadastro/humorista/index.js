import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../assets/componets/Button';

function CadastroHumorista() {
  const valoresInicias = {
    nome: '',
    contatos: '',
    cor: '',
  };

  const [humorista, setHumorista] = useState([]);
  const [values, setValues] = useState(valoresInicias);

  function setValue(id, value) {
    setValues({
      ...values,
      [id]: value,
    });
  }

  function handle(infos) {
    setValue(
      infos.target.getAttribute('name'),
      infos.target.value,
    );
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de humorista:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infos) {
        infos.preventDefault();
        setHumorista([
          ...humorista,
          values,
        ]);
        setValues(valoresInicias);
      }}
      >

        <FormField
          label="Nome do Humorista"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handle}
        />

        <FormField
          label="Contatos"
          type="textarea"
          name="contatos"
          value={values.contatos}
          onChange={handle}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handle}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {humorista.map((humorista, indice) => (
          <li key={`${humorista.nome}`}>
            {humorista.nome}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroHumorista;
