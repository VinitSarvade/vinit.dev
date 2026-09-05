const MONTHS: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

/** Parses "Jan 2016", "Sept 2025" or "April 2018" into the first day of that month. */
export function parseMonth(text: string): Date {
  const [month, year] = text.trim().split(/\s+/);
  return new Date(Number(year), MONTHS[month.slice(0, 3).toLowerCase()] ?? 0, 1);
}

/** Start date of a "Jan 2016 - Oct 2017" style period. */
export function periodStart(period: string): Date {
  return parseMonth(period.split(" - ")[0]);
}

/** Whole years between the earliest role start and `now`. */
export function yearsOfExperience(
  experience: readonly { period: string }[],
  now: Date = new Date(),
): number {
  const earliest = Math.min(...experience.map((job) => periodStart(job.period).getTime()));
  const years = (now.getTime() - earliest) / (365.25 * 24 * 60 * 60 * 1000);
  return Math.max(0, Math.floor(years));
}

/** Replaces `{{years}}` placeholders in copy. */
export function fillYears(text: string, years: number): string {
  return text.replaceAll("{{years}}", String(years));
}
