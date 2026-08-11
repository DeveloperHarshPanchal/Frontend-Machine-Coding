import Accordion from "./Accordion";

function App() {
  const items = [
    {
      title: "What is React?",
      content:
        "React is a JavaScript library used for building user interfaces.",
    },
    {
      title: "What is useState?",
      content:
        "useState is a React Hook that allows functional components to manage state.",
    },
    {
      title: "What is useEffect?",
      content:
        "useEffect is a React Hook used for handling side effects in components.",
    },
    {
      title: "What is JSX?",
      content: "JSX allows us to write HTML-like syntax inside JavaScript.",
    },
  ];

  return (
    <div>
      <h1 className="accordion-heading">Accordion</h1>
      <Accordion items={items} />
    </div>
  );
}

export default App;
