# Weather App 🌤️

A modern, responsive, and visually stunning Weather Application built with **React.js**. This app leverages the OpenWeatherMap API to provide real-time weather updates with a sleek, glassmorphism-inspired UI.

## ✨ Features

- **Live Weather Data**: Fetch current weather conditions for any city worldwide.
- **Glassmorphism Design**: Premium UI with translucent panels and dynamic backgrounds.
- **Responsive Layout**: Optimized for both mobile and desktop experiences.
- **Dynamic Search**: Search by city name using the input field (Enter key or Search button).
- **Error Handling**: Friendly error messages for invalid city names or network issues.
- **Visual Feedback**: Loading spinners and smooth transitions.

## 🛠️ Tech Stack

- **Frontend**: React.js (Vite)
- **Styling**: Vanilla CSS (Custom Variables, Flexbox/Grid, Glassmorphism)
- **Icons**: Lucide React
- **API**: OpenWeatherMap API
- **Deployment**: Netlify Ready

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/heyaryanmittal/weather-app.git
   cd weather-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your API key:
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
   *(Note: The project uses a default key for demonstration purposes if valid)*

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 API Reference

This project uses the [OpenWeatherMap API](https://openweathermap.org/api).

- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Parameters**: `q` (city), `appid` (key), `units` (metric)

## 📦 Deployment (Netlify)

To deploy this project to Netlify:

1. Push your code to GitHub.
2. Log in to Netlify and "New Site from Git".
3. Select your repository.
4. Set Build Command: `npm run build`
5. Set Publish Directory: `dist`
6. Add Environment Variable `VITE_WEATHER_API_KEY` in Netlify settings.

## 📄 License

This project is licensed under the MIT License.

---
Built with ❤️ by [Your Name]

<!-- update 1 -->