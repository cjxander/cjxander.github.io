module.exports = {
    content: [
      "./index.html",
      "./path/to/your/other/files/*.html", // Asegúrate de incluir todos los archivos donde uses Tailwind
    ],
    theme: {
      extend: {
        animation: {
          spin: 'spin 2s linear infinite', // Puedes definir tu animación personalizada aquí
        },
        keyframes: {
          spin: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        },
      },
    },
    plugins: [],
  };
  