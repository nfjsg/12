
const helpers = {
  // Format date as MM/DD/YYYY
  format_date: (date) => {
    return date.toLocaleDateString();
  },

  // Format large numbers with commas
  format_amount: (amount) => {
    return parseInt(amount).toLocaleString();
  },

  // Get a random emoji
  get_emoji: () => {
    const randomNum = Math.random();

    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },
};

module.exports = helpers;
