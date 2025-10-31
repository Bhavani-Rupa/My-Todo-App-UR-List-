# UR List - Modern Todo Application

A beautiful, responsive todo application built with React and Vite, featuring a modern gradient design and comprehensive task management capabilities.

## 🌟 Features

### Core Functionality
- **Add Tasks**: Create new todo items with a clean, intuitive interface
- **Edit Tasks**: In-line editing with save/cancel options
- **Delete Tasks**: Remove completed or unwanted tasks
- **Toggle Completion**: Mark tasks as complete or incomplete with checkboxes
- **Filter Tasks**: View All, Completed, or Active tasks only

### User Experience
- **Modern Design**: Beautiful gradient background with glassmorphism effects
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Interactive UI**: Smooth animations and hover effects
- **Keyboard Support**: Enter key to add tasks, Escape to cancel editing
- **Visual Feedback**: Different styling for completed vs active tasks

## 🚀 Technology Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Styling**: Bootstrap 5.3.0
- **Icons**: Font Awesome 6.0.0
- **UI Components**: MDB React UI Kit 7.0.0
- **Development**: ESLint for code quality

## 🖥️ Technologies Used

- **React** – For building interactive UIs
- **Vite** – Fast development and build tool
- **Bootstrap** – Responsive design and layout
- **Font Awesome** – Icon library
- **MDB React UI Kit** – Material Design Bootstrap components
- **ESLint** – Code linting and quality
- **JavaScript (ES6+)** – Application logic
- **HTML5 & CSS3** – Markup and styling

## 📁 Project Structure

```
UR List/
├── src/
│   ├── App.js          # Main application component
│   ├── main.js         # React app entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── package-lock.json   # Dependency lock file
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Quick Start

1. **Clone or download the project**
   ```bash
   # Navigate to project directory
   cd "UR List"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The app will automatically reload when you make changes

## 📋 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready application
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Design Features

### Visual Elements
- **Gradient Background**: Purple to blue gradient (`#667eea` to `#764ba2`)
- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Color Coding**: Green tint for completed tasks
- **Rounded Corners**: Modern card-based layout
- **Shadow Effects**: Subtle shadows for depth

### Interactive Components
- **Smart Input**: Auto-focus and keyboard shortcuts
- **Filter Dropdown**: Easy task filtering options
- **Action Buttons**: Edit and delete with icons
- **Checkbox States**: Visual completion indicators

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-width layout with optimal spacing
- **Tablet**: Adjusted container sizes
- **Mobile**: Touch-friendly interfaces and compact layout

## 🔧 Configuration

### Vite Configuration
- React plugin for JSX support
- Fast development server
- Hot module replacement
- Optimized production builds

### ESLint Rules
- React-specific linting
- Hook dependency checking
- Unused variable detection
- Code quality enforcement

## 📊 Performance Features

- **Fast Rendering**: Efficient React component structure
- **Memory Management**: Proper state management
- **Bundle Optimization**: Vite's optimized build process
- **Asset Loading**: CDN-based external resources

## 🎯 Usage Examples

### Adding a Task
1. Type your task in the input field
2. Click "Add" button or press Enter
3. Task appears in the list immediately

### Editing a Task
1. Click the edit (pencil) icon next to any task
2. Modify the text in the inline editor
3. Press Enter or click checkmark to save
4. Press Escape or click X to cancel

### Filtering Tasks
- **All Tasks**: Shows everything (default)
- **Completed**: Shows only finished tasks
- **Active**: Shows only pending tasks

## 🔄 State Management

The application uses React's built-in state management:
- `useState` for component state
- Efficient re-rendering with proper key props
- Immutable state updates for better performance

## 🚀 Future Enhancements

Potential features for future versions:
- Local storage persistence
- Task categories/tags
- Due dates and reminders
- Drag and drop reordering
- Dark/light theme toggle
- Export functionality
- Task search capability


