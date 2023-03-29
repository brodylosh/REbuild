import PlaceholderImage from '../img/PlaceholderImage.svg'

import { Button, Card } from 'flowbite-react'


function Homepage() {
    return (
        <div className="px-8 md:px-0">
            <div className="flex flex-col md:flex-row md:p-40">
                <div className="mb-8 text-center md:w-7/12 md:text-left">
                    <div className="m-auto">
                        <h1 className="text-5xl font-bold mb-4">Manage your real estate construction projects</h1>
                        <h2 className="text-xl mb-4">The missing link between investors and contractors</h2>
                        <Button className="m-auto">Get Started</Button>
                    </div>
                </div>
                <div className="items-center md:flex md:w-5/12">
                    <img src={PlaceholderImage} alt="Placeholder Image"/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-center md:gap-x-4 md:px-40 md:py-20">
                <Card className="text-center my-8">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    More Transparency
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    Facilitate open communication with your construction partners.
                    </p>
                </Card>
                <Card className="text-center my-8">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Faster Timelines
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    Complete your rehab projects faster.
                    </p>
                </Card>
                <Card
                    // imgAlt="Meaningful alt text for an image that is not purely decorative"
                    // imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                    className="p-10 text-center my-8"
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    More Profit
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    Whether you're an investor, or a contractor add money to your bottomline!
                    </p>
                </Card>
            </div>
        </div>
    );
  }
  
  export default Homepage;