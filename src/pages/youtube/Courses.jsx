import Container from "../../components/Shared/Container";
import Nav from "../../components/Shared/Nav";

const Courses = () => {
  return (
    <>
      <Nav></Nav>
      <Container>
        <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
          <div class="mx-auto max-w-screen-xl px-4 w-full">
            <div class="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
              <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                <iframe
                  width="360"
                  height="315"
                  src="https://www.youtube.com/embed/videoseries?si=RuMiiapX6wsOgo7v&amp;list=PLXcgL_xgEnBE7O49OZAbGIvaSvkjIlxEo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                <iframe
                  width="360"
                  height="315"
                  src="https://www.youtube.com/embed/videoseries?si=njdQ39PTvVpxZVj7&amp;list=PLXcgL_xgEnBGYsiAUtnAmvlInVVQEdxP4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                <iframe
                  width="360"
                  height="315"
                  src="https://www.youtube.com/embed/videoseries?si=mVRZBmO8qz6o9N1B&amp;list=PLXcgL_xgEnBGhUyMpnExe4uxyma39zU2m"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                <iframe
                  width="360"
                  height="315"
                  src="https://www.youtube.com/embed/videoseries?si=Ub382OL0w7szz8yQ&amp;list=PLXcgL_xgEnBGh1WRL2AccWBpGmBzJwSSx"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                <iframe
                  width="360"
                  height="315"
                  src="https://www.youtube.com/embed/videoseries?si=ZaKZKjDyPhGymqNq&amp;list=PLXcgL_xgEnBEzC7nuIuGyQ_Qzjucy0h9m"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/videoseries?si=rR3b97jQN3_dEuNs&amp;list=PLXcgL_xgEnBE8AVYjoHkR9jWbUYlKLH9g"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/videoseries?si=YH5ZQg6dVHsdPr5Z&amp;list=PLXcgL_xgEnBH65oETlj94wkTL3BoTiDOR"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                <iframe
                  width="360"
                  height="315"
                  src="https://www.youtube.com/embed/videoseries?si=inZ4bhYhgaUyYzDn&amp;list=PLXcgL_xgEnBFNR76r3TGYXVsAiQ0BE75C"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <br />
          <a
            href="https://www.youtube.com/@MahmudulHasanMoon"
            className="bg-gray-900 text-white font-semibold px-10 py-2 rounded-lg text-center mx-auto hover:bg-gray-800 hover:text-blue-400"
            target="blank"
          >
            See More On Youtube..
          </a>
        </div>
      </Container>
    </>
  );
};

export default Courses;
