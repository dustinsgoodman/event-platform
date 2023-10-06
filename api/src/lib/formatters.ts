import { utcToZonedTime, format } from 'date-fns-tz';

export function formatDateTime(dt: Date, tz?: string): string {
  return format(utcToZonedTime(dt, tz), 'MMM d, yyyy hh:mmaaa zzz', {
    timeZone: tz || 'Etc/UTC',
  });
}
