# quetico-onboarding
# Quetico Onboarding System

A comprehensive customer onboarding management system built with Next.js and TypeScript. This application helps streamline the customer onboarding process by providing an interactive checklist system with progress tracking and data persistence.

## Features

- 📋 Interactive nested checklists
- 💾 Local storage persistence
- 📊 Progress tracking
- ⏱️ Timestamp tracking for completed items
- 📱 Responsive design
- 🎨 Quetico brand theming
- 👥 Multi-customer management

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/quetico-onboarding.git
cd quetico-onboarding
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
quetico-onboarding/
├── src/
│   ├── app/                # Next.js app directory
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   └── ...            # Custom components
│   ├── lib/               # Utility functions and types
│   └── data/              # Data files
└── public/                # Static files
```

## Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: React Hooks
- **Data Persistence**: LocalStorage

## Usage

1. **Creating a New Checklist**:
   - Click "Create New Onboarding Checklist"
   - Enter customer name
   - Begin tracking onboarding progress

2. **Managing Existing Checklists**:
   - View all checklists on the home screen
   - Click any saved checklist to continue working
   - Progress is automatically saved

3. **Tracking Progress**:
   - Check items as they're completed
   - View section and overall progress
   - See timestamps for completed items

## Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Features

1. Create new components in `src/components`
2. Update types in `src/lib/types.ts`
3. Modify data structure in `src/data/sections.ts`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use of this code is strictly prohibited.

## Support

For support or questions, please contact the development team.
