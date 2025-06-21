
import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';

const panelGroups = [
  { title: "Panel 1: 3Min & 5Min", timeframes: { "3Min": "1", "5Min": "5" } },
  { title: "Panel 2: 15Min & 30Min", timeframes: { "15Min": "15", "30Min": "30" } },
  { title: "Panel 3: 1HR & 2HR", timeframes: { "1HR": "60", "2HR": "120" } },
  { title: "Panel 4: 4HR & Daily", timeframes: { "4HR": "240", "Daily": "D" } },
  { title: "Panel 5: Weekly & Monthly", timeframes: { "Weekly": "W", "Monthly": "M" } },
  { title: "Panel 6: Structure break targets", timeframes: {} },
  { title: "Panel 7: My system alerts", timeframes: {} },
  { title: "Panel 8: My system alerts", timeframes: {} },
  { title: "Panel 9: My system alerts", timeframes: {} },
  { title: "Panel 10: My system alerts", timeframes: {} },
  { title: "Panel 11: My system alerts", timeframes: {} },
  { title: "Panel 12: My system alerts", timeframes: {} },
  { title: "Panel 13: My system alerts", timeframes: {} },
  { title: "Panel 14: My system alerts", timeframes: {} },
  { title: "Panel 15: My system alerts", timeframes: {} },
  { title: "Panel 16: My system alerts", timeframes: {} },
  { title: "Panel 17: My system alerts", timeframes: {} },
  { title: "Panel 18: My system alerts", timeframes: {} },
  { title: "Panel 19: My system alerts", timeframes: {} },
  { title: "Panel 20: My system alerts", timeframes: {} },
  { title: "Panel 21: My system alerts", timeframes: {} },
  { title: "Panel 22: My system alerts", timeframes: {} },
  { title: "Panel 23: My system alerts", timeframes: {} },
  { title: "Panel 24: My system alerts", timeframes: {} },
  { title: "Panel 25: My system alerts", timeframes: {} },
  { title: "Panel 26: My system alerts", timeframes: {} },
  { title: "Panel 27: My system alerts", timeframes: {} },
  { title: "Panel 28: My system alerts", timeframes: {} },
  { title: "Panel 29: My system alerts", timeframes: {} },
  { title: "Panel 30: My system alerts", timeframes: {} },
  { title: "Panel 31: My system alerts", timeframes: {} },
  { title: "Panel 32: My system alerts", timeframes: {} },
  { title: "Panel 33: My system alerts", timeframes: {} },
  { title: "Panel 34: My system alerts", timeframes: {} },
  { title: "Panel 35: My system alerts", timeframes: {} },
  { title: "Panel 36: My system alerts", timeframes: {} },
  { title: "Panel 37: My system alerts", timeframes: {} },
  { title: "Panel 38: My system alerts", timeframes: {} },
  { title: "Panel 39: My system alerts", timeframes: {} },
  { title: "Panel 40: My system alerts", timeframes: {} },
  { title: "Panel 41: My system alerts", timeframes: {} },
  { title: "Panel 42: My system alerts", timeframes: {} },
  { title: "Panel 43: My system alerts", timeframes: {} },
  { title: "Panel 44: My system alerts", timeframes: {} },
  { title: "Panel 45: My system alerts", timeframes: {} },
  { title: "Panel 46: My system alerts", timeframes: {} },
  { title: "Panel 47: My system alerts", timeframes: {} },
  { title: "Panel 48: My system alerts", timeframes: {} },
  { title: "Panel 49: My system alerts", timeframes: {} },
  { title: "Panel 50: My system alerts", timeframes: {} },
  { title: "Panel 51: My system alerts", timeframes: {} },
  { title: "Panel 52: My system alerts", timeframes: {} },
  { title: "Panel 53: My system alerts", timeframes: {} },
  { title: "Panel 54: My system alerts", timeframes: {} },
  { title: "Panel 55: My system alerts", timeframes: {} },
  { title: "Panel 56: My system alerts", timeframes: {} },
  { title: "Panel 57: My system alerts", timeframes: {} },
  { title: "Panel 58: My system alerts", timeframes: {} },
  { title: "Panel 59: My system alerts", timeframes: {} },
  { title: "Panel 60: My system alerts", timeframes: {} },
  { title: "Panel 61: My system alerts", timeframes: {} },
  { title: "Panel 62: My system alerts", timeframes: {} },
  { title: "Panel 63: My system alerts", timeframes: {} },
  { title: "Panel 64: My system alerts", timeframes: {} },
  { title: "Panel 65: My system alerts", timeframes: {} },
  { title: "Panel 66: My system alerts", timeframes: {} },
  { title: "Panel 67: My system alerts", timeframes: {} },
  { title: "Panel 68: My system alerts", timeframes: {} },
  { title: "Panel 69: My system alerts", timeframes: {} },
  { title: "Panel 70: My system alerts", timeframes: {} },
  { title: "Panel 71: My system alerts", timeframes: {} },
  { title: "Panel 72: My system alerts", timeframes: {} },
  { title: "Panel 73: My system alerts", timeframes: {} },
  { title: "Panel 74: My system alerts", timeframes: {} },
  { title: "Panel 75: My system alerts", timeframes: {} },
  { title: "Panel 76: My system alerts", timeframes: {} },
  { title: "Panel 77: My system alerts", timeframes: {} },
  { title: "Panel 78: My system alerts", timeframes: {} },
  { title: "Panel 79: My system alerts", timeframes: {} },
  { title: "Panel 80: My system alerts", timeframes: {} },
  { title: "Panel 81: My system alerts", timeframes: {} },
  { title: "Panel 82: My system alerts", timeframes: {} },
  { title: "Panel 83: My system alerts", timeframes: {} },
  { title: "Panel 84: My system alerts", timeframes: {} },
  { title: "Panel 85: My system alerts", timeframes: {} },
  { title: "Panel 86: My system alerts", timeframes: {} },
  { title: "Panel 87: My system alerts", timeframes: {} },
  { title: "Panel 88: My system alerts", timeframes: {} },
  { title: "Panel 89: My system alerts", timeframes: {} },
  { title: "Panel 90: My system alerts", timeframes: {} },
  { title: "Panel 91: My system alerts", timeframes: {} },
  { title: "Panel 92: My system alerts", timeframes: {} },
  { title: "Panel 93: My system alerts", timeframes: {} },
  { title: "Panel 94: My system alerts", timeframes: {} },
  { title: "Panel 95: My system alerts", timeframes: {} },
  { title: "Panel 96: My system alerts", timeframes: {} },
  { title: "Panel 97: My system alerts", timeframes: {} },
  { title: "Panel 98: My system alerts", timeframes: {} },
  { title: "Panel 99: My system alerts", timeframes: {} },
  { title: "Panel 100: My system alerts", timeframes: {} },
];


