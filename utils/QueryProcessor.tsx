export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrewid")) {
    return "aturullo";
  }
  if (query.toLowerCase().includes("what is your name?")) {
    return "aturullols";
  }

  if (query.toLowerCase().includes("plus")) {
    const str = "id=123&count=45";
  // gets list of numbers 
    const numbers = str.trim().split(/\s+/).map(Number);
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
      total+= numbers[i]
    }
    return total.toString();
  }

  return "";
}
