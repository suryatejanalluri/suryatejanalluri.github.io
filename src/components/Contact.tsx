import React from 'react'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="mt-16">
      <h2 className="text-3xl font-bold">Get in touch</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl bg-slate-800/60">
          <p className="text-slate-300">I'm available for full-time roles and freelance work. Reach out and let's chat.</p>

          <div className="mt-6 text-sm text-slate-400">
            <div>Location: Los Angeles, CA</div>
            <div>Phone: (669) 204-5632</div>
                    <div>Email: <a href="mailto:surya.teja98.nllr@gmail.com" className="text-slate-200">surya.teja98.nllr@gmail.com</a></div>
                    <div className="mt-3 flex gap-4">
                      <a href="https://linkedin.com/in/suryateja-nalluri" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">LinkedIn</a>
                      <a href="https://github.com/suryatejanalluri" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">GitHub</a>
                    </div>
          </div>
        </div>

        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="p-6 rounded-xl bg-slate-800/60">
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden"><label>Don’t fill this out if you're human: <input name="bot-field" /></label></p>

          <label className="block">
            <span className="text-sm text-slate-300">Name</span>
            <input name="name" required className="mt-1 block w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2" />
          </label>

          <label className="block mt-4">
            <span className="text-sm text-slate-300">Email</span>
            <input name="email" type="email" required className="mt-1 block w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2" />
          </label>

          <label className="block mt-4">
            <span className="text-sm text-slate-300">Message</span>
            <textarea name="message" rows={5} required className="mt-1 block w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2" />
          </label>

          <button type="submit" className="mt-4 px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
