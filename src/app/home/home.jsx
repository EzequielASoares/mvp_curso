'use client'; // Adicione esta linha para indicar que o componente é um componente de cliente

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "../home/home.module.css";
import { auth } from '../../firebase/firebaseConfig'; // Atualize o caminho conforme necessário
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Homee() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      // Redirecionar para a página principal ou outra página após o login bem-sucedido
      window.location.href = '/homee'; // Ou use o router do Next.js se preferir
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      if (error.code === 'auth/invalid-email') {
        setError('Email inválido.');
      } else if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setError('Email ou senha inválidos.');
      } else {
        setError('Erro ao fazer login. Tente novamente.');
      }
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.loginContainer}>
        <div className={styles.leftSide} style={{ backgroundImage: "url('/image1.jpg')" }}>
          {/* Imagem de fundo */}
        </div>
        <div className={styles.rightSide}>
          <div className={styles.loginBox}>
            <Image src="/logo.png" alt="Conecta Moda Nordeste" width={100} height={100} />
            <h2 className={styles.loginTitle}>Login</h2>
            <input
              type="email"
              placeholder="E-mail"
              className={styles.loginInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              className={styles.loginInput}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            {error && <p className={styles.error}>{error}</p>}
            <Link href="details" className={styles.registerLink}>
              Cadastre-se aqui
            </Link>
            <button className={styles.loginButton} onClick={handleLogin}>
              Entrar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
