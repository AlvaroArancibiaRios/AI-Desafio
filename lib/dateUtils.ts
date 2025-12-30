export function formatDate(date: Date, format: 'long' | 'short' = 'long'): string {
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const monthsShort = [
    'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
    'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
  ];

  const day = date.getDate();
  const month = format === 'long' ? months[date.getMonth()] : monthsShort[date.getMonth()];
  const year = date.getFullYear();

  return format === 'long'
    ? `${day} de ${month} ${year}`
    : `${month} ${day}`;
}

export function calculateEndDate(startDate: Date, days: number): Date {
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + days - 1);
  return endDate;
}

export function getDayDate(startDate: Date, dayNumber: number): Date {
  const dayDate = new Date(startDate);
  dayDate.setDate(dayDate.getDate() + dayNumber - 1);
  return dayDate;
}

export function formatDateForInput(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function parseInputDate(dateString: string): Date | null {
  const date = new Date(dateString + 'T00:00:00');
  return isNaN(date.getTime()) ? null : date;
}
