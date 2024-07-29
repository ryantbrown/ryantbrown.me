"use server";

export async function subscribe(
  // biome-ignore lint/suspicious/noExplicitAny:
  prevState: any,
  data: FormData,
) {
  const email = data.get("email");

  console.log(email);

  return { email };
}
