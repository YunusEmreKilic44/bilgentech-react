import { useMemo } from "react";

const MyList = ({ items }) => {
  const sortedItems = useMemo(() => {
    console.log("List çalıştı");

    return items.sort((a, b) => b - a);
  }, [items]);

  return (
    <div>
      <h2>MyList</h2>
      <ul>
        {sortedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyList;
