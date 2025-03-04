export function formatPhone(phone) {
	const phoneStr = phone.toString();
	return phoneStr.slice(0, 3) + '.' + phoneStr.slice(3, 6) + '.' + phoneStr.slice(6);
}