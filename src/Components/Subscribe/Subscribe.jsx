import React from 'react'

const Subscribe = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        // setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "5b2eef8a-e4b6-485d-8e89-ac710115ddf0");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert(data.message)
        //   setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };


  return (

        <section className="bg-white pb-24">
        <div id='subscribe' className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className=" mx-auto w-[90%] text-center">
            <h2 className=" w-auto font-bold text-gray-900 md:text-3xl">
                <span className='text-6xl'>Detect your next </span><span className= 'text-6xl text-orange-600'>big move</span>
            </h2>

            <p className=" mx-[25%] text-gray-500 pt-6 ">
                Experience the synergy of your favorite tools working seamlessly together, all powered by Horizon's cutting-edge AI analytics.
            </p>
            </div>

            <div className="mx-auto mt-8 max-w-xl">
            <form action="#" className="sm:flex sm:gap-4">
                <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">Email</label>

                <input
                    type="email"
                    placeholder="yourmail@gmail.com"
                    className="w-full rounded-md border-gray-200 bg-gray-300 p-3 text-gray-900 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                />
                </div>

                <button
                type="submit" onClick={onSubmit}
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-orange-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                >
                <span className="text-sm font-medium">Subscribe Now</span>

                </button>
            </form>
            <span>{result}</span>
            </div>
        </div>
        </section>
  )
}
export default Subscribe