export function slugify(value: string) {
    return value
        .toLowerCase() // Convert to lowercase
        .trim() // Remove leading and trailing whitespace
        .normalize('NFD') // Normalize the string to decompose combined characters
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritical marks
        .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-'); // Remove consecutive hyphens
}
