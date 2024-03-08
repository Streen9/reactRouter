import { useQuery } from "@tanstack/react-query";

export default function HomePage() {
  const { data } = useQuery({
    queryKey: ["todo"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  });

  console.log(data);

  return <div>Home Page</div>;
}
