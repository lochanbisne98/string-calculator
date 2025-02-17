# String Calculator TDD Kata

## 📝 Description

This project is a Test-Driven Development implementation of the String Calculator kata using Node.js and Jest.

## 🎯 Problem Statement

Create a String calculator with a single method:

```typescript
add(numbers: string): number
```

## ✨ Features

- [x] Empty string returns 0
- [x] Single number returns that number
- [x] Two numbers return their sum
- [x] Handles multiple numbers
- [x] Supports newlines as delimiters
- [x] Supports custom delimiters
- [x] Throws exception for negative numbers

## 🚀 Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lochanbisne98/string-calculator
   cd string-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🧪 Running Tests

* **Single run:**
  ```bash
  npm test
  ```

* **Watch mode:**
  ```bash
  npm run test:watch
  ```

## 💻 Code Examples

### Basic Usage
```javascript
const StringCalculator = require('./StringCalculator');
const calculator = new StringCalculator();

// Empty string
calculator.add("");  // Returns: 0

// Single number
calculator.add("1");  // Returns: 1

// Multiple numbers
calculator.add("1,2,3");  // Returns: 6

// New line delimiter
calculator.add("1\n2,3");  // Returns: 6

// Custom delimiter
calculator.add("//;\n1;2");  // Returns: 3
```

### Error Handling
```javascript
// Negative numbers throw an exception
calculator.add("-1,2");  // Throws: "negative numbers not allowed: -1"
calculator.add("1,-2,-3");  // Throws: "negative numbers not allowed: -2,-3"
```

## 📁 Project Structure

```
string-calculator/
├── node_modules/
├── stringCalculator.js     # Main implementation
├── stringCalculator.test.js # Test suite
├── package.json           # Project configuration
├── package-lock.json      # Dependency lock file
└── README.md             # Documentation
```

## 🔄 Development Workflow

This project follows the TDD (Test-Driven Development) cycle:

1. **Red** 🔴 - Write a failing test
2. **Green** 🟢 - Write minimal code to make the test pass
3. **Refactor** 🔵 - Clean up the code
4. Repeat ♻️

## 📋 Requirements

### Input Rules
- Method can take 0, 1, or 2 numbers in string format
- For empty string, return 0
- Numbers can be separated by commas or newlines
- Custom delimiters can be defined using `//[delimiter]\n[numbers...]` format

### Validation Rules
- Negative numbers are not allowed
- When negative numbers are found, throw an exception with all negative numbers in the message

## 👥 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## ✍️ Author

Lochan Bisne

---

*Made with ❤️ using Test-Driven Development*
