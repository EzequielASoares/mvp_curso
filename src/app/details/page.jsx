'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './details.module.css';

export default function Details() {
  const [selectedProfile, setSelectedProfile] = useState('');
  const [checkedProfile, setCheckedProfile] = useState('');
  const router = useRouter(); // Hook de roteamento

  const handleRadioChange = (e) => {
    const value = e.target.value;
    setSelectedProfile(value);
    setCheckedProfile(value); // Marca o checkbox correspondente
  };

  const handleCheckboxChange = (e) => {
    // Evita a mudança de estado manual dos checkboxes
    e.preventDefault();
  };

  const nextStep = () => {
    if (selectedProfile) {
      const selectedCheckbox = document.querySelector(`#${selectedProfile}-check`);
      if (selectedCheckbox && selectedCheckbox.checked) {
        router.push('/cadastro'); // Redireciona para a página de cadastro
      } else {
        alert('Por favor, marque o checkbox para confirmar sua seleção.');
      }
    } else {
      alert('Por favor, selecione um perfil.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <img src="/image.png" alt="Fashion Image" className={styles.image} />
        <div className={styles.steps}>
          <div className={`${styles.step} ${styles.active}`}>
            <svg className={styles.check} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
            <span className={styles.stepText}>Selecione seu perfil</span>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>2</span>
            <span className={styles.stepText}>Sobre você</span>
          </div>
          <div className={`${styles.step} ${styles.stepThree}`}>
            <span className={styles.stepNumber}>3</span>
            <span className={styles.stepText}>Cadastre seu perfil</span>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <h1 className={styles.title}>Selecione seu perfil</h1>
        <p className={styles.description}>Selecione a opção que mais se identifica:</p>
        <div className={styles.option}>
          <input
            type="radio"
            id="fornecedor"
            name="perfil"
            value="fornecedor"
            onChange={handleRadioChange}
            className={styles.radioInput}
          />
          <label htmlFor="fornecedor" className={styles.optionLabel}>
            <div className={styles.optionText}>
              <h2>Fornecedor</h2>
              <p>
                Se você representa um fornecedor de matérias-primas, aviamentos, estamparia, embalagens, etiquetas ou
                outros insumos na região nordeste e deseja ativar seu perfil em nossa plataforma, selecione essa opção.
              </p>
            </div>
            <input
              type="checkbox"
              id="fornecedor-check"
              name="check"
              checked={checkedProfile === 'fornecedor'}
              onChange={handleCheckboxChange}
              className={styles.checkboxInput}
            />
            <span className={styles.checkboxLabel}></span>
          </label>
        </div>
        <div className={styles.option}>
          <input
            type="radio"
            id="profissional"
            name="perfil"
            value="profissional"
            onChange={handleRadioChange}
            className={styles.radioInput}
          />
          <label htmlFor="profissional" className={styles.optionLabel}>
            <div className={styles.optionText}>
              <h2>Profissional de Moda</h2>
              <p>
                Se você representa um profissional de moda e deseja ativar seu perfil em nossa plataforma, selecione essa
                opção.
              </p>
            </div>
            <input
              type="checkbox"
              id="profissional-check"
              name="check"
              checked={checkedProfile === 'profissional'}
              onChange={handleCheckboxChange}
              className={styles.checkboxInput}
            />
            <span className={styles.checkboxLabel}></span>
          </label>
        </div>
        <div className={styles.option}>
          <input
            type="radio"
            id="marca"
            name="perfil"
            value="marca"
            onChange={handleRadioChange}
            className={styles.radioInput}
          />
          <label htmlFor="marca" className={styles.optionLabel}>
            <div className={styles.optionText}>
              <h2>Marca de Moda</h2>
              <p>
                Se você é empresário(a) de uma marca de moda no Nordeste e deseja se conectar com os perfis dos
                fornecedores e profissionais de moda disponíveis em nossa plataforma, selecione essa opção.
              </p>
            </div>
            <input
              type="checkbox"
              id="marca-check"
              name="check"
              checked={checkedProfile === 'marca'}
              onChange={handleCheckboxChange}
              className={styles.checkboxInput}
            />
            <span className={styles.checkboxLabel}></span>
          </label>
        </div>
        <button className={styles.button} onClick={nextStep}>Próximo</button>
      </div>
    </div>
  );
}
