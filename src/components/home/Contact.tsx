import { useForm } from "react-hook-form";

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

  return (
    <section className="grid grid-cols-[1.5fr_2fr] gap-20 px-32 py-80">
      <div className="pt-32">
        <h3 className="text-[#42446e] text-[5.2rem] font-bold leading-[4.8rem] pb-4">
          Let’s work together
        </h3>
        <p className="text-[#666] text-[2rem] leading-[2.6rem]">
          I’d love to hear about what you’re working on and how I could help.
        </p>
      </div>
      <form onSubmit={handleSubmit(onnSubmitData)} className="space-y-10">
        <div>
          <label
            htmlFor="name"
            className="text-[1.3rem] text-[#33323d] font-bold leading-[3rem] pb-3"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Please enter your name"
            className="w-full text-[1.3rem] rounded-[0.5rem] border border-solid border-[#33323d] bg-white bg-opacity-10 placeholder:text-opacity-40 text-black py-6 px-6 focus:border-blue-500 focus:outline-none focus:ring-[1px] focus:ring-blue-500"
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
            className="text-[1.3rem] text-[#33323d] font-bold leading-[3rem] pb-3"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Please enter your email"
            className="w-full text-[1.3rem] rounded-[0.5rem] border border-solid border-[#33323d] bg-white bg-opacity-10 placeholder:text-opacity-40 text-black py-6 px-6 focus:border-blue-500 focus:outline-none focus:ring-[1px] focus:ring-blue-500"
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
            className="text-[1.3rem] text-[#33323d] font-bold leading-[3rem] pb-3"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Please enter your subject"
            className="w-full text-[1.3rem] rounded-[0.5rem] border border-solid border-[#33323d] bg-white bg-opacity-10 placeholder:text-opacity-40 text-black py-6 px-6 focus:border-blue-500 focus:outline-none focus:ring-[1px] focus:ring-blue-500"
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
            className="text-[1.3rem] text-[#33323d] font-bold leading-[3rem] pb-3"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="How can I help?"
            rows={6}
            className="w-full text-[1.3rem] rounded-[0.5rem] border border-solid border-[#33323d] bg-white bg-opacity-10 placeholder:text-opacity-40 text-black py-6 px-6 focus:border-blue-500 focus:outline-none focus:ring-[1px] focus:ring-blue-500 resize-none"
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
