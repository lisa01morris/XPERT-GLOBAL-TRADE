// Example Node script showing server-side Supabase admin usage.
// Rename to supabase-admin.js and set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your environment (server-only).

const { createClient } = require('@supabase/supabase-js')

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in env')
  process.exit(1)
}

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

async function listUsers() {
  const { data, error } = await supabase.auth.admin.listUsers()
  if (error) return console.error('listUsers error', error)
  console.log('users:', data.users.length)
}

async function updateUserMetadata(userId, metadata) {
  const { data, error } = await supabase.auth.admin.updateUserById(userId, { user_metadata: metadata })
  if (error) return console.error('updateUser error', error)
  console.log('updated user', data)
}

// Example usage
;(async ()=>{
  await listUsers()
  // await updateUserMetadata('user-uuid', { role: 'admin' })
})()
