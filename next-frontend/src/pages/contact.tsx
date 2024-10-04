const inputClasses = 'w-full px-4 py-3 rounded-lg border border-accent focus:outline-none focus:ring focus:ring-primary transition duration-200 hover:border-accent/80'
const labelClasses = 'block text-sm font-medium text-muted'
export default function contact() {
  return (
    <>
      {/* <div className="pt-2">
        <div>
          <h2 className="text-center text-white font-header text-2xl font-semibold uppercase text-primary sm:text-xl lg:text-4xl">
            A contact form
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Join the club
          </h4>
          <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
            <p className="font-body text-grey-10">
              We&apos;d love to hear from you. Please fill out the form below to
              get in touch.
            </p>
          </div>
          <form className="mx-auto w-full pt-10 sm:w-3/4">
            <div className="flex flex-col md:flex-row">
              <input
                className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
                placeholder="Name"
                type="text"
                id="name"
              />
              <input
                className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
                placeholder="Email"
                type="text"
                id="email"
              />
            </div>
            <textarea
              className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
              placeholder="Message"
              id="message"
              cols={30}
              rows={10}
            ></textarea>
            <button className="mt-6 flex items-center justify-center rounded bg-primary bg-orange-500 px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-black-20">
              Send
              <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
            </button>
          </form>
          <div className="flex flex-col pt-4 lg:flex-row">
            <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
              <div className="flex items-center">
                <i className="bx bx-phone text-2xl text-grey-40"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  My Phone
                </p>
              </div>
              <p className="pt-2 text-left text-white font-body font-bold text-primary lg:text-lg">
                +91 8420248610
              </p>
            </div>
            <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
              <div className="flex items-center">
                <i className="bx bx-envelope text-2xl text-grey-40"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  My Email
                </p>
              </div>
              <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                name@mydomain.com
              </p>
            </div>
            <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
              <div className="flex items-center">
                <i className="bx bx-map text-2xl text-grey-40"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  My Address
                </p>
              </div>
              <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                Drainage Canal Road Howrah-711101
              </p>
            </div>
          </div>
        </div>
      </div> */}
      
    <div className="bg-background text-primary-foreground min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-extrabold mb-4 text-accent">Get in Touch</h1>
      <p className="text-lg mb-8 text-muted-foreground">Feel free to reach out for any inquiries or collaborations!</p>
      <div className="bg-card w-full max-w-lg p-8 rounded-lg shadow-lg border border-accent">
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label htmlFor="name" className={labelClasses}>
              Your Name
            </label>
            <input type="text" id="name" name="name" placeholder="John Doe" className={inputClasses} required />
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>
              Your Email
            </label>
            <input type="email" id="email" name="email" placeholder="john.doe@example.com" className={inputClasses} required />
          </div>
          <div>
            <label htmlFor="message" className={labelClasses}>
              Message
            </label>
            <textarea id="message" name="message" rows={4} placeholder="Your message here..." className={inputClasses} required></textarea>
          </div>
          <button type="submit" className="bg-primary text-primary-foreground py-3 px-6 rounded-lg shadow-lg hover:bg-primary/80 transition-colors duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  
    </>
  );
}