const StructureBreakPanel = () => {
  const [timeframe, setTimeframe] = useState("3Min");
  const [high, setHigh] = useState("");
  const [low, setLow] = useState("");
  const [upsideTarget, setUpsideTarget] = useState(null);
  const [downsideTarget, setDownsideTarget] = useState(null);
  const [alertSet, setAlertSet] = useState(false);

  const calculateTargets = () => {
    const H = parseFloat(high);
    const L = parseFloat(low);
    if (!isNaN(H) && !isNaN(L)) {
      const R = H - L;
      setUpsideTarget((H + R).toFixed(2));
      setDownsideTarget((L - R).toFixed(2));
    }
  };

  const toggleAlert = () => setAlertSet(!alertSet);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
      <h3>Structure Break Target Calculator</h3>
      <label>
        Timeframe:{" "}
        <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)}>
          {["3Min", "5Min", "15Min", "30Min", "1HR", "2HR", "4HR", "Daily", "Weekly", "Monthly"].map((tf) => (
            <option key={tf} value={tf}>{tf}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        High: <input type="number" value={high} onChange={(e) => setHigh(e.target.value)} />
      </label>
      <label style={{ marginLeft: "10px" }}>
        Low: <input type="number" value={low} onChange={(e) => setLow(e.target.value)} />
      </label>
      <button style={{ marginLeft: "10px" }} onClick={calculateTargets}>Calculate Targets</button>
      <div style={{ marginTop: "10px" }}>
        <strong>Upside Target:</strong> {upsideTarget || "-"} <br />
        <strong>Downside Target:</strong> {downsideTarget || "-"}
      </div>
      <button onClick={toggleAlert} style={{ marginTop: "10px" }}>
        {alertSet ? "Cancel Alert" : "Set Alert"}
      </button>
      <div style={{ marginTop: "5px", fontStyle: "italic" }}>
        {alertSet ? "🔔 Alert Set!" : "No Alert Active"}
      </div>
    </div>
  );
};


export default function Home() {
  // === Panel 6 State Hooks ===
  const [timeframe, setTimeframe] = useState("2HR");
  const [high, setHigh] = useState(0);
  const [low, setLow] = useState(0);
  const [upsideTarget, setUpsideTarget] = useState(null);
  const [downsideTarget, setDownsideTarget] = useState(null);
  const [alertSet, setAlertSet] = useState(false);

  const calculateTargets = () => {
    const range = high - low;
    setUpsideTarget(high + range);
    setDownsideTarget(low - range);
  };
  const [qqqPrice, setQqqPrice] = useState("Loading...");
  const [alerts, setAlerts] = useState({});
  const [openPanels, setOpenPanels] = useState(Array(panelGroups.length).fill(true));
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchPrice = () => {
      fetch("/api/tradingview")
        .then(res => res.json())
        .then(data => {
          if (data && data.price) {
            setQqqPrice(data.price);
          } else {
            setQqqPrice("Unavailable");
          }
        })
        .catch(() => setQqqPrice("Unavailable"));
    };
    fetchPrice();
    const interval = setInterval(fetchPrice, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    for (const label in alerts) {
      const target = parseFloat(alerts[label]);
      const current = parseFloat(qqqPrice);
      if (!isNaN(target) && !isNaN(current)) {
        if (Math.abs(current - target) < 0.01) {
          audioRef.current?.play();
        }
      }
    }
  }, [qqqPrice, alerts]);

  const handleAlertChange = (label, value) => {
    setAlerts(prev => ({ ...prev, [label]: value }));
  };

  const togglePanel = (index) => {
    setOpenPanels(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div style={{ margin: 0, padding: 20 }}>
      <Head>
        <title>QQQ System with Panels & Alerts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <audio ref={audioRef}>
        <source src="/alert.mp3" type="audio/mpeg" />
      </audio>
      {panelGroups.map((panel, i) => (
        <div key={i} style={{ marginBottom: 20, border: "2px solid #999", borderRadius: 10 }}>
          <div
            onClick={() => togglePanel(i)}
            style={{
              background: "#f0f0f0",
              padding: "10px 15px",
              fontWeight: "bold",
              cursor: "pointer",
              userSelect: "none",
              borderBottom: "1px solid #ccc",
            }}
          >
            {panel.title} {openPanels[i] ? "▼" : "▶"}
          </div>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            padding: 10,
            visibility: openPanels[i] ? "visible" : "hidden",
            height: openPanels[i] ? "auto" : 0,
            overflow: "hidden",
          }}>
            {Object.entries(panel.timeframes).map(([label, interval]) => (
              <div key={label} style={{
                width: "48%",
                height: "650px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                paddingBottom: "10px"
              }}>
                <iframe
                  src={`https://tradingview-widget.vercel.app/?interval=${interval}`}
                  width="100%"
                  height="80%"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <div style={{ textAlign: "center", fontWeight: "bold", paddingTop: "5px" }}>{label}</div>
                <div style={{ textAlign: "center", marginTop: 5 }}>
                  <input
                    type="number"
                    placeholder="Set Price Alert"
                    value={alerts[label] || ""}
                    onChange={(e) => handleAlertChange(label, e.target.value)}
                    style={{ padding: "6px", fontSize: "14px", width: "60%" }}
                  />
                </div>
                <div style={{ textAlign: "center", marginTop: "4px", color: "#1a73e8", fontWeight: "bold" }}>
                  QQQ: $526.71
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}