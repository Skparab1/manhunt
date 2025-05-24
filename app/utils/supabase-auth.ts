import { createClient } from '@supabase/supabase-js'

// const supabaseAdmin = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL, 
//     process.env.SERVICE_ROLE, {
//   auth: {
//     autoRefreshToken: false,
//     persistSession: false
//   }
// })

// // // Access auth admin api
// // const adminAuthClient = supabaseAdmin.auth.admin

// export default supabaseAdmin;

export default async function createSupbaseServerClient() {
	return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL, 
      process.env.SERVICE_ROLE, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}

export async function getUsers() {
  const supabaseAdmin = await createSupbaseServerClient();
  const adminAuthClient = supabaseAdmin.auth.admin;

  const { data: { users }, error } = await adminAuthClient.listUsers()

  let userList1: string[] = [];
  users?.forEach((user) => {
      if (user.email) {
          userList1.push(user.email);
      }
  })

  console.log(userList1 +" users");

  return userList1;
}
