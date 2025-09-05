# Dekamond Dashboard

A modern, responsive dashboard application built with Next.js and TypeScript, featuring a clean UI and robust form handling capabilities.

## ✨ Features

- **Modern UI**: Built with shadcn/ui components and Tailwind CSS for a sleek, professional interface
- **Type Safety**: Full TypeScript support for better development experience and code reliability
- **Form Management**: Robust form handling with React Hook Form and Yup validation
- **API Integration**: Seamless HTTP requests using Axios
- **Icons**: Beautiful icons powered by Lucide React
- **Responsive Design**: Mobile-first approach with Tailwind CSS utilities
- **Developer Experience**: Hot reload and fast refresh for efficient development

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Reusable component library
- **HTTP Client**: [Axios](https://axios-http.com/) - Promise-based HTTP client
- **Forms**: [React Hook Form](https://react-hook-form.com/) - Performant forms with easy validation
- **Validation**: [Yup](https://github.com/jquense/yup) - Schema validation library
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icons

## 🚀 Quick Start

### Prerequisites

Make sure you have Node.js (version 16.8 or later) installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Jam-Hejrati/dekamond-dashboard.git
cd dekamond-dashboard
```

2. Install dependencies:

```bash
npm i
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

That's it! Your Dekamond Dashboard should now be running locally.

## 📁 Project Structure

```
dekamond-dashboard/
├── app/                    # Next.js 13+ App Router
├── components/             # Reusable UI components
│   └── ui/                # shadcn/ui components
├── lib/                   # Utility functions and configurations
├── package.json
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server

## 🎨 Customization

### Styling

- Modify `tailwind.config.js` to customize your Tailwind CSS configuration
- Update global styles in `styles/globals.css`
- Use shadcn/ui components and customize them as needed

### Components

- Add new shadcn/ui components using: `npx shadcn-ui@latest add <component-name>`
- Create custom components in the `components/` directory
- Leverage TypeScript for better component props and state management

### Forms

- Use React Hook Form with Yup validation for robust form handling
- Create reusable form components with proper TypeScript typing

## 🌐 API Integration

This project uses Axios for HTTP requests. Configure your API endpoints and create service functions for clean separation of concerns.

Example API service:

```typescript
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const fetchDashboardData = async () => {
  const response = await api.get("/dashboard");
  return response.data;
};
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions, please:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the component documentation for [shadcn/ui](https://ui.shadcn.com/)
3. Create an issue in this repository

---

**Happy coding!** 🚀
