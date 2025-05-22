import React from "react";

const works = [
  { title: 'Гамлет', year: 1601 },
  { title: 'Ромео и Джульетта', year: 1597 },
  { title: 'Макбет', year: 1606 },
  { title: 'Сон в летнюю ночь', year: 1595 },
  { title: 'Отелло', year: 1603 },
];

const WorkList = () => {
  return (
    <div>
        <h2>Известные произведения</h2>
      <ul>
        {works.map((work, index) => (
          <li key={index}>
            {work.title} ({work.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkList;


