export function isAdminUser(userId?: string | null) {
  if (!userId) return false

  const admins = (process.env.ADMIN_USER_IDS ?? '')
    .split(',')
    .map(id => id.trim())
    .filter(Boolean)

  return admins.includes(userId)
}