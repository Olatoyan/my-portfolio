import { useDarkMode } from "../contexts/DarkModeContext";
import ProjectBox from "./ProjectBox";

function ProjectSection() {
  const { isDarkMode } = useDarkMode();
  return (
    <section
      id="project"
      className="px-32 desktop:px-20 pt-80 laptop:pt-40 tablet:px-10 tablet:pt-20"
    >
      <h2
        className={`text-[4.8rem] font-bold leading-[4.8rem] pb-10 font-ibarra text-center laptop:text-[3rem] laptop:leading-[3rem] laptop:pb-4 ${
          isDarkMode ? "text-white" : "text-[#42446e]"
        }`}
      >
        Projects
      </h2>
      <h3
        className={`text-[2rem] laptop:text-[1.6rem] leading-[2.6rem] text-center ${
          isDarkMode ? "text-[#a7a7a7]" : "text-[#666]"
        }`}
      >
        Things I've built so far
      </h3>

      <div className="grid grid-cols-3 gap-32 pt-32 desktop:grid-cols-2 laptop:gap-20 tablet:grid-cols-1 tablet:pt-16">
        <ProjectBox
          img="./product-feedback.png"
          title="Product Feedback"
          description="This app allows users to create, edit and delete a feedback and also engage with the community by commenting on feedback entries and also responding to existing comments and replies. And easily modify or delete comments and replies you've contributed."
          url="https://toyan-product-feedback-app.vercel.app/"
          github="https://github.com/Olatoyan/Product-feedback-app"
        />
        <ProjectBox
          img="./invoice-app.png"
          title="Invoice App"
          description="This Invoice App project allows users to manage invoices seamlessly. Create, edit, and delete invoices with form validations. Enjoy features like saving drafts, marking invoices as paid, and filtering by status. The app also offers a sleek light/dark mode for a personalized experience."
          url="https://toyan-invoice-app.netlify.app/"
          github="https://github.com/Olatoyan/invoice-app"
        />
        <ProjectBox
          img="./devlinks.png"
          title="Link Sharing App"
          description="DevLinks is a web application that allows users to manage and share links effortlessly. With intuitive features such as link CRUD operations, drag-and-drop functionality, and real-time link previews, users can organize their links seamlessly. The application also enables users to set up their profiles, including profile pictures."
          url="https://toyan-devlinks.vercel.app/"
          github="https://github.com/Olatoyan/link-sharing-app"
        />
        <ProjectBox
          img="./hangman.png"
          title="Hangman game"
          description="The Hangman Game offers an entertaining way to test your knowledge across six diverse categories: movies, TV shows, animals, capital cities, countries, and sports. Challenge yourself with word-guessing fun and explore a variety of topics as you uncover hidden phrases and expand your vocabulary. With a total of 8 guesses, test your deduction skills and see if you can guess the phrase before the hangman is complete!"
          url="https://toyan-hangman.netlify.app/"
          github="https://github.com/Olatoyan/hangman-game"
        />
        <ProjectBox
          img="./connect-four.png"
          title="Connect Four Game"
          description="Connect Four is a classic strategy game where players take turns dropping colored discs into a grid with the goal of connecting four of their own discs in a row. It's a fun and challenging game suitable for players of all ages. Test your skills against our competitive AI, which strategically plays to win and blocks your moves, providing an engaging challenge for solo play."
          url="https://toyan-connect-four.netlify.app/"
          github="https://github.com/Olatoyan/connect-four-game"
        />
        <ProjectBox
          img="./quiz.png"
          title="Quiz App"
          description="The Quiz Application offers a dynamic platform for creating and taking quizzes on various topics. With features like multiple-choice questions and score tracking, it provides an interactive and educational experience for users. Dive into the world of HTML, CSS, JavaScript, and accessibility as you test your knowledge across these four essential categories."
          url="https://toyan-quiz.netlify.app/"
          github="https://github.com/Olatoyan/frontend-quiz-app"
        />
      </div>
    </section>
  );
}

export default ProjectSection;
