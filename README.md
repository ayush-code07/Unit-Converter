# 🔄 Unit Converter

A full-stack **Unit Converter** web application built with **React** (frontend) and **Node.js + Express** (backend). It supports seamless, real-time conversions across three main categories: Length, Weight, and Temperature.

## 🚀 Features

* 📏 **Length Conversion** – Millimeter, centimeter, meter, kilometer, inch, foot, yard, mile.
* ⚖️ **Weight Conversion** – Milligram, gram, kilogram, ounce, pound.
* 🌡️ **Temperature Conversion** – Celsius, Fahrenheit, Kelvin.
* ⚡ **Fast UI** – Responsive, modern interface built with React and Tailwind CSS v4.
* 🔗 **RESTful API** – Dedicated backend for handling precise conversion logic.

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React, Vite, React Router, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Styling** | Tailwind CSS v4, Google Fonts |

## 📁 Project Structure

```text
Unit-Converter/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── length.jsx      # Length conversion form
│   │   │   ├── weight.jsx      # Weight conversion form
│   │   │   ├── temperature.jsx # Temperature conversion form
│   │   │   └── result.jsx      # Displays conversion result
│   │   ├── main.jsx            # App entry point with routing
│   │   ├── App.jsx             # Root layout with navigation
│   │   └── index.css           # Global styles and Tailwind imports
│   └── index.html
├── backend/
│   └── app.js                  # Express server with conversion logic
└── README.md
```

## ⚙️ Getting Started

### Prerequisites
* **Node.js** (v18.0.0 or higher)
* **npm** (comes with Node.js)

### 🔧 Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node app.js
   ```
   *The server will run on `http://localhost:3000`.*

### 💻 Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   *The app will be available at `http://localhost:5173`.*

## 🔌 API Endpoints

All endpoints accept a **POST** request with a JSON body.

### Example Request (`POST /length`)
```json
{
  "val": 100,
  "convertFrom": "meter",
  "convertTo": "kilometer"
}
```

### Example Response
```json
{
  "val": 100,
  "convertFrom": "meter",
  "convertTo": "kilometer",
  "result": 0.1
}
```

## 🧭 App Routes

| Route | Component | Description |
| :--- | :--- | :--- |
| `/length` | `Length` | Length unit converter interface |
| `/weight` | `Weight` | Weight unit converter interface |
| `/temperature` | `Temperature` | Temperature unit converter interface |
| `/result` | `Result` | Displays the final conversion result |

## 🤝 Contributing

1. **Fork** the Project
2. Create your **Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** your Changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the Branch (`git push origin feature/AmazingFeature`)
5. Open a **Pull Request**

## 📄 License

Distributed under the MIT License.

## 👨‍💻 Author

**Ayush Jagnani**
