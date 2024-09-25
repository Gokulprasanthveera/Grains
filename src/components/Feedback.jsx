import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Feedback = () => {
  const [userName, setUserName] = useState('');
  const [starRating, setStarRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  const sendFeedback = (e) => {
    e.preventDefault();

    // Validate the form inputs
    if (!userName || starRating === 0 || !feedback) {
      setMessage('Please fill all the fields 📩');
      return;
    }

    // Construct the data to send to EmailJS
    const templateParams = {
      user_name: userName,         // Matches user_name in EmailJS template
      star_rating: starRating.toString(),  // Ensure starRating is sent as a string
      feedback: feedback,          // Matches feedback in EmailJS template
    };

    // Send the feedback via EmailJS
    emailjs.send('service_9oppz23', 'template_s1yots8', templateParams, 'O1X4E8-H58R_zjSCc')
      .then(() => {
        setMessage('Feedback sent ✅');
        // Clear the form
        setUserName('');
        setStarRating(0);
        setFeedback('');

        // Remove message after 5 seconds
        setTimeout(() => {
          setMessage('');
        }, 5000);
      }, (error) => {
        console.error('Failed to send feedback:', error);
        setMessage('Failed to send feedback. Try again later.');
      });
  };

  return (
    <section className="contact section py-10">
      <h2 className="section__title text-3xl font-bold">Feedback Form</h2>
      <span className="section__subtitle text-lg">We value your feedback</span>

      <div className="contact__container container mx-auto mt-8">
        <form onSubmit={sendFeedback} className="space-y-4">
          <div className="form-control">
            <label className="label">Name</label>
            <input
              type="text"
              required
              placeholder="Write your name"
              className="input input-bordered w-full"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label className="label">Star Rating</label>
            <div className="rating rating-lg">
              {[1, 2, 3, 4, 5].map((star) => (
                <input
                  key={star}
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-yellow-500"
                  checked={starRating === star}
                  onChange={() => setStarRating(star)}
                />
              ))}
            </div>
          </div>

          <div className="form-control">
            <label className="label">Your Feedback</label>
            <textarea
              required
              placeholder="Write your feedback"
              className="textarea textarea-bordered w-full"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
          </div>

          {message && (
            <p className={`text-sm ${message.includes('sent') ? 'text-green-500' : 'text-red-500'}`}>
              {message}
            </p>
          )}

          <button type="submit" className="btn btn-primary">
            Send Feedback
          </button>
        </form>
      </div>
    </section>
  );
};

export default Feedback;
