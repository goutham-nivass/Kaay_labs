# 🎯 Smart Data Viewer React App

A powerful React application that intelligently renders API data based on its structure. It automatically detects data patterns and presents them in the most suitable format - tables for tabular data and cards for key-value pairs.

## ✨ Features

- **Smart Data Detection**
  - Automatically identifies data structure patterns
  - Seamlessly switches between table and card views
  - Handles nested data structures

- **Table View**
  - Sortable columns
  - Pagination
  - Column filtering
  - Responsive design
  - Export functionality (CSV, Excel)
  - Custom column width adjustment

- **Card View**
  - Responsive grid layout
  - Expandable cards for detailed view
  - Dynamic theming
  - Search and filter capabilities
  - Smooth animations

- **Common Features**
  - Dark/Light mode toggle
  - Data caching
  - Loading states
  - Error handling
  - Search functionality
  - Responsive design

## 🛠️ Tech Stack

- React 18
- TypeScript
- Redux Toolkit (state management)
- React Query (data fetching)
- Material-UI (UI components)
- Styled-components (styling)
- React-Table (table functionality)
- Axios (API calls)
- React Testing Library & Jest
- ESLint & Prettier

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm/yarn
- Git

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/smart-data-viewer.git
cd smart-data-viewer
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create `.env` file:
```env
REACT_APP_API_URL=your_api_endpoint
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Table/
│   │   ├── DataTable.tsx
│   │   ├── TableFilters.tsx
│   │   └── TablePagination.tsx
│   ├── Card/
│   │   ├── DataCard.tsx
│   │   ├── CardGrid.tsx
│   │   └── CardDetails.tsx
│   └── common/
│       ├── Loading.tsx
│       ├── Error.tsx
│       └── SearchBar.tsx
├── hooks/
│   ├── useDataDetector.ts
│   ├── useTableConfig.ts
│   └── useCardLayout.ts
├── services/
│   ├── api.ts
│   └── dataTransformer.ts
├── store/
│   ├── slices/
│   └── store.ts
├── utils/
│   ├── dataHelpers.ts
│   └── formatters.ts
├── types/
│   └── index.ts
└── App.tsx
```

## 🎯 Usage

### Fetching and Displaying Data

```typescript
import { useDataFetcher } from './hooks/useDataFetcher';

function MyComponent() {
  const { data, isLoading, error } = useDataFetcher('endpoint');

  if (isLoading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return <SmartDataViewer data={data} />;
}
```

### Smart Data Viewer Component

```typescript
import { SmartDataViewer } from './components';

// It automatically detects data structure and renders appropriate view
<SmartDataViewer 
  data={yourData}
  config={{
    theme: 'light',
    pagination: true,
    itemsPerPage: 10
  }}
/>
```

## ⚙️ Configuration

### Table View Options
```typescript
{
  enableSort: boolean;
  enableFilter: boolean;
  enablePagination: boolean;
  densePadding: boolean;
  showToolbar: boolean;
  defaultPageSize: number;
}
```

### Card View Options
```typescript
{
  gridColumns: number;
  cardSize: 'small' | 'medium' | 'large';
  enableExpand: boolean;
  showHeader: boolean;
}
```

## 🧪 Testing

Run the test suite:
```bash
npm test
# or
yarn test
```

Run with coverage:
```bash
npm test -- --coverage
# or
yarn test --coverage
```

## 🔍 API Integration

Example API response handling:

```typescript
// Table data structure
{
  "headers": ["id", "name", "age"],
  "rows": [
    [1, "John", 25],
    [2, "Jane", 30]
  ]
}

// Key-value pair structure
{
  "user": {
    "id": 1,
    "name": "John",
    "details": {
      "age": 25,
      "location": "New York"
    }
  }
}
```

## 🎨 Customization

### Theme Configuration

```typescript
const theme = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  error: '#dc3545',
  // Add more color variables
}

<SmartDataViewer theme={theme} />
```

### Custom Styling

```typescript
const StyledTable = styled(DataTable)`
  // Your custom CSS here
`;

const StyledCard = styled(DataCard)`
  // Your custom CSS here
`;
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Small: 576px
  - Medium: 768px
  - Large: 992px
  - Extra Large: 1200px

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Troubleshooting

Common issues and solutions:

1. **Data not rendering properly?**
   - Check data structure format
   - Verify API response
   - Check console for errors

2. **Performance issues?**
   - Implement virtualization for large datasets
   - Enable pagination
   - Check network tab for API response times

## 📊 Performance Optimization

- Lazy loading of components
- Memoization of expensive calculations
- Virtual scrolling for large datasets
- Image optimization
- Code splitting

## 🔐 Security Considerations

- Input sanitization
- API key protection
- XSS prevention
- CORS configuration
