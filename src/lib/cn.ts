/**
 * Kleine classnames-helper. Filtert falsy waarden en voegt klassen samen.
 * Geen externe afhankelijkheid nodig.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
