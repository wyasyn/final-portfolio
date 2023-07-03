import React from 'react'

function Contact() {
  return (
    <section className='contact'>
         <form action="https://formsubmit.co/6a1e2edb56ea14755490a5969a7a4f51" method="POST" class="w-form">
                <div class="subheadline">contact form</div>
                <h3>
                    Get in touch <br /> with me
                </h3>
                <div class="row">
                    <div class="col-1">
                        <label for="name" class="form-input-label">Name</label>
                        <input type="text" class="form-input w-input" maxlength="256" name="name" placeholder="Enter your name" required />
                    </div>
                    <div class="col-2">
                        <label for="contact-Email" class="form-input-label">E-mail</label>
                        <input type="text" class="form-input w-input" maxlength="256" name="contact-Email" placeholder="Enter your E-mail" required />
                    </div>
                </div>
                <div class="text-a">
                    <label for="message" class="form-input-label">Tell me about your project:)</label>
                    <textarea required maxlength="5000" name="message" id="message" class="form-input message w-input" placeholder="Enter your message"></textarea>
                </div>
                <div className="buttons">
                <input type="submit" value="submit" class="button w-button" />
                </div>
            </form>
    </section>
  )
}

export default Contact