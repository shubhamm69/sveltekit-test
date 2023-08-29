export async function fetchContacts() {
    const response = await fetch('https://rishabh-test-api.vercel.app/api/contact');
    const data = await response.json();
    return data;
}
