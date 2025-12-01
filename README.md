# Verb Tenses Table (VTT)

A modern, interactive Single Page Application (SPA) for learning and practicing English verb tenses, built with Alpine.js, Bootstrap 5, and AI-powered predictions.

![VTT Screenshot](https://via.placeholder.com/800x450/4f46e5/ffffff?text=Verb+Tenses+Table+SPA)

## 🌟 Features

### Interactive Verb Conjugation
- **Dynamic Tense Table**: View all English verb tenses (Simple, Continuous, Perfect, Perfect Continuous) for any verb
- **Real-time Updates**: Instantly see verb forms as you type
- **Active/Passive Voice**: Examples in both active and passive voice
- **Smart Forms**: Automatic detection of regular/irregular verbs

### AI-Powered Features
- **Brain.js Integration**: Machine learning predictions for verb classification
- **Confidence Scoring**: AI indicates prediction reliability
- **Model Training**: Train the neural network with custom data

### Data Visualization
- **D3.js Charts**: Visual representation of tense usage frequency
- **Interactive Graphs**: Dynamic updating based on selected verb

### Modern UI/UX
- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Dark/Light Mode**: Toggle between themes
- **Compact Layout**: Optimized for small screens (sm breakpoint)
- **Font Awesome Icons**: Visual enhancements throughout
- **Google Fonts**: Clean, modern typography with Inter font

### Comprehensive Verb Database
- **Irregular Verbs**: Complete list of irregular English verbs
- **Quick Selection**: One-click access to common verbs
- **Verb Statistics**: Detailed breakdown of verb forms

## 🛠️ Technologies Used

- **Alpine.js** - Lightweight reactive framework
- **Bootstrap 5** - Responsive CSS framework
- **Brain.js** - Neural networks for AI predictions
- **D3.js** - Data visualization library
- **Font Awesome 6** - Icon toolkit
- **Google Fonts** - Web font service
- **CDN Delivery** - All dependencies via Content Delivery Networks

## 🚀 Quick Start

### Option 1: Direct File Open
Simply open `index.html` in any modern web browser. No installation required!

### Option 2: Live Demo
Visit the [live demo](https://pwrmind.github.io/VerbTensesTable/) (if deployed)

### Option 3: Local Development
1. Clone the repository:
```bash
git clone https://github.com/yourusername/verb-tenses-table.git
cd verb-tenses-table
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

3. Navigate to `http://localhost:8000` in your browser

## 📖 How to Use

### Basic Usage
1. **Enter a Verb**: Type any English verb in the input field (e.g., "walk", "see", "go")
2. **View Conjugations**: The table automatically updates with all tense forms
3. **Explore Examples**: See affirmative, interrogative, and negative examples for each tense

### Advanced Features
- **AI Prediction**: Click the robot icon for AI classification of verb type
- **Train AI Model**: Improve prediction accuracy by training the neural network
- **Visualize Data**: Check the Usage Frequency chart for graphical insights
- **Toggle Theme**: Switch between dark and light modes using the moon/sun icon
- **Quick Verbs**: Use the quick-select buttons for common verbs

### Verb Examples
- Regular verbs: walk, talk, play, help
- Irregular verbs: go, see, take, make, be, have, do
- Mixed forms: dream, learn, burn (both regular and irregular forms)

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile**: Compact tables with sm-optimized Bootstrap classes
- **Tablet**: Two-column layout for medium screens
- **Desktop**: Full-featured three-column interface
- **Print**: Clean formatting for printing verb tables

## 🤖 AI Implementation

### Neural Network
- **Architecture**: 2 hidden layers (6-4 neurons)
- **Training**: 2000 iterations on labeled verb data
- **Features**: Character encoding, word length, ending patterns
- **Accuracy**: Typically achieves 85-95% confidence on trained verbs

### Training Data
The model is pre-trained on:
- 8 regular verb patterns
- 8 irregular verb patterns
- Extensible with custom training

## 📊 D3.js Visualization

### Features
- **Bar Charts**: Visual representation of tense usage frequency
- **Dynamic Updates**: Charts refresh with verb changes
- **Theme Support**: Adapts to dark/light mode
- **Responsive**: Scales with screen size

## 🎨 UI Components

### Main Components
1. **Verb Input Card**: Central control panel with AI features
2. **Tense Table**: Comprehensive verb conjugation matrix
3. **Irregular Verbs List**: Scrollable database of irregular verbs
4. **AI Prediction Panel**: Machine learning insights and controls
5. **Usage Chart**: Data visualization of tense frequencies

### Design Features
- **Card-based Layout**: Clean, organized information presentation
- **Color Coding**: Visual distinction between tense types
- **Interactive Elements**: Hover effects, transitions, and feedback
- **Accessibility**: Semantic HTML and ARIA attributes

## 📁 Project Structure

```
verb-tenses-table/
├── index.html          # Main application file (contains all code)
├── README.md           # This documentation file
└── (Optional assets)
    ├── screenshots/
    └── examples/
```

## 🔧 Customization

### Modifying Verb Database
Edit the `irregularVerbs` object in the script section to add/remove verbs:

```javascript
irregularVerbs: {
    "yourverb": { 
        baseForm: "yourverb", 
        pastSimple: "pastform", 
        pastParticiple: "participleform" 
    },
    // ... existing verbs
}
```

### Styling Customization
Modify the CSS variables in the `<style>` section:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
}
```

### Adding New Features
The modular Alpine.js structure makes it easy to extend:
- Add new verb analysis features
- Implement additional visualization types
- Integrate with external APIs (dictionary, pronunciation, etc.)

## 🌐 Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 60+     | ✅ Full  |
| Firefox | 55+     | ✅ Full  |
| Safari  | 12+     | ✅ Full  |
| Edge    | 79+     | ✅ Full  |
| Opera   | 50+     | ✅ Full  |

**Note**: Requires JavaScript and modern ES6+ support.

## 📈 Performance

- **Single File**: All code in one HTML file for easy distribution
- **CDN Dependencies**: Fast loading of external libraries
- **Lazy Loading**: AI model trains on-demand
- **Optimized Assets**: Minimal external requests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Commit your changes: `git commit -m 'Add feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

### Areas for Contribution
- Add more irregular verbs to the database
- Improve AI training data and accuracy
- Enhance visualization with more chart types
- Add pronunciation guides (audio)
- Implement spaced repetition for learning
- Add multi-language support

## 🐛 Troubleshooting

### Common Issues

1. **AI not working**
   - Ensure Brain.js loaded correctly from CDN
   - Check browser console for errors
   - Click "Train AI Model" button to initialize

2. **Chart not displaying**
   - Verify D3.js loaded from CDN
   - Check if browser blocks external scripts
   - Try refreshing the page

3. **Verb forms incorrect**
   - Ensure verb is in base form (infinitive)
   - Check irregular verbs database
   - Verify spelling

4. **Layout issues on mobile**
   - Clear browser cache
   - Ensure viewport meta tag is present
   - Check for conflicting browser extensions

### Browser Console Commands
For advanced users, the application exposes:
- `window.verbApp()` - Alpine.js component instance
- Access to D3.js and Brain.js objects

## 📚 Learning Resources

### English Verb Tenses
- [British Council: Verb Tenses](https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/verb-tenses)
- [Perfect English Grammar](https://www.perfect-english-grammar.com/verb-tenses.html)
- [EF English First: Verb Tenses](https://www.ef.edu/english-resources/english-grammar/verb-tenses/)

### Technology Documentation
- [Alpine.js Documentation](https://alpinejs.dev/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Brain.js Documentation](https://brain.js.org/)
- [D3.js Documentation](https://d3js.org/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- **AngularJS Team**: Original inspiration from Angular-based verb tenses table
- **Alpine.js Creators**: For the lightweight reactive framework
- **Bootstrap Team**: For the responsive CSS framework
- **Brain.js Contributors**: For the browser-based neural network library
- **D3.js Community**: For the powerful data visualization library

## 📞 Support

For support, questions, or feedback:
- Create an issue in the GitHub repository
- Email: your-email@example.com
- Twitter: [@yourhandle](https://twitter.com/yourhandle)

---

**Made with ❤️ for English learners and developers**

*This tool is designed for educational purposes. While we strive for accuracy, always verify verb forms with authoritative sources.*
