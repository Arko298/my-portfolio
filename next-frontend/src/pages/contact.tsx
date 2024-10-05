const inputClasses = 'w-full px-4 py-3 rounded-lg border border-accent focus:outline-none focus:ring focus:ring-primary transition duration-200 hover:border-accent/80'
const labelClasses = 'block text-sm font-medium text-muted'
export default function contact() {
  return (
    <>
      
      
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
