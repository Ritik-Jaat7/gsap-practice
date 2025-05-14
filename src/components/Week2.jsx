import CommonAnimation from "./CommonAnimation"
import Features from "./Features"
import Hero from "./Hero"
import ParaEffect from "./ParaEffect"
import Product from "./Product"
import ScrollTask from "./ScrollTask"

const Week2 = () => {
    return (
        <>
            <Hero />
            <Features />
            <CommonAnimation heading="Common Animation" para="The Visumhandbuch is a comprehensive internal document used by the Federal Foreign Office and German embassies. Spanning approximately 1,000 pages, it provides detailed guidelines on visa issuance. Herbert's training on this resource offers:" src="/assets/images/hello-left.svg" />
            <Product />
            <CommonAnimation heading="Visa Handbook" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptate, facilis reiciendis suscipit quas vero consequatur praesentium perspiciatis molestias magni." src="/assets/images/hello-left.svg" />
            <ParaEffect />
            <ScrollTask />
            <CommonAnimation heading="Product Quality" para="Experience everyday comfort with our LuxeWear Cotton Tee, made from 100% ultra-soft, breathable cotton.Designed with a modern, slim fit that flatters all body types.Durable stitching and fade-resistant fabric ensure long-lasting wear.Perfect for casual days, workouts, or layering under your favorite jacket." src="/assets/images/hello-left.svg" />
        </>
    )
}

export default Week2