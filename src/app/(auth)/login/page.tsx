'use client'

import { useState } from "react";
import type { FormEvent } from "react";

function RegistraLogo() {
  return (
    <div className="rg-brand">
      <svg
        className="rg-brand__mark"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        aria-hidden="true"
      >
        <circle cx="18" cy="18" r="15" fill="none" stroke="#1A1D21" strokeWidth="3" />
        <circle cx="18" cy="18" r="7" fill="#C0632F" />
      </svg>
      <div className="rg-brand__text">
        <span className="rg-brand__name">Registra</span>
        <span className="rg-brand__tag">Sistema de fotos</span>
      </div>
    </div>
  );
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ email, senha, lembrar });
  }

  return (
    <div className="rg-page">
      <style>{styles}</style>

      <div className="rg-card">
        <RegistraLogo />

        <h1 className="rg-title">Entrar</h1>
        <p className="rg-subtitle">Acesse sua conta para continuar.</p>

        <form className="rg-form" onSubmit={handleSubmit} noValidate>
          <label className="rg-field">
            <span className="rg-label">E-mail</span>
            <input
              type="email"
              className="rg-input"
              placeholder="voce@exemplo.com"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="rg-field">
            <span className="rg-label">Senha</span>
            <input
              type="password"
              className="rg-input"
              placeholder="••••••••"
              autoComplete="current-password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>

          <div className="rg-row">
            <label className="rg-check">
              <input
                type="checkbox"
                checked={lembrar}
                onChange={(e) => setLembrar(e.target.checked)}
              />
              <span>Lembrar de mim</span>
            </label>
            <a className="rg-link" href="#recuperar">
              Esqueceu a senha?
            </a>
          </div>

          <button type="submit" className="rg-button">
            Entrar
          </button>
        </form>

        <div className="rg-divider">
          <span>ou</span>
        </div>

        <p className="rg-foot">
          Não tem conta?{" "}
          <a className="rg-link rg-link--strong" href="/cadastro">
            Criar conta
          </a>
        </p>
      </div>
    </div>
  );
}

const styles = `
  .rg-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: #F4EDE3;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #1A1D21;
    box-sizing: border-box;
  }
  .rg-page *, .rg-page *::before, .rg-page *::after { box-sizing: border-box; }

  .rg-card {
    width: 100%;
    max-width: 400px;
    background: #FFFFFF;
    border-radius: 18px;
    padding: 40px;
    box-shadow: 0 12px 40px rgba(26, 29, 33, 0.08);
  }

  .rg-brand { display: flex; align-items: center; gap: 12px; margin-bottom: 32px; }
  .rg-brand__text { display: flex; flex-direction: column; line-height: 1.1; }
  .rg-brand__name { font-size: 22px; font-weight: 800; letter-spacing: -0.01em; }
  .rg-brand__tag {
    font-size: 11px; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.12em; color: #C0632F; margin-top: 3px;
  }

  .rg-title { font-size: 28px; font-weight: 800; margin: 0 0 6px; letter-spacing: -0.02em; }
  .rg-subtitle { font-size: 15px; color: #736F68; margin: 0 0 28px; }

  .rg-form { display: flex; flex-direction: column; gap: 18px; }
  .rg-field { display: flex; flex-direction: column; gap: 7px; }
  .rg-label { font-size: 13px; font-weight: 700; color: #2B2B2B; }

  .rg-input {
    width: 100%;
    padding: 12px 14px;
    font-size: 15px;
    color: #1A1D21;
    background: #FFFFFF;
    border: 1px solid #E0DAD0;
    border-radius: 10px;
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }
  .rg-input::placeholder { color: #A8A29A; }
  .rg-input:focus {
    border-color: #C0632F;
    box-shadow: 0 0 0 3px rgba(192, 99, 47, 0.15);
  }

  .rg-row { display: flex; align-items: center; justify-content: space-between; margin-top: -4px; }
  .rg-check { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #4B4741; cursor: pointer; }
  .rg-check input { width: 16px; height: 16px; accent-color: #C0632F; cursor: pointer; }

  .rg-link { font-size: 14px; color: #C0632F; text-decoration: none; font-weight: 500; }
  .rg-link:hover { text-decoration: underline; }
  .rg-link--strong { font-weight: 700; }

  .rg-button {
    margin-top: 6px;
    width: 100%;
    padding: 13px 16px;
    font-size: 15px;
    font-weight: 700;
    color: #FFFFFF;
    background: #C0632F;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.15s ease;
  }
  .rg-button:hover { background: #A9521F; }
  .rg-button:focus-visible { outline: 3px solid rgba(192, 99, 47, 0.4); outline-offset: 2px; }

  .rg-divider {
    display: flex; align-items: center; text-align: center;
    color: #9A948B; font-size: 13px; margin: 24px 0 18px;
  }
  .rg-divider::before, .rg-divider::after {
    content: ""; flex: 1; height: 1px; background: #E7E1D7;
  }
  .rg-divider span { padding: 0 14px; }

  .rg-foot { text-align: center; font-size: 15px; color: #736F68; margin: 0; }
`;