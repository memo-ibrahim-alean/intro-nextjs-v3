const getData = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(0), 2000));
  return {data: [1, 2, 3]}
}

const Home = async () => {
  const { data } = await getData();
  console.log(data);
  return <div>Home</div>;
}

export default Home;
