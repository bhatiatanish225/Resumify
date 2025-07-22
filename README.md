# 🚀 Resumify — Resume to Website Builder Powered by AI

**Resumify** is a smart, AI-powered platform that instantly transforms your resume PDF into a beautiful, customizable portfolio website.

Built with Next.js, Together.ai’s Qwen 2.5 72B model, and Vercel’s AI SDK, Resumify helps you showcase your career and skills online — no code required.

---

## 🌟 Features

- 🔐 **User authentication** via Clerk
- 📄 **PDF uploads** securely stored with Cloudinary
- 🛡️ **LlamaGuard safety checks** before AI parsing
- 🤖 **Resume parsing** using Qwen 2.5 72B in JSON mode
- 🧠 **Structured data extraction** (skills, projects, experience, etc.)
- ⚡ **Redis-backed storage** using Upstash
- 🔍 **Request observability** via Helicone
- 🌐 **Hosted instantly** on Vercel
- 📂 **Dynamic portfolio site generation** at `/u/[username]`

---

## 🛠 Tech Stack

| Feature             | Technology/Service        |
|---------------------|---------------------------|
| LLM API             | Together.ai |
| LLM SDK             | Vercel AI SDK |
| Resume Safety Check | Llama Guard |
| Authentication      | Clerk.dev |
| Web Framework       | Next.js (App Router) |
| File Storage        | Cloudinary |
| Observability       | Helicone |
| In-Memory DB        | Upstash Redis |
| Hosting             | Vercel |

---

## ⚙️ How It Works

1. Sign Up or Log In using Clerk authentication.
2. Upload your resume in PDF format.
3. Resume is stored on Cloudinary and scanned via LlamaGuard.
4. Together.ai’s Qwen 2.5 72B parses your resume using JSON mode.
5. Data is extracted, including:
   - Name & Bio
   - Work Experience
   - Education
   - Projects
   - Skills
   - Contact & Social Links
6. Data is saved to Upstash Redis.
7. A personalized site is generated at `/u/[your-username]`.

---

## 🧪 Getting Started (Local Development)

### 1. Clone the Repository

    git clone https://github.com/bhatiatanish225/resumify.git
    cd resumify

### 2. Install Dependencies

    pnpm install

### 3. Create Required Accounts

| Service     | Used For               |
|-------------|------------------------|
| Together.ai | Resume parsing (LLM)   |
| Upstash     | Redis DB               |
| Cloudinary  | PDF storage            |
| Clerk.dev   | User authentication    |
| Vercel      | Hosting & CI/CD        |

### 4. Set Up Environment Variables

Copy the example environment file and replace the values:

    cp .env.example .env

Example `.env`:

    # Clerk
    CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    CLERK_JWT_KEY=

    # Together.ai
    TOGETHER_API_KEY=

    # Upstash Redis
    UPSTASH_REDIS_REST_URL=
    UPSTASH_REDIS_REST_TOKEN=

    # Cloudinary
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=

    # Helicone
    HELICONE_API_KEY=

    # App Config
    NEXT_PUBLIC_SITE_URL=http://localhost:3000

### 5. Start the Dev Server

    pnpm run dev

Visit: http://localhost:3000

---

## 📁 Folder Structure

    resumify/
    ├── app/                      # App directory for Next.js
    │   ├── api/                  # Upload & parsing routes
    │   ├── (auth)/               # Auth pages via Clerk
    │   ├── u/[username]/         # Dynamic user site
    │   └── page.tsx              # Landing page
    ├── components/               # UI components
    ├── lib/                      # API wrappers (LLM, Cloudinary, Redis)
    ├── utils/                    # Helper functions
    ├── public/                   # Static files
    ├── .env.example              # Env variable template
    └── README.md                 # You're here!

---

## 📸 Demo

  



## 📄 License

This project is proprietary.  
All rights reserved © 2025 Tanish Bhatia.

---

## 🙏 Acknowledgements

- Together.ai
- Clerk.dev
- Qwen 2.5 72B
- Cloudinary
- Helicone
- Upstash
- Vercel
- Llama Guard

---

## 👤 Author

**Tanish Bhatia**  
