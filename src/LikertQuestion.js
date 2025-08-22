import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const LikertQuestion = ({ question, options = [
    { value: 1, label: "全く当てはまらない" },
    { value: 2, label: "あまり当てはまらない" },
    { value: 3, label: "どちらとも言えない" },
    { value: 4, label: "やや当てはまる" },
    { value: 5, label: "とても当てはまる" },
], backgroundColor = "bg-white", buttonType = "solid", onChange, }) => {
    return (_jsxs("div", { className: `p-4 rounded-xl shadow-md ${backgroundColor}`, children: [_jsx("p", { className: "mb-4 font-semibold", children: question }), _jsx("div", { className: "flex justify-between gap-2", children: options.map((opt) => (_jsx("button", { className: `px-3 py-2 rounded-md text-sm transition
              ${buttonType === "solid"
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "border border-blue-500 text-blue-500 hover:bg-blue-100"}`, onClick: () => onChange(opt.value), children: opt.label }, opt.value))) })] }));
};
