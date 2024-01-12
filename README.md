# Personal Website with Blog and Resume


![Banner](https://cloud-4tgxbh5wm-hack-club-bot.vercel.app/0frontend_dev.jpeg)

</br>
<div align="center">
 <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Javascript-black?style=for-the-badge&logoColor=white&logo=javascript&color=3178C6" alt="typescript" />
  </div>
</div>
</br>

This is a personal website built using Next.js, a React framework for building server-side rendered and static websites. The site includes features like a blog and resume section. It dynamically fetches data from `data/portfolio.json` to populate the content.

## Features

- **Server-side rendering**: The site is built using Next.js, which enables server-side rendering for improved performance and SEO.
- **Dynamic routing**: The site uses dynamic routing to generate pages for each blog post based on the slug.
- **Markdown support**: The blog posts are written in Markdown format, making it easy to write and format content.
- **API routes**: The site includes API routes for creating, editing, and deleting blog posts. These routes are only accessible in the development environment.
- **Image handling**: The site uses the Next.js `Image` component to handle image optimization and lazy loading.
- **Animation**: The site includes animations using the `framer-motion` library to create smooth transitions and effects.
- **Cursor**: The site includes a custom cursor that adds a unique visual element.
- **Social media integration**: The site includes social media icons for easy sharing and following on various platforms.
- **Responsive design**: The site is designed to be responsive and optimized for different screen sizes.
- **Dark mode**: The site includes a dark mode toggle that can be used to switch between light and dark themes.
- **Calendly Integration**: The site includes a Calendly button that can be used to schedule meetings.

## Installation

1. Clone the repository: `git clone https://github.com/devsrijit/personal-website-2.git`
2. Navigate to the project directory: `cd personal-website-2`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit `http://localhost:3000` to view the site.
6. Edit `data/portfolio.json` to add your own content.
7. Put your own calendly URL in `components/Footer/index.js` to enable the Calendly button.

## Usage

- To create a new blog post, click on the "Add New Post +" button in the bottom right corner of the page. This feature is only available in the development environment.
- To edit a blog post, click on the "Edit this blog" button at the bottom of the blog post page. This feature is only available in the development environment.
- To delete a blog post, click on the "Delete" button at the bottom of the blog post page. This feature is only available in the development environment.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
