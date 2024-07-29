'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function WelcomePage() {
  const router = useRouter();

  

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Bem-vindo!</h1>
      <p style={styles.text}>Obrigado por se cadastrar.</p>
     
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#FFA500',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: '0 1rem',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#0070f3',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
