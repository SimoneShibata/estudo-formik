import React, { Component } from 'react';
import './App.css';
import { Formik } from 'formik';
import { validate } from './validate'
import { getValidationSchema } from './getValidationSchema'

const SignUpForm = ({ isSubmitting, errors, handleChange, handleSubmit }) => {

  return (
    <div className="form">
      <label className="form-field" htmlFor="cpfCnpj">
        <span>CPF/CNPJ:</span>
        <input name="cpfCnpj" type="text" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.cpfCnpj}</div>

      <label className="form-field" htmlFor="password">
        <span>Nome:</span>
        <input name="nome" type="text" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.nome}</div>

      <label className="form-field" htmlFor="celular">
        <span>Celular:</span>
        <input name="celular" type="text" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.celular}</div>

      <label className="form-field" htmlFor="logradouro">
        <span>Logradouro:</span>
        <input name="logradouro" type="text" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.logradouro}</div>

      <label className="form-field" htmlFor="email">
        <span>Email:</span>
        <input name="email" type="email" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.email}</div>

      <label className="form-field" htmlFor="cidade">
        <span>Cidade:</span>
        <input name="cidade" type="text" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.cidade}</div>

      <label className="form-field" htmlFor="bairro">
        <span>Bairro:</span>
        <input name="bairro" type="text" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.bairro}</div>

      <label className="form-field" htmlFor="cep">
        <span>cep:</span>
        <input name="cep" type="text" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.cep}</div>

      <label className="form-field" htmlFor="numero">
        <span>numero:</span>
        <input name="numero" type="text" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.numero}</div>

      <label className="form-field" htmlFor="uf">
        <span>uf:</span>
        <input name="uf" type="text" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.uf}</div>

      <label className="form-field" htmlFor="vinculo">
        <span>vinculo:</span>
        <input name="vinculo" type="text" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.vinculo}</div>

      <label className="form-field" htmlFor="percentualVenda">
        <span>percentualVenda:</span>
        <input name="percentualVenda" type="number" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.percentualVenda}</div>

      <label className="form-field" htmlFor="percentual">
        <span>percentual:</span>
        <input name="percentual" type="number" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.percentual}</div>

      <label className="form-field" htmlFor="percentualTotal">
        <span>percentualTotal:</span>
        <input name="percentualTotal" type="number" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.percentualTotal}</div>

      <button type="submit" onClick={handleSubmit}>{isSubmitting ? 'Loading' : 'Sign Up'}</button>
    </div>
  )
}

class App extends Component {

  onSubmit = (values, { setSubmitting, setErrors }) => {
    console.log('SUBMITTED', values)
    setSubmitting(false)
  }

  render() {

    const list = [
      { cpfCnpj: '93378115530' }
    ];
    
    const vendedores = [
      { cpfCnpj: '90016646363' }
    ];

    const tipoProprietario = 'comprador';

    return (
      <Formik
        // initialValues={initialValues}
        // validate={validate(getValidationSchema)}
        validate={validate(getValidationSchema, list, vendedores, list, tipoProprietario)}
        onSubmit={this.onSubmit}
        render={SignUpForm}
      />
    );
  }
}

export default App;
