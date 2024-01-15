export const toDate = (time: string): string => {
  let date = new Date(time);

  const days = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const zone = date.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  }).substring(5);

  return `${days} ${month} ${year}   ${hours}:${minutes}${zone}`;
}