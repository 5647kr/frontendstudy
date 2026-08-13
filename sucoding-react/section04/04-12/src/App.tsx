export default function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <a
        href="https://ko.wikipedia.org"
        onClick={(event) => {
          event.preventDefault();
        }}>
        위키
      </a>

      <form onSubmit={(event) => event.preventDefault()}>
        <button type="submit">전송</button>
      </form>

      <form onSubmit={handleSubmit}>
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
