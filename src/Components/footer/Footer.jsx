export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 h-14 flex justify-center items-center">
      <p className="text-gray-200 text-center">
        Todos os direitos reservados © {anoAtual} Alura
      </p>
    </footer>
  );
}
