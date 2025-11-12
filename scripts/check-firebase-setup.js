#!/usr/bin/env node

/**
 * Script para verificar se a configuração do Firebase está correta
 * Execute: node scripts/check-firebase-setup.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando configuração do Firebase...\n');

// Verificar se existe arquivo .env
const envPath = path.join(process.cwd(), '.env');
if (!fs.existsSync(envPath)) {
  console.log('❌ Arquivo .env não encontrado!');
  console.log('📝 Crie um arquivo .env na raiz do projeto com as variáveis do Firebase.\n');
  process.exit(1);
}

// Ler arquivo .env
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};

envContent.split('\n').forEach(line => {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#')) {
    const [key, ...valueParts] = trimmed.split('=');
    if (key && valueParts.length > 0) {
      envVars[key.trim()] = valueParts.join('=').trim();
    }
  }
});

// Variáveis necessárias
const requiredVars = [
  'EXPO_PUBLIC_FIREBASE_API_KEY',
  'EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'EXPO_PUBLIC_FIREBASE_PROJECT_ID',
  'EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'EXPO_PUBLIC_FIREBASE_APP_ID',
  'EXPO_PUBLIC_GOOGLE_CLIENT_ID',
];

let allOk = true;
const missing = [];
const empty = [];

requiredVars.forEach(varName => {
  if (!envVars[varName]) {
    missing.push(varName);
    allOk = false;
  } else if (envVars[varName].includes('sua-') || envVars[varName].includes('123456')) {
    empty.push(varName);
    allOk = false;
  }
});

// Resultado
if (allOk) {
  console.log('✅ Todas as variáveis estão configuradas!\n');
  console.log('📋 Próximos passos:');
  console.log('   1. Configure a Tela de Consentimento OAuth no Google Cloud Console');
  console.log('   2. Adicione a URL de redirecionamento (veja no console quando rodar npm start)');
  console.log('   3. Teste o login com Google\n');
} else {
  console.log('❌ Problemas encontrados:\n');
  
  if (missing.length > 0) {
    console.log('🔴 Variáveis faltando:');
    missing.forEach(v => console.log(`   - ${v}`));
    console.log('');
  }
  
  if (empty.length > 0) {
    console.log('🟡 Variáveis com valores de exemplo (precisa substituir):');
    empty.forEach(v => console.log(`   - ${v}`));
    console.log('');
  }
  
  console.log('💡 Dica: Veja o arquivo SETUP_RAPIDO.md para instruções completas\n');
  process.exit(1);
}

