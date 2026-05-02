import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';



export default [
  daStyle,
  { files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      'linebreak-style': 'off', // Mematikan error LF vs CRLF (Windows friendly)
      'indent': ['error', 2],     // Memastikan indentasi tetap 2 spasi
      'no-console': 'off',      // Agar kamu boleh pakai console.log buat belajar
    },
  }
];