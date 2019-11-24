module.exports = {
  // Example: AutoFramework_057602943343303625@xxx.com
  generateRandomEmailAddress() {
    const emailAddress = `AutoFramework_${Math.random().toString().replace('0.', '')}@xxx.com`;
    return emailAddress;
  },

  // Example: d7913n4vixuutisf9eopza
  generateRandomString() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  },
};
