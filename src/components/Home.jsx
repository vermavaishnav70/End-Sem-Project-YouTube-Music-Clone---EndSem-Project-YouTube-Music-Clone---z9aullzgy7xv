import Navbar from "./Navbar";
import MyCarousel from "./Carousel";

function Home({ isLogin, setIsLogin }) {
    const carousels = [
        { title: "Trending Songs", api: 'https://academics.newtonschool.co/api/v1/musicx/song?featured=Trending%20songs' },
        { title: "Top 20 of this week", api: "https://academics.newtonschool.co/api/v1/musicx/song?featured=Top 20 of this week" },
        { title: "Top 50 of this month", api: "https://academics.newtonschool.co/api/v1/musicx/song?featured=Top 50 of this month" },
        { title: "Evergreen melodies", api: 'https://academics.newtonschool.co/api/v1/musicx/song?featured=Evergreen melodies' },
        { title: "Happy", api: "https://academics.newtonschool.co/api/v1/musicx/song?mood=happy" },
        { title: "Romantic", api: "https://academics.newtonschool.co/api/v1/musicx/song?mood=romantic" },
        { title: "Excited", api: "https://academics.newtonschool.co/api/v1/musicx/song?mood=excited" },
        { title: "Sad", api: "https://academics.newtonschool.co/api/v1/musicx/song?mood=sad" }
    ];

    return (
        <>
            <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
            {carousels.map((carousel, index) => (
                <MyCarousel key={index} title={carousel.title} api={carousel.api} />
            ))}
        </>
    );
}

export default Home;
