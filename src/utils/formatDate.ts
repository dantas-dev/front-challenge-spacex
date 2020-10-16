export default function formatDate(timestamp: number) {
  const date = new Date(timestamp * 1000);

  return date.toLocaleDateString('pt-BR');
}
