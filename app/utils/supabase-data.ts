import supabase from "../utils/supabase";

export default async function getHunts(){
  let { data } = await supabase
    .from("hunts")
    .select();

  console.log(data);

  return data;
}