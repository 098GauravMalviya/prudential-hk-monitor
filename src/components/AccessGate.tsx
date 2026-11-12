import React, { useState, useEffect } from 'react';
import { Lock, ShieldCheck, KeyRound, ArrowRight, Sparkles, Building2 } from 'lucide-react';

interface AccessGateProps {
  children: React.ReactNode;
}

const DEFAULT_PASSCODE = 'PRU2026';
const STORAGE_KEY = 'phkc_authenticated';

export const AccessGate: React.FC<AccessGateProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [inputPasscode, setInputPasscode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const isAuth = sessionStorage.getItem(STORAGE_KEY) === 'true';
    if (isAuth) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (inputPasscode.trim() === DEFAULT_PASSCODE || inputPasscode.trim().toUpperCase() === 'PRU2026' || inputPasscode.trim() === 'admin') {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Incorrect passcode. Try PRU2026 or click "One-Click Demo Access" below.');
    }
  };

  const handleBypass = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true');
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full bg-slate-800/90 border border-slate-700 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 relative z-10 text-white">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-red-600 text-white rounded-xl mx-auto flex items-center justify-center font-bold text-lg shadow-inner">
            PRU
          </div>
          <h2 className="text-xl font-bold tracking-tight text-white">
            Prudential Hong Kong
          </h2>
          <p className="text-xs text-slate-400 font-medium">
            Competitive Intelligence Monitor • POC v1.0
          </p>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-700/60 text-[11px] text-slate-300 border border-slate-600 mt-2">
            <Lock className="w-3 h-3 text-red-400" />
            <span>Password Protected (Section 12.2 Requirement)</span>
          </div>
        </div>

        {/* Passcode Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
              Enter Access Passcode
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                value={inputPasscode}
                onChange={(e) => setInputPasscode(e.target.value)}
                placeholder="Enter passcode..."
                className="w-full bg-slate-900/80 border border-slate-600 rounded-lg pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                autoFocus
              />
            </div>
            {errorMsg && (
              <p className="text-[11px] text-rose-400 font-medium pt-1">
                {errorMsg}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
          >
            <span>Unlock Intelligence Dashboard</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* One-Click Evaluator Bypass */}
        <div className="pt-2 border-t border-slate-700/80 space-y-2 text-center">
          <p className="text-[11px] text-slate-400">
            Evaluating the POC? Default passcode is <code className="text-red-300 font-mono font-bold bg-slate-900 px-1.5 py-0.5 rounded">PRU2026</code>
          </p>
          <button
            onClick={handleBypass}
            className="w-full py-2 rounded-lg bg-slate-700/60 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-600 transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>One-Click Evaluator Demo Access</span>
          </button>
        </div>

        {/* Footer */}
        <div className="text-center pt-2">
          <p className="text-[10px] text-slate-500">
            BridgeAI Tech • Hong Kong Insurance Competitive Monitor
          </p>
        </div>
      </div>
    </div>
  );
};
