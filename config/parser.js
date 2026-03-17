// parser.js

const UserDashboard = require('./UserDashboard');

class Parser {
  constructor(userDashboard) {
    this.userDashboard = userDashboard;
  }

  parseData(data) {
    if (!data || typeof data!== 'object') {
      throw new Error('Invalid data');
    }

    const parsedData = {};

    Object.keys(data).forEach((key) => {
      if (this.userDashboard.supportedFields.includes(key)) {
        parsedData[key] = data[key];
      }
    });

    return parsedData;
  }
}

module.exports = Parser;