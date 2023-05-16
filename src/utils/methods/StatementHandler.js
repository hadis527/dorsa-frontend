class StatementHandler {
    StatementSplitter = (str, num) => {
      if (str && str.length > num) {
        return str.slice(0, num) + '...';
      } else if (str === null) {
        return ' ';
      } else {
        return str;
      }
    };
  }
  export default new StatementHandler();
  