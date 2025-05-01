# QR Code Generator

A simple, elegant web application that allows users to generate QR codes instantly from any text or URL input. Built with vanilla JavaScript, this project provides a clean user interface and smooth user experience.

![QR Code Generator](Images/qrcode.png)

## Live Demo
[QR code generator](https://qrcode-generator-osamabinadnan.vercel.app/)

## 🚀 Features

- Generate QR codes from any text or URL
- Real-time QR code generation
- Visual feedback for empty inputs
- Responsive and mobile-friendly design
- Clean and intuitive user interface
- Error handling with animation

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- [QR Server API](https://goqr.me/api/)

## 💻 How to Use

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Enter any text or URL in the input field
4. Click the "Generate QR Code" button
5. Your QR code will appear below the input field

## 🔧 Implementation Details

### HTML Structure
```html
- Responsive viewport setup
- Clean container structure
- Input field for text/URL
- QR code display area
- Generate button
```

### CSS Features
```css
- Modern and responsive design
- Smooth animations
- Error feedback animations
- Clean layout and spacing
- Mobile-friendly styling
```

### JavaScript Functionality
```javascript
- Real-time QR code generation
- Input validation
- Error handling with visual feedback
- Integration with QR Server API
```

## 🌐 API Integration

The project uses the QR Server API to generate QR codes:
```
https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=[YOUR-TEXT-HERE]
```

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- Desktop browsers
- Tablets
- Mobile devices

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## 📜 License

This project is open source and available under the MIT License.

## 🙏 Credits

- QR code generation powered by [QR Server API](https://goqr.me/api/)
- Icons and images from the project assets

## 📞 Contact

If you have any questions or suggestions, feel free to open an issue or create a pull request.