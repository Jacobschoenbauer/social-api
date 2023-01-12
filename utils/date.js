module.exports = {
    format_date: (timeStamp) => {
      // Format date as MM/DD/YYYY
        const dateObject = new Date (timeStamp)
      return dateObject.toLocaleDateString();
    },
    }