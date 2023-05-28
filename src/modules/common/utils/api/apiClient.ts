export default async function apiClient<T>(url: string, config: RequestInit = {}): Promise<T> {
	const response = await fetch(url, config);
	const { data } = await response.json();

	return data;
}
