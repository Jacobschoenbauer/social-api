module.exports = {
    format_date: (Date) => {
      // Format date as MM/DD/YYYY
        const dateObject = new Date (Date)
      return dateObject.toLocaleDateString();
    },
    }