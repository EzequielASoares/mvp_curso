'use client';

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './cadastro.module.css';
import { auth, db } from '../../firebase/firebaseConfig'; // Atualize o caminho conforme necessário
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    telefone: '',
    cpf: '',
    cnpj: '',
    dataNascimento: '',
    genero: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {
      nome,
      email,
      senha,
      telefone,
      cpf,
      cnpj,
      dataNascimento,
      genero,
      endereco,
      numero,
      bairro,
      cidade,
      estado
    } = formData;

    try {
      // Criar usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // Referência para a coleção e o documento
      const usuariosCollection = collection(db, "usuarios");
      const userDoc = doc(usuariosCollection, user.uid);

      // Verificar e logar referências
      console.log('Firestore DB:', db);
      console.log('Coleção de Usuários:', usuariosCollection);
      console.log('Documento do Usuário:', userDoc);

      // Armazenar dados adicionais no Firestore
      await setDoc(userDoc, {
        nome,
        email,
        telefone,
        cpf,
        cnpj,
        dataNascimento,
        genero,
        endereco,
        numero,
        bairro,
        cidade,
        estado,
      });

      // Redirecionar ou mostrar mensagem de sucesso
      alert('Cadastro realizado com sucesso!');
      router.push('/home'); // Redireciona para a página de home
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);

      // Tratar erros específicos
      if (error.code === 'auth/email-already-in-use') {
        alert('Este e-mail já está em uso. Tente usar um e-mail diferente.');
      } else {
        alert(`Erro ao cadastrar usuário: ${error.message}`);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.step}>
          <svg className={styles.check} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          </svg>
          <span>Selecione seu perfil</span>
        </div>
        <div className={styles.step}>
          <svg className={styles.check} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          </svg>
          <span>Sobre você</span>
        </div>
        <div className={`${styles.step} ${styles.s}`}>
          <span className={styles.textt}>3</span>
          <span>Cadastre seu perfil</span>
        </div>
      </div>
      <div className={styles.rightSection}>
        <h2>Sobre você</h2>
        <p>Informe alguns detalhes sobre você para avançar no cadastro</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            className={`form-control ${styles.formControl}`}
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            className={`form-control ${styles.formControl}`}
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="telefone"
            className={`form-control ${styles.formControl}`}
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
          <input
            type="password"
            name="senha"
            className={`form-control ${styles.formControl}`}
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
          />
          <input
            type="text"
            name="cpf"
            className={`form-control ${styles.formControl}`}
            placeholder="CPF"
            value={formData.cpf}
            onChange={handleChange}
          />
          <input
            type="text"
            name="cnpj"
            className={`form-control ${styles.formControl}`}
            placeholder="CNPJ"
            value={formData.cnpj}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dataNascimento"
            className={`form-control ${styles.formControl}`}
            placeholder="Data de nascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
          />
          <select
            name="genero"
            className={`form-control ${styles.formControl}`}
            value={formData.genero}
            onChange={handleChange}
          >
            <option>Gênero</option>
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Outro</option>
          </select>
          <input
            type="text"
            name="endereco"
            className={`form-control ${styles.formControl}`}
            placeholder="Endereço"
            value={formData.endereco}
            onChange={handleChange}
          />
          <input
            type="text"
            name="numero"
            className={`form-control ${styles.formControl}`}
            placeholder="Nº"
            value={formData.numero}
            onChange={handleChange}
          />
          <input
            type="text"
            name="bairro"
            className={`form-control ${styles.formControl}`}
            placeholder="Bairro"
            value={formData.bairro}
            onChange={handleChange}
          />
          <input
            type="text"
            name="cidade"
            className={`form-control ${styles.formControl}`}
            placeholder="Cidade"
            value={formData.cidade}
            onChange={handleChange}
          />
          <select
            name="estado"
            className={`form-control ${styles.formControl}`}
            value={formData.estado}
            onChange={handleChange}
          >
            <option>Estado</option>
            <option>Acre</option>
            <option>Alagoas</option>
            <option>Amapá</option>
            <option>Amazonas</option>
            <option>Bahia</option>
            <option>Ceará</option>
            <option>Distrito Federal</option>
            <option>Espírito Santo</option>
            <option>Goiás</option>
            <option>Maranhão</option>
            <option>Mato Grosso</option>
            <option>Mato Grosso do Sul</option>
            <option>Minas Gerais</option>
            <option>Pará</option>
            <option>Paraíba</option>
            <option>Paraná</option>
            <option>Pernambuco</option>
            <option>Piauí</option>
            <option>Rio de Janeiro</option>
            <option>Rio Grande do Norte</option>
            <option>Rio Grande do Sul</option>
            <option>Rondônia</option>
            <option>Roraima</option>
            <option>Santa Catarina</option>
            <option>São Paulo</option>
            <option>Sergipe</option>
            <option>Tocantins</option>
          </select>
          <div className={styles.btnContainer}>
            <button type="button" className="btn btn-link">Voltar</button>
            <button type="submit" className="btn btn-warning">Próximo</button>
          </div>
        </form>
      </div>
    </div>
  );
}
