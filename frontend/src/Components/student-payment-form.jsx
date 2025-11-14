import { useState } from "react";

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function StudentPaymentForm({ onSuccess }) {
  const [form, setForm] = useState({
    amount: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if(submitting) return;

    setSubmitting(true);
    setError("");

    try {
      const token = localStorage.getItem('auth_token');
      if(!token) {
        throw new Error("You must be logged in to make a payment");
      }

      const payload = {
        amount: Number(form.amount),
        paymentMethod: "Card",
        description: `Card payment from ${form.cardName || 'member'}`
      };

      const res = await fetch(`${API_BASE}/student/payments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if(!res.ok) {
        throw new Error(data?.message || "Failed to submit payment");
      }

      if(onSuccess) {
        onSuccess(data.payment);
      }

      setForm({
        amount: "",
        cardName: "",
        cardNumber: "",
        expiry: "",
        cvv: ""
      });
    } catch (err) {
      setError(err.message || "Failed to process payment");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full bg-[#223649] p-6 rounded-lg shadow flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-2">Make a Payment</h2>
        {error && (
          <div className="bg-red-500/20 border border-red-400 text-red-200 px-3 py-2 rounded">
            {error}
          </div>
        )}
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
            min="1"
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
        <button
          type="submit"
          disabled={submitting}
          className="bg-btnprimary text-white cursor-pointer font-bold py-2 px-4 rounded mt-2 disabled:opacity-60"
        >
          {submitting ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </>
  );
}
