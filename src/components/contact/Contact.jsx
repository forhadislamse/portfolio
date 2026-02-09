/* eslint-disable react/no-unescaped-entities */
// import { useForm } from 'react-hook-form';
// import './contact.css';
// // import { BiNavigation } from "react-icons/bi";
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import toast, { Toaster } from 'react-hot-toast';


// const Contact = () => {

//     const { register, formState: { errors } } = useForm();
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_ctdme0d', 'template_241ekal', form.current, '7oWTyqxW98pml65vC')
//             .then((result) => {
//                 if (result) {
//                     // ')

//                 }
//             }, (error) => {
//                 alert(error.message);
//             });
//         e.target.reset()
//     };
//     const notify = () => toast.success('Your Message send Successfully!');
//     // const onSubmit = (data) => {
//     //     console.log(data);

//     // };

//     return (
//         <div>
//             <section className="section" id='contact'>
//                 <h2 className="section__title">Contact Me</h2>
//                 <span className="section__subtitle">Get in touch</span>
//             </section>
//             <section className="py-6 bg-gray-100 text-gray-500">
//                 <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
//                     <div className="py-6 md:py-0 md:px-6 " data-aos="fade-right"
//                         data-aos-easing="linear"
//                         data-aos-duration="2000" >
//                         <div className='mt-24'>
//                             <h1 className="text-4xl font-bold">Let's Talk</h1>
//                             <p className="pt-2 pb-4">Please fill in the form to start a conversation</p>
//                             <div className="space-y-4">
//                                 <p className="flex items-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
//                                         <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
//                                     </svg>
//                                     <span>Dhaka, Bangladesh.</span>
//                                 </p>
//                                 <p className="flex items-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
//                                         <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
//                                     </svg>
//                                     <span>+8801676797094</span>
//                                 </p>
//                                 <p className="flex items-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
//                                         <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
//                                         <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
//                                     </svg>
//                                     <span>i.rforhad@gmail.com</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <form ref={form} onSubmit={sendEmail} className="card-body" data-aos="fade-left"
//                         data-aos-easing="linear"
//                         data-aos-duration="2000">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Name</span>
//                             </label>
//                             <input
//                                 type="text" name="name" placeholder="name" className="input input-bordered"
//                                 {...register('name', { required: 'name is required' })}
//                             />
//                             {errors.name && <p className="text-red-600">{errors.name.message}</p>}
//                         </div>

//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input
//                                 type="email" name="email" placeholder="email" className="input input-bordered "
//                                 {...register('email', { required: 'Email is required' })}
//                             />
//                             {errors.email && <p className="text-red-600">{errors.email.message}</p>}
//                         </div>

//                         <div className="form-control">
//                             <label className="label"><span className="label-text">Message</span></label>
//                             <textarea type="text" name="message" className="input input-bordered" placeholder="send your message"  {...register('message')} />
//                         </div>
//                         <div className="form-control w-1/2 mt-6">

//                             <input onClick={notify} className="btn btn-neutral " type="submit" value="Send" />
//                             <Toaster />
//                             {/* <span className='-ms-8 text-2xl '><BiNavigation /></span> */}
//                         </div>
//                     </form>
//                 </div>

//             </section>
//         </div >
//     );
// };

// export default Contact;


// import { useForm } from 'react-hook-form';
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import toast, { Toaster } from 'react-hot-toast';

// const Contact = () => {
//     const form = useRef();
//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors },
//     } = useForm();

//     const sendEmail = () => {
//         emailjs
//             .sendForm('service_ctdme0d', 'template_241ekal', form.current, '5i_MFUthVvneWsiHo')
//             .then(() => {
//                 toast.success('Your message was sent successfully!');
//                 reset(); // Reset react-hook-form and input values
//             })
//             .catch((error) => {
//                 toast.error(error.message || 'Failed to send message');
//             });
//     };

//     return (
//         <section id="contact" className="px-4 max-w-6xl mx-auto">
//             <h2 className="text-4xl font-semibold mb-8">Contact Me</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {/* Left Section */}
//                 <div className="text-gray-500" data-aos="fade-right" data-aos-duration="2000">
//                     <h3 className="text-3xl font-semibold mb-4">Let's Talk</h3>
//                     <p className="mb-6">Please fill in the form to start a conversation.</p>

//                     <ul className="space-y-4">
//                         <li className="flex items-center gap-3">
//                             <span className="text-xl">📍</span> Dhaka, Bangladesh
//                         </li>
//                         <li className="flex items-center gap-3">
//                             <span className="text-xl">📞</span> +8801676797094
//                         </li>
//                         <li className="flex items-center gap-3">
//                             <span className="text-xl">📧</span> i.rforhad@gmail.com
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Right Form Section */}
//                 <form
//                     ref={form}
//                     onSubmit={handleSubmit(sendEmail)}
//                     data-aos="fade-left"
//                     data-aos-duration="2000"
//                     className="bg-gradient-to-r from-teal-500 via-cyan-700 to-teal-500 rounded-lg p-6 shadow-lg space-y-4"
//                 >
//                     {/* Name */}
//                     <div>
//                         <label className="block mb-1 font-medium">Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
//                             placeholder="Your Name"
//                             {...register('name', { required: 'Name is required' })}
//                         />
//                         {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
//                     </div>

//                     {/* Email */}
//                     <div>
//                         <label className="block mb-1 font-medium">Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
//                             placeholder="you@example.com"
//                             {...register('email', { required: 'Email is required' })}
//                         />
//                         {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
//                     </div>

//                     {/* Message */}
//                     <div>
//                         <label className="block mb-1 font-medium">Message</label>
//                         <textarea
//                             name="message"
//                             className="w-full border border-gray-300 rounded-md px-4 py-2 h-32 resize-none focus:outline-none focus:ring bg-white text-black placeholder-gray-600 focus:ring-blue-200"
//                             placeholder="Write your message..."
//                             {...register('message', { required: 'Message is required' })}
//                         />
//                         {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
//                     </div>

//                     {/* Submit */}
//                     <div className="text-left">
//                         <button
//                             type="submit"
//                             className="bg-yellow-400 text-slate-900 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
//                         >
//                             Send
//                         </button>
//                     </div>
//                 </form>
//             </div>

//             <Toaster />
//         </section>
//     );
// };

// export default Contact;
