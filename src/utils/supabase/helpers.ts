const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL!;

export function getImageUrl(endpoint: string) {
  return `${baseUrl}/${endpoint}`;
}
