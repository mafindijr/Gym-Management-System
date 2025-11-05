import { useState } from "react";

export default function StudentPaymentForm({ onSubmit }) {
  const [form, setForm] = useState({
    amount: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (onSubmit) onSubmit(form);
      const res = await fetch('your-api-endpoint', { // Replace with your actual API endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) {
          throw new Error(data.message || "Failed to submit payment");
      }
      // No alert on success, handle redirection or UI update as needed
    } catch (err) {
      console.error(err);
      // Handle error state in UI
    }
    setForm({
      amount: "",
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: ""
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full bg-[#223649] p-6 rounded-lg shadow flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-2">Make a Payment</h2>
        <label className="flex flex-col gap-1">
            Amount
            <input
            className="p-2 rounded bg-[#172633] border border-[#334d66] text-white"
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="Amount"
            required
            />
        </label>
        <label className="flex flex-col gap-1">
            Cardholder Name
            <input
            className="p-2 rounded bg-[#172633] border border-[#334d66] text-white"
            type="text"
            name="cardName"
            value={form.cardName}
            onChange={handleChange}
            placeholder="Name on Card"
            required
            />
        </label>
        <label className="flex flex-col gap-1">
            Card Number
            <input
            className="p-2 rounded bg-[#172633] border border-[#334d66] text-white"
            type="text"
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            placeholder="Card Number"
            required
            />
        </label>
        <div className="flex gap-4">
            <label className="flex flex-col gap-1 flex-1">
            Expiry Date
            <input
                className="p-2 rounded bg-[#172633] border border-[#334d66] text-white"
                type="text"
                name="expiry"
                value={form.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                required
            />
            </label>
            <label className="flex flex-col gap-1 flex-1">
            CVV
            <input
                className="p-2 rounded bg-[#172633] border border-[#334d66] text-white"
                type="password"
                name="cvv"
                value={form.cvv}
                onChange={handleChange}
                placeholder="CVV"
                required
            />
            </label>
        </div>
        <button type="submit" className="bg-btnprimary text-white cursor-pointer font-bold py-2 px-4 rounded mt-2">
            Pay Now
        </button>
    </form>
  </>
  );
}
