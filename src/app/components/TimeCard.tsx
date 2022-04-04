import React from "react";

type Props = {
  title: string;
  datetime: string;
};

function TimeCard(props: Props) {
  const { title, datetime } = props;

  return (
    <div className="bg-gray-100 rounded-md py-12 px-8">
      <span className="text-gray-600 text-xs block">{title}</span>
      <span className="text-gray-800 text-lg">{datetime}</span>
    </div>
  );
}

export default TimeCard;
