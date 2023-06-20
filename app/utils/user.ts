export async function getUserDataByEmail(id: string | null) {
  if (id) {
    const res = await fetch(`${process.env.BASE_URL}/api/user/?email=${id}`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch lists!');
    }

    return res.json();
  } else {
    return null;
  }
}
