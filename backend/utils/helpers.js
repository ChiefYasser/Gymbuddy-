export function formatDate(date = new Date()) {
  return new Date(date).toISOString();
}

export function calculateWorkoutVolume(sets = []) {
  // sets = [{ reps: Number, weight: Number }]
  return sets.reduce((total, s) => total + (s.reps * (s.weight || 0)), 0);
}

export function cleanText(str = "") {
  return str.replace(/\s+/g, " ").trim();
}
