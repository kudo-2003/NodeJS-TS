import axios from "axios";

const getCompactWeather = async () => {
  const url = "https://wttr.in/~16.0679814,108.2119396?format=%25C+%25t+%25w";

  try {
    const response = await axios.get(url, {
      headers: { "User-Agent": "weather-ts-app" },
      responseType: "text",
    });

    console.log("🌦️ Thời tiết tại Đà Nẵng:");
    console.log(response.data.trim());
  } catch (error) {
    console.error("❌ Lỗi khi lấy dữ liệu thời tiết:", error);
  }
};

getCompactWeather();
