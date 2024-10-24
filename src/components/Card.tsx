import { useEffect } from "react";

const Card = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const Response = await fetch(`/`, {
          method: "GET",
          headers: {
            "Content-Request": "Resources",
            "Content-Type": "application/json",
          },
        });

        if (!Response.ok) {
          throw new Error(`Error: ${Response.statusText}`);
        }

        const Result = await Response.json();
        console.log("Data fetched successfully");
        console.log(Result);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <p className="text-white text-2xl">Carta</p>
      <div>
        <span className="text-white text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In voluptate
          totam quasi ipsa dolor reiciendis illo veniam consequuntur. Voluptate
          eaque assumenda similique sunt dolor cum rem voluptatem animi ut
          culpa?
        </span>
      </div>
    </div>
  );
};

export default Card;
