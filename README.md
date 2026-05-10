# Premium Portfolio Website

A high-fidelity, modern, and aesthetically pleasing portfolio website built with the latest web technologies. This project showcases the work, experience, and skills of **Fateha Hossain Anushka**, a Full-stack Developer and CSE Undergraduate focusing on ML/AI and Data Science.

## ✨ Features

- **Stunning Aesthetics**: Uses glassmorphism effects, ambient orbs, and custom glow effects for a premium feel.
- **Handcrafted Animations**: Smooth entrance animations (`fade-up`), floating effects, and shimmers.
- **Native Dark Mode**: Automatically adapts to system preferences with a deep, rich dark palette.
- **Dynamic Content Architecture**: All content (projects, education, experience) is driven by a single, structured file (`src/content/site.ts`), making it incredibly easy to update.
- **Responsive Design**: Pixel-perfect on mobile, tablet, and desktop viewports.
- **Contact Form Integration**: Ready for backend integration via Nodemailer.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://reactjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Mailing**: [Nodemailer](https://nodemailer.com/)

## 🚀 Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/anushka06onu/portfolio-site.git
   cd portfolio-site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the site**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```text
src/
├── app/               # Next.js App Router pages and layouts
│   ├── api/           # API routes (e.g., for contact form)
│   ├── globals.css    # Global styles with Tailwind 4 and custom animations
│   └── page.tsx       # Main portfolio landing page
├── components/        # Reusable UI components
└── content/
    └── site.ts        # Centralized data file containing all portfolio content
```

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

---

*Built with ❤️ by [Fateha Hossain Anushka](https://github.com/anushka06onu)*
