import { Carousel } from "flowbite-react";

const Banner = () => {
  return (
    <div className="h-56 mt-20 sm:h-64 xl:h-80 2xl:h-96 lg:px-28 xl:px-28">
      <Carousel>
        <img src="https://i.ibb.co/KmD28CJ/1.png" alt="..." />
        <img src="https://i.ibb.co/9cg0809/Healing-Hands.png" alt="..." />
        <img
          src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxyZXNlYXJjaGVyfGVufDB8fDB8fHww"
          alt="..."
        />
        <img src="https://i.ibb.co/9cg0809/Healing-Hands.png" alt="..." />
        <img
          src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default Banner;
