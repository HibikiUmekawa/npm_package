// src/LikertQuestion.tsx
import React from "react";

type LikertOption = {
  value: number;
  label: string;
};

type LikertQuestionProps = {
  question: string;
  options?: LikertOption[];
  backgroundColor?: string;
  buttonType?: "solid" | "outline";
  onChange: (value: number) => void;
};

export const LikertQuestion: React.FC<LikertQuestionProps> = ({
  question,
  options = [
    { value: 1, label: "全く当てはまらない" },
    { value: 2, label: "あまり当てはまらない" },
    { value: 3, label: "どちらとも言えない" },
    { value: 4, label: "やや当てはまる" },
    { value: 5, label: "とても当てはまる" },
  ],
  backgroundColor = "bg-white",
  buttonType = "solid",
  onChange,
}) => {
  return (
    <div className={`p-4 rounded-xl shadow-md ${backgroundColor}`}>
      <p className="mb-4 font-semibold">{question}</p>
      <div className="flex justify-between gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            className={`px-3 py-2 rounded-md text-sm transition
              ${
                buttonType === "solid"
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "border border-blue-500 text-blue-500 hover:bg-blue-100"
              }`}
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};
