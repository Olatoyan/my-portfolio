import ProjectBox from "./ProjectBox";

function ProjectSection() {
  return (
    <section className="px-32">
      <h2 className="text-[#42446e] text-[4.8rem] font-bold leading-[2.6rem] pb-20 pt-80 font-ibarra text-center">
        Projects
      </h2>
      <h3 className="text-[#666] text-[2rem] leading-[2.6rem] text-center">
        Things I've built so far
      </h3>

      <div className="grid grid-cols-3 gap-32 pt-[14rem]">
        <ProjectBox
          img="./product-feedback.png"
          title="Product Feedback"
          description="This app allows users to create, edit and delete a feedback and also engage with the community by commenting on feedback entries and also responding to existing comments and replies. And easily modify or delete comments and replies you've contributed."
        />
        <ProjectBox
          img="./invoice-app.png"
          title="Invoice App"
          description="This Invoice App project allows users to manage invoices seamlessly. Create, edit, and delete invoices with form validations. Enjoy features like saving drafts, marking invoices as paid, and filtering by status. The app also offers a sleek light/dark mode for a personalized experience."
        />
        <ProjectBox
          img="./devlinks.png"
          title="Link Sharing App"
          description="DevLinks is a web application that allows users to manage and share links effortlessly. With intuitive features such as link CRUD operations, drag-and-drop functionality, and real-time link previews, users can organize their links seamlessly. The application also enables users to set up their profiles, including profile pictures."
        />
        <ProjectBox
          img="./hangman.png"
          title="Hangman game"
          description="The Hangman Game is a classic word-guessing game where players attempt to guess a word letter by letter. With intuitive gameplay and vibrant graphics, it's an engaging way to challenge your vocabulary skills."
        />
        <ProjectBox
          img="./connect-four.png"
          title="Connect Four Game"
          description="Connect Four is a classic strategy game where players take turns dropping colored discs into a grid with the goal of connecting four of their own discs in a row. It's a fun and challenging game suitable for players of all ages."
        />
        <ProjectBox
          img="./quiz.png"
          title="Quiz App"
          description="The Quiz Application offers a dynamic platform for creating and taking quizzes on various topics. With features like multiple-choice questions, timers, and score tracking, it provides an interactive and educational experience for users."
        />
      </div>
    </section>
  );
}

export default ProjectSection;
