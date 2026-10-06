/** « 6 octobre 2026 » from an ISO date (YYYY-MM-DD), whatever the server's time zone. */
export const fmtFr = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
