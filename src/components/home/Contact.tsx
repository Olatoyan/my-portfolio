import { useForm } from "react-hook-form";
import { useDarkMode } from "../contexts/DarkModeContext";

type ContactState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactState>();

  function onnSubmitData(data: ContactState) {
    console.log(data);
  }

  const { isDarkMode } = useDarkMode();
  return (
    <section
      id="contact"
      className="grid grid-cols-[1.5fr_2fr] gap-20 px-32 desktop:px-20 py-80 tablet:grid-cols-1 tablet:gap-12 tablet:px-10 tablet:py-20"
    >
      <div className="pt-32 tablet:pt-0">
        <h3
          className={`text-[5.2rem] tablet:text-[3rem] font-bold leading-[4.8rem] pb-4 ${
            isDarkMode ? "text-white" : "text-[#42446e]"
          }`}
        >
          Let’s work together
        </h3>
        <p
          className={`text-[2rem] tablet:text-[1.6rem] leading-[2.6rem] ${
            isDarkMode ? "text-[#a7a7a7]" : "text-[#666]"
          }`}
        >
          I’d love to hear about what you’re working on and how I could help.
        </p>
      </div>
      <form onSubmit={handleSubmit(onnSubmitData)} className="space-y-10">
        <div>
          <label
            htmlFor="name"
            className={`text-[1.3rem] font-bold leading-[3rem] pb-3 ${
              isDarkMode ? "text-white" : "text-[#33323d]"
            }`}
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Please enter your name"
            className={`w-full text-[1.3rem] rounded-[0.5rem] border border-solid border-[#33323d] bg-white bg-opacity-10 placeholder:text-opacity-40 py-6 px-6 focus:border-blue-500 focus:outline-none focus:ring-[1px] focus:ring-blue-500 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
            {...register("name", {
              required: "Please I'd love to know your name",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />
          {errors?.name?.message && (
            <p className="text-red-500 text-[1.3rem]">
              {errors?.name?.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className={`text-[1.3rem] font-bold leading-[3rem] pb-3 ${
              isDarkMode ? "text-white" : "text-[#33323d]"
            }`}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Please enter your email"
            className={`w-full text-[1.3rem] rounded-[0.5rem] border border-solid border-[#33323d] bg-white bg-opacity-10 placeholder:text-opacity-40 py-6 px-6 focus:border-blue-500 focus:outline-none focus:ring-[1px] focus:ring-blue-500 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
            {...register("email", {
              required: "Please leave an email I can reply to",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email must be a valid email",
              },
            })}
          />
          {errors?.email?.message && (
            <p className="text-red-500 text-[1.3rem]">
              {errors?.email?.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="subject"
            className={`text-[1.3rem] font-bold leading-[3rem] pb-3 ${
              isDarkMode ? "text-white" : "text-[#33323d]"
            }`}
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Please enter your subject"
            className={`w-full text-[1.3rem] rounded-[0.5rem] border border-solid border-[#33323d] bg-white bg-opacity-10 placeholder:text-opacity-40 py-6 px-6 focus:border-blue-500 focus:outline-none focus:ring-[1px] focus:ring-blue-500 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
            {...register("subject", {
              required: "Your message needs a subject",
              minLength: {
                value: 3,
                message: "Subject must be at least 3 characters",
              },
            })}
          />
          {errors?.subject?.message && (
            <p className="text-red-500 text-[1.3rem]">
              {errors?.subject?.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className={`text-[1.3rem] font-bold leading-[3rem] pb-3 ${
              isDarkMode ? "text-white" : "text-[#33323d]"
            }`}
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="How can I help?"
            rows={6}
            className={`w-full text-[1.3rem] rounded-[0.5rem] border border-solid border-[#33323d] bg-white bg-opacity-10 placeholder:text-opacity-40 py-6 px-6 focus:border-blue-500 focus:outline-none focus:ring-[1px] focus:ring-blue-500 resize-none ${
              isDarkMode ? "text-white" : "text-black"
            }`}
            {...register("message", {
              required: "Please leave a message",
              minLength: {
                value: 3,
                message: "Message must be at least 3 characters",
              },
            })}
          />
          {errors?.message?.message && (
            <p className="text-red-500 text-[1.3rem]">
              {errors?.message?.message}
            </p>
          )}
        </div>

        <button className="bg-[#33323d] text-white py-6  px-9 text-[1.3rem] tracking-[0.2rem] uppercase rounded-[0.5rem]">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
