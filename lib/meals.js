import sql from "better-sqlite3";

// Mi connetto al db
const db = sql("meals.db");

export async function getMeals() {
	// Per simulare un ritardo dal db
	await new Promise((resolve) => setTimeout(resolve, 2000));
	// Recupero tutti i dati dalla tabella 'meals'
	return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
	return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
