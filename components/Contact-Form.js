export function Contact(contactForm) {
  // if (Array.isArray(contactForm) === false) {
  //   return ``;
  // }
  return `
  <div class=${contactForm.layout}>
    <div style="flex: 1;">
      <div id="contact" class="contact">
        <div class="contact-left">
          <h1>${contactForm.title}</h1>
          <p class="contact-description">${contactForm.description}</p>
        </div>
      <div class="form-wrapper w-form">
          <form
            name="email-form"
            data-name="Email Form"
            id="email-form"
            aria-label="Email Form"
            netlify
          >
            <input type="text" name="name" placeholder="name" required />
            <input
              type="email"
              name="email"
              placeholder="email address"
              required
            />
            <textarea
              id="message"
              placeholder="message"
              maxlength="5000"
              name="message"
              required
            ></textarea>
            <button type="submit">
            ${contactForm.button}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  `;
}

// export const CONTACT_FORM_DATA = {
//   title: "get in touch",
//   description: "let's work together!",
//   button: "send"
// };
