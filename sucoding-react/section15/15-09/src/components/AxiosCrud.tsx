import axios from "axios";

export default function AxiosCrud() {
  const axiosGet = async () => {
    const { data, status } = await axios.get("http://localhost:3000/posts");

    console.log(data, status);
  };

  const axiosPost = async () => {
    const { data } = await axios.post("http://localhost:3000/posts", {
      title: "a axios data",
      views: 50,
    });

    console.log(data);
  };

  const axiosPut = async () => {
    const { data } = await axios.put("http://localhost:3000/posts/101", {
      title: "a axios modify data",
      views: 510,
    });

    console.log(data);
  };

  const axiosPatch = async () => {
    const { data } = await axios.patch("http://localhost:3000/posts/101", {
      views: 111,
    });

    console.log(data);
  };

  const axiosDelete = async () => {
    const { data, status } = await axios.delete(
      "http://localhost:3000/posts/101",
    );

    console.log(data, status);
  };

  return (
    <>
      <button onClick={axiosGet}>GET</button>
      <button onClick={axiosPost}>POST</button>
      <button onClick={axiosPut}>PUT</button>
      <button onClick={axiosPatch}>PATCH</button>
      <button onClick={axiosDelete}>DELETE</button>
    </>
  );
}
