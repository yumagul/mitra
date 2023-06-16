import { useAccordionButton } from "react-bootstrap/AccordionButton";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("dfgdsfsd")
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: "yellow", marginLeft: "85%" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default CustomToggle;
