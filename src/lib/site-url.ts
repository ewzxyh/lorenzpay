const DEFAULT_SITE_URL = "https://lorenzpay.com.br";

export const getSiteUrl = () => {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;
  const url = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;

  return url.replace(/\/$/, "");
};
