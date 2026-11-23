export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    timeZone: 'UTC', // ISO-дата без времени 
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });
}