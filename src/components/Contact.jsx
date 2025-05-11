import React from 'react'

 const Contact = () => {
      const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "539bf646-cd27-48eb-8765-2b7ad95aeef0");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert("Message send successgully")
          event.target.reset(); 
        }
      };
  return (
     <section className="contact mt-5" id="contact">
            <h2 className="text-3xl text-center">Contact <span className="text-blue-400">Me</span></h2>
            
              <form onSubmit={onSubmit} className="max-w-lg mx-auto p-5 mt-9">
                <div className="mb-4">
                  <label className="block text-gray-300" htmlFor="name">Name</label>
                  <input type="text" id="name" name='name' className="w-full p-2 bg-gray-700 rounded"placeholder='Enter your name' required/>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-300" htmlFor="email">Email</label>
                  <input type="email" id="email"name='email' className="w-full p-2 bg-gray-700 rounded" placeholder='Enter Your Email'required/>
                </div>
    
                <div className="mb-4">
                  <label className="block text-gray-300" htmlFor="email">Phone Number</label>
                  <input type="text" id="phone"name='phone' className="w-full p-2 bg-gray-700 rounded"placeholder='Phone no'required />
                </div>
    
                
                <div className="mb-4">
                  <label className="block text-gray-300" htmlFor="message">Message</label>
                  <textarea id="message"name='message' className="w-full p-2 bg-gray-700 rounded"placeholder='Message'required></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 w-full px-4 rounded-3xl">Send Message</button>
              </form>
    
           
          </section>
  )
}
export default Contact;