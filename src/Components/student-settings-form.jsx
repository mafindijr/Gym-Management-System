import { useState } from "react";

export default function StudentSettingsForm() {
  const [form, setForm] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Here you would handle updating payment/card details
    alert("Payment details updated!");
  };

  return (
    <div className="grid grid-cols-2">
      <div>    
          <form onSubmit={handleSubmit} className="max-w-xl items-center bg-[#223649] p-6 rounded-lg shadow flex flex-col gap-4">
            <h2 className="text-xl font-bold mb-2">Update Payment/Card Details</h2>
            <label className="flex flex-col gap-1 w-full">
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
            <label className="flex flex-col gap-1 w-full">
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
            <div className="grid grid-cols-2 gap-4 w-full items-center">
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
            <button type="submit" className="bg-btnprimary w-full text-white font-bold py-2 px-4 rounded mt-2">
                Update Details
            </button>
          </form>
        </div>
        
        <div className="max-w-xl items-center bg-[#223649] p-6 rounded-lg shadow flex flex-col gap-4">

        </div>
    </div>
  );
}
