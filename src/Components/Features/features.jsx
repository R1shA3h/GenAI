import AnchorLink from "react-anchor-link-smooth-scroll";
import './features.css'
import Feature from "../../assests/feature1.png"


const features = () => {
  return (
    <div id="features" className="h-auto">
    <div>
            <h1 className="justify-center text-center font-extrabold text-5xl mx-[30%]">Explore the power of AI apps generation</h1>
            <br/>
            <p className="justify-center text-center mx-[30%] text-2xl">Unlock the full potential of your tech stack with Horizons intuitive and Unlock the full potential of your tech stack with GenAI's intuitive</p>
        </div>
        <div className="features-container">

        <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            

            <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl"><span className="text-orange-600">Unleash</span> the power of AI with GenAI</h2>

                <p className="mt-4 text-gray-600">
                Stay ahead of the curve with our Dynamic Trent Analysis feature. Unlock the full potential of your tech stack with Horizons intuitive and stay ahead of the curve with our dynamic trend analysis feature. Unlock the full potential of your tech stack with Horizon's intuitive
                </p>

                
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
                <img
                alt=""
                src={Feature}
                className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
            </div>
        </div>
    </section>
    <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                alt=""
                src={Feature}
                className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl"><span className="text-orange-600">Unleash</span> the power of AI with GenAI</h2>

                <p className="mt-4 text-gray-600">
                Stay ahead of the curve with our Dynamic Trent Analysis feature. Unlock the full potential of your tech stack with Horizons intuitive and stay ahead of the curve with our dynamic trend analysis feature. Unlock the full potential of your tech stack with Horizons intuitive
                </p>

                
            </div>
            </div>
        </div>
    </section>
    <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            

            <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl"><span className="text-orange-600">Unleash</span> the power of AI with GenAI</h2>

                <p className="mt-4 text-gray-600">
                Stay ahead of the curve with our Dynamic Trent Analysis feature. Unlock the full potential of your tech stack with Horizons intuitive and stay ahead of the curve with our dynamic trend analysis feature. Unlock the full potential of your tech stack with Horizon's intuitive
                </p>

                
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
                <img
                alt=""
                src={Feature}
                className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
            </div>
        </div>
    </section>

    </div>
    </div>
  )
}

export default features
