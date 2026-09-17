'use client'
import { registerUser } from "@/app/api/auth/auth";
import { NewUser } from "@/types/NewUser.model";
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

export default function CriarConta() {
    const [nome, setNome] = useState("");
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmar, setConfirmar] = useState("");
    const [aceito, setAceito] = useState(false);

    async function sendNewUser() {
        const payload: NewUser = {
            name: nome,
            email,
            password: senha,
            userName: nomeUsuario
        };

        const response = await registerUser(payload);
        if (!response.success) {
            console.error("Ocorreu um erro: " + response.message);
            return;
        }
        alert('Usuário cadastrado com sucesso!')
    }

    const senhasNaoCoincidem = confirmar.length > 0 && senha !== confirmar;

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (senhasNaoCoincidem || !aceito) {
            return;
        }

        await sendNewUser();
    }

    return (
        <div className="rg-page">
            <style>{styles}</style>

            <div className="rg-card">
                <RegistraLogo />

                <h1 className="rg-title">Criar conta</h1>
                <p className="rg-subtitle">Leva menos de um minuto.</p>

                <form className="rg-form" noValidate onSubmit={handleSubmit}>
                    <label className="rg-field">
                        <span className="rg-label">Nome completo</span>
                        <input
                            type="text"
                            className="rg-input"
                            placeholder="Seu nome"
                            autoComplete="name"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </label>

                    <label className="rg-field">
                        <span className="rg-label">Nome de usuário</span>
                        <input
                            type="text"
                            className="rg-input"
                            placeholder="Seu nome de usuário"
                            autoComplete="name"
                            value={nomeUsuario}
                            onChange={(e) => setNomeUsuario(e.target.value)}
                        />
                    </label>

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
                            placeholder="Mínimo de 8 caracteres"
                            autoComplete="new-password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </label>

                    <label className="rg-field">
                        <span className="rg-label">Confirmar senha</span>
                        <input
                            type="password"
                            className={`rg-input${senhasNaoCoincidem ? " rg-input--error" : ""}`}
                            placeholder="Repita a senha"
                            autoComplete="new-password"
                            aria-invalid={senhasNaoCoincidem}
                            value={confirmar}
                            onChange={(e) => setConfirmar(e.target.value)}
                        />
                        {senhasNaoCoincidem && (
                            <span className="rg-error">
                                <svg width="15" height="15" viewBox="0 0 20 20" aria-hidden="true">
                                    <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
                                    <line x1="10" y1="5.5" x2="10" y2="11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                                    <circle cx="10" cy="14" r="0.9" fill="currentColor" />
                                </svg>
                                As senhas não coincidem
                            </span>
                        )}
                    </label>

                    <label className="rg-check rg-check--terms">
                        <input
                            type="checkbox"
                            checked={aceito}
                            onChange={(e) => setAceito(e.target.checked)}
                        />
                        <span>
                            Concordo com os Termos de Uso e a Política de Privacidade do Registra.
                        </span>
                    </label>

                    <button
                        type="submit"
                        className="rg-button"
                        disabled={senhasNaoCoincidem || !aceito}
                    >
                        Criar conta
                    </button>
                </form>

                <p className="rg-foot">
                    Já tem conta?{" "}
                    <a className="rg-link rg-link--strong" href="/login">
                        Entrar
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

  .rg-brand { display: flex; align-items: center; gap: 12px; margin-bottom: 28px; }
  .rg-brand__text { display: flex; flex-direction: column; line-height: 1.1; }
  .rg-brand__name { font-size: 22px; font-weight: 800; letter-spacing: -0.01em; }
  .rg-brand__tag {
    font-size: 11px; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.12em; color: #C0632F; margin-top: 3px;
  }

  .rg-title { font-size: 28px; font-weight: 800; margin: 0 0 6px; letter-spacing: -0.02em; }
  .rg-subtitle { font-size: 15px; color: #736F68; margin: 0 0 24px; }

  .rg-form { display: flex; flex-direction: column; gap: 16px; }
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
  .rg-input--error { border-color: #C0392B; }
  .rg-input--error:focus { box-shadow: 0 0 0 3px rgba(192, 57, 43, 0.15); }

  .rg-error {
    display: flex; align-items: center; gap: 6px;
    font-size: 13px; color: #C0392B; margin-top: 2px;
  }

  .rg-check { display: flex; align-items: flex-start; gap: 9px; font-size: 14px; color: #4B4741; cursor: pointer; }
  .rg-check input { width: 16px; height: 16px; margin-top: 1px; accent-color: #C0632F; cursor: pointer; flex-shrink: 0; }
  .rg-check--terms { line-height: 1.4; margin-top: 2px; }

  .rg-link { font-size: 15px; color: #C0632F; text-decoration: none; font-weight: 500; }
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
    transition: background-color 0.15s ease, opacity 0.15s ease;
  }
  .rg-button:hover:not(:disabled) { background: #A9521F; }
  .rg-button:disabled { opacity: 0.55; cursor: not-allowed; }
  .rg-button:focus-visible { outline: 3px solid rgba(192, 99, 47, 0.4); outline-offset: 2px; }

  .rg-foot { text-align: center; font-size: 15px; color: #736F68; margin: 24px 0 0; }
`;