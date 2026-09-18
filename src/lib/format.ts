import readingTime from 'reading-time';

export function formatDate(date: Date, opts: Intl.DateTimeFormatOptions = {}): string {
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    ...opts,
  }).format(date);
}

export function estimateReadingTime(body: string | undefined): string {
  if (!body) return '1 min read';
  const stats = readingTime(body);
  const minutes = Math.max(1, Math.round(stats.minutes));
  return `${minutes} min read`;
}
