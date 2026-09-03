export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pulchriflow.com";
export const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.pulchriflow.com";
export const apiUrl = process.env.PULCHRIFLOW_API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export function appLink(path: string) {
  const base = appUrl.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
