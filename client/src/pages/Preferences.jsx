import { useState } from "react";
import Section from "../components/Section";

function Preferences() {
  const [destinations, setDestinations] = useState([]);
  const [interests, setInterests] = useState([]);
  const [duration, setDuration] = useState("Select Days");
  const [group, setGroup] = useState("Select Size");

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Section
        title="Destination Type"
        subtitle="What kind of environment are you looking for? (Select all that apply)"
      >
        <div className="flex flex-wrap gap-3">
          {[
            "City",
            "Beach",
            "Mountain",
            "Adventure",
            "Cultural",
            "Relaxation",
          ].map((item) => {
            const selected = destinations.includes(item);
            return (
              <button
                key={item}
                onClick={() => {
                  if (selected) {
                    setDestinations(destinations.filter((d) => d !== item));
                  } else {
                    setDestinations([...destinations, item]);
                  }
                }}
                className={`px-4 py-2 border rounded-full text-sm
          ${selected ? "bg-blue-600 text-white" : "hover:bg-blue-50"}
        `}
              >
                {item}
              </button>
            );
          })}
        </div>
      </Section>

      <Section
        title="Travel Interests"
        subtitle="What activities or themes excite you most?"
      >
        <div className="grid grid-cols-2 gap-3 text-sm">
          {[
            "Nature & Outdoors",
            "Food & Culinary",
            "History & Museums",
            "Adventure Sports",
            "Shopping",
            "Nightlife",
          ].map((item) => (
            <label key={item} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={interests.includes(item)}
                onChange={() => {
                  if (interests.includes(item)) {
                    setInterests(interests.filter((i) => i !== item));
                  } else {
                    setInterests([...interests, item]);
                  }
                }}
              />
              {item}
            </label>
          ))}
        </div>
      </Section>

      <Section
        title="Trip Duration"
        subtitle="How long do you plan to be away?"
      >
        <select
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option>Select Days</option>
          <option>1 Days</option>
          <option>1–2 Days</option>
          <option>2–3 Days</option>
          <option>4–6 Days</option>
          <option>4–7 Days</option>
          <option>8–14 Days</option>
          <option>more than 14</option>
        </select>
      </Section>

      <Section title="Group Size" subtitle="Who are you traveling with?">
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option>Select Size</option>
          <option>Solo</option>
          <option>Couple</option>
          <option>Family</option>
          <option>Friends</option>
        </select>
      </Section>

      <div className="flex justify-end gap-4">
        <button className="text-gray-500">Skip for now</button>
        <button
          onClick={() => {
            const formData = { destinations, interests, duration, group };

            console.log("Saved Preferences:", formData);
            alert("Preferences saved! Check console.");
          }}
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
}

export default Preferences;
