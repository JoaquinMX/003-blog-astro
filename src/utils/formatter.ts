export class Formatter {
  static formatDate(value: Date): string {
    const date = new Date(value);
    return Intl.DateTimeFormat("es-MX", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(date);
  }
}
