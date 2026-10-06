"use client";

import { useState } from "react";

function formatCurrency(n: number, currency: string = "INR"): string {
  const code = currency === "INR" ? "en-IN" : "en-US";
  const sym = currency === "INR" ? "₹" : currency === "USD" ? "$" : currency === "EUR" ? "€" : "";
  return `${sym}${n.toLocaleString(code, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function QuotationMakerTool() {
  const [primaryColor, setPrimaryColor] = useState("#4f46e5");
  const [headerColor, setHeaderColor] = useState("#4f46e5");
  const [logo, setLogo] = useState<string | null>(null);

  const [company, setCompany] = useState({
    name: "",
    address: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    gstin: "",
  });

  const [client, setClient] = useState({
    name: "",
    address: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
  });

  const [meta, setMeta] = useState({
    quoteNo: "",
    date: new Date().toISOString().split("T")[0],
    validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    currency: "INR",
  });

  const [items, setItems] = useState([
    { id: 1, desc: "", qty: 1, unit: 1, rate: 0 },
  ]);

  const [terms, setTerms] = useState("");
  const [notes, setNotes] = useState("");

  const subtotal = items.reduce((acc, item) => acc + (item.qty || 1) * (item.unit || 1) * (item.rate || 0), 0);
  const total = subtotal; 

  function addItem() {
    setItems([...items, { id: Date.now(), desc: "", qty: 1, unit: 1, rate: 0 }]);
  }

  function removeItem(id: number) {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    }
  }

  function updateItem(id: number, field: string, value: string | number) {
    setItems(items.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  }

  function handleLogoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setLogo(imageUrl);
    }
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div className="unified-qm-container">
      <div className="unified-qm-paper" style={{ borderColor: primaryColor }} id="printable-quotation">
        
        <div className="unified-qm-title" style={{ color: primaryColor }}>Quotation</div>
        
        {/* SECTION 1: Top Grid */}
        <div className="unified-qm-section top-grid">
          
          {/* Left Col */}
          <div className="unified-qm-col">
            <div className="unified-form-group">
              <label>Your Logo</label>
              <label className="unified-logo-box" style={{ cursor: 'pointer', overflow: 'hidden', position: 'relative' }}>
                <input type="file" accept="image/*" onChange={handleLogoUpload} style={{ display: 'none' }} />
                {logo ? (
                  <img src={logo} alt="Company Logo" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                ) : (
                  <span style={{color: '#94a3b8', fontSize: '12px'}}>Click to upload logo</span>
                )}
              </label>
            </div>
            <div className="unified-form-group">
              <label>Your Company</label>
              <input type="text" className="unified-input" value={company.name} onChange={(e) => setCompany({ ...company, name: e.target.value })} placeholder="Company name" />
              <textarea className="unified-input" rows={2} value={company.address} onChange={(e) => setCompany({ ...company, address: e.target.value })} style={{resize: 'vertical', minHeight: '60px'}} placeholder="Company address"></textarea>
            </div>
            <div className="unified-form-group">
              <label>Country</label>
              <input type="text" className="unified-input" value={company.country} onChange={(e) => setCompany({ ...company, country: e.target.value })} placeholder="Country" />
            </div>
            <div className="unified-form-group">
              <label>State</label>
              <input type="text" className="unified-input" value={company.state} onChange={(e) => setCompany({ ...company, state: e.target.value })} placeholder="State" />
            </div>
            <div className="unified-form-group">
              <label>City</label>
              <input type="text" className="unified-input" value={company.city} onChange={(e) => setCompany({ ...company, city: e.target.value })} placeholder="City" />
            </div>
            <div className="unified-form-group">
              <label>Pincode</label>
              <input type="text" className="unified-input" value={company.pincode} onChange={(e) => setCompany({ ...company, pincode: e.target.value })} placeholder="Pincode" />
            </div>
            <div className="unified-form-group">
              <label>GSTIN (optional)</label>
              <input type="text" className="unified-input" value={company.gstin} onChange={(e) => setCompany({ ...company, gstin: e.target.value })} placeholder="e.g. 12ABCDE3456F7Z8" />
            </div>
          </div>

          {/* Right Col */}
          <div className="unified-qm-col">
            <div className="unified-form-group">
              <label>Estimate For</label>
              <input type="text" className="unified-input" value={client.name} onChange={(e) => setClient({ ...client, name: e.target.value })} placeholder="Client name" />
              <textarea className="unified-input" rows={2} value={client.address} onChange={(e) => setClient({ ...client, address: e.target.value })} style={{resize: 'vertical', minHeight: '60px'}} placeholder="Client address"></textarea>
            </div>
            <div className="unified-form-group">
              <label>Country</label>
              <input type="text" className="unified-input" value={client.country} onChange={(e) => setClient({ ...client, country: e.target.value })} placeholder="Country" />
            </div>
            <div className="unified-form-group">
              <label>State</label>
              <input type="text" className="unified-input" value={client.state} onChange={(e) => setClient({ ...client, state: e.target.value })} placeholder="State" />
            </div>
            <div className="unified-form-group">
              <label>City</label>
              <input type="text" className="unified-input" value={client.city} onChange={(e) => setClient({ ...client, city: e.target.value })} placeholder="City" />
            </div>
            <div className="unified-form-group">
              <label>Pincode</label>
              <input type="text" className="unified-input" value={client.pincode} onChange={(e) => setClient({ ...client, pincode: e.target.value })} placeholder="Pincode" />
            </div>

            <div className="unified-form-group" style={{ marginTop: 'auto' }}>
              <label>Quotation Details</label>
              <input type="text" className="unified-input" value={meta.quoteNo} onChange={(e) => setMeta({ ...meta, quoteNo: e.target.value })} placeholder="e.g. QT-001" />
            </div>
            
            <div className="unified-flex-row">
              <div className="unified-form-group">
                <label>Quotation Date</label>
                <input type="date" className="unified-input" value={meta.date} onChange={(e) => setMeta({ ...meta, date: e.target.value })} />
              </div>
              <div className="unified-form-group">
                <label>Valid Until</label>
                <input type="date" className="unified-input" value={meta.validUntil} onChange={(e) => setMeta({ ...meta, validUntil: e.target.value })} />
              </div>
            </div>

            <div className="unified-form-group">
              <label>Currency</label>
              <select className="unified-input" value={meta.currency} onChange={(e) => setMeta({ ...meta, currency: e.target.value })}>
                <option value="INR">Indian Rupee (INR) ₹</option>
                <option value="USD">US Dollar (USD) $</option>
                <option value="EUR">Euro (EUR) €</option>
              </select>
            </div>
          </div>
        </div>

        {/* SECTION 2: Line Items Table */}
        <div className="unified-qm-section items-section">
          <div className="unified-items-header" style={{ background: headerColor }}>
            <div className="u-col-desc">Item Description</div>
            <div className="u-col-qty">Qty</div>
            <div className="u-col-unit">Unit</div>
            <div className="u-col-rate">Rate</div>
            <div className="u-col-amount">Amount</div>
            <div className="u-col-action no-print">Action</div>
          </div>
          
          <div className="unified-items-body">
            {items.map((item) => (
              <div className="unified-item-row" key={item.id}>
                <div className="u-col-desc">
                  <input type="text" className="unified-input" value={item.desc} onChange={(e) => updateItem(item.id, "desc", e.target.value)} placeholder="Item or service description" />
                </div>
                <div className="u-col-qty">
                  <input type="number" min="1" className="unified-input center" value={item.qty} onChange={(e) => updateItem(item.id, "qty", parseInt(e.target.value) || 0)} />
                </div>
                <div className="u-col-unit">
                  <input type="number" min="1" className="unified-input center" value={item.unit} onChange={(e) => updateItem(item.id, "unit", parseInt(e.target.value) || 0)} />
                </div>
                <div className="u-col-rate">
                  <input type="number" min="0" className="unified-input center" value={item.rate} onChange={(e) => updateItem(item.id, "rate", parseFloat(e.target.value) || 0)} />
                </div>
                <div className="u-col-amount">
                  <div className="amount-val">{formatCurrency(item.qty * item.unit * item.rate, meta.currency)}</div>
                </div>
                <div className="u-col-action no-print">
                  <button className="del-btn" onClick={() => removeItem(item.id)} disabled={items.length === 1}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="unified-items-footer">
            <div className="u-footer-left">
              <button className="unified-add-btn no-print" onClick={addItem}>+ Add Item</button>
            </div>
            <div className="u-footer-right">
              <div className="u-totals-row">
                <span>Subtotal</span>
                <strong>{formatCurrency(subtotal, meta.currency)}</strong>
              </div>
              <div className="u-totals-row u-grand-total" style={{ borderTop: `2px solid ${primaryColor}` }}>
                <span>Total</span>
                <strong>{formatCurrency(total, meta.currency)}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: Notes */}
        <div className="unified-qm-section notes-section">
          <div className="unified-form-group">
            <label>Terms and Conditions (optional)</label>
            <textarea className="unified-input" rows={3} value={terms} onChange={(e) => setTerms(e.target.value)} placeholder="Thanks for Doing Business with us!" style={{resize: 'vertical'}}></textarea>
          </div>
          <div className="unified-form-group" style={{marginTop: '16px'}}>
            <label>Notes (optional)</label>
            <textarea className="unified-input" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Add any additional notes or special instructions" style={{resize: 'vertical'}}></textarea>
          </div>
        </div>

        {/* SECTION 4: Colors (Hidden on print) */}
        <div className="unified-qm-section colors-section no-print">
          <div className="unified-form-group">
            <label>Primary Color</label>
            <div className="u-color-picker-wrapper">
              <input type="color" className="u-color-picker" value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} />
              <input type="text" className="unified-input" value={primaryColor.toUpperCase()} onChange={(e) => setPrimaryColor(e.target.value)} />
            </div>
          </div>
          <div className="unified-form-group">
            <label>Table Header Color</label>
            <div className="u-color-picker-wrapper">
              <input type="color" className="u-color-picker" value={headerColor} onChange={(e) => setHeaderColor(e.target.value)} />
              <input type="text" className="unified-input" value={headerColor.toUpperCase()} onChange={(e) => setHeaderColor(e.target.value)} />
            </div>
          </div>
        </div>

        {/* SECTION 5: Actions (Hidden on print) */}
        <div className="unified-qm-section actions-section no-print" style={{ borderBottom: 'none' }}>
          <button className="u-action-btn u-btn-outline" onClick={() => window.location.reload()} style={{ color: primaryColor, borderColor: primaryColor }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: 16, height: 16}}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
            Reset
          </button>
          <button className="u-action-btn u-btn-solid" onClick={handlePrint} style={{ background: primaryColor }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: 16, height: 16}}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Download PDF
          </button>
          <button className="u-action-btn u-btn-solid" style={{ background: primaryColor }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: 16, height: 16}}><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><path d="M4 6l8 6 8-6"/></svg>
            Share via Email
          </button>
          <button className="u-action-btn u-btn-solid" style={{ background: primaryColor }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: 16, height: 16}}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            Share via WhatsApp
          </button>
        </div>

      </div>

      {/* ───────────────────────────────────────────────────────── */}
      {/* PRINT ONLY TEMPLATE (Matches exactly the provided image) */}
      {/* ───────────────────────────────────────────────────────── */}
      <div className="print-only-quotation">
        {/* Safer to use border for the top bar in print */}
        <div className="print-top-bar" style={{ borderTop: `16px solid ${primaryColor}` }}></div>
        
        <div className="print-top-section">
          <div className="print-left-col">
            <div className="print-logo">
              {logo ? <img src={logo} alt="Logo" /> : <div className="placeholder-logo">Logo</div>}
            </div>
            
            <div className="print-address-block" style={{ marginTop: '30px' }}>
              <h3>From:</h3>
              <strong>{company.name || "Company Name"}</strong>
              <p>{company.address}</p>
              {(company.city || company.pincode) && <p>{company.city} - {company.pincode}</p>}
              {company.gstin && <p>GSTIN: {company.gstin}</p>}
            </div>
            
            <div className="print-address-block">
              <h3>Estimate For:</h3>
              <strong>{client.name || "Client Name"}</strong>
              <p>{client.address}</p>
              {(client.city || client.pincode) && <p>{client.city} - {client.pincode}</p>}
            </div>
          </div>

          <div className="print-right-col">
            <div className="print-doc-title" style={{ color: primaryColor }}>QUOTATION</div>
            <table className="print-meta-table">
              <tbody>
                <tr><td>Quotation #</td><td>{meta.quoteNo || "QT-001"}</td></tr>
                <tr><td>Date</td><td>{meta.date}</td></tr>
                <tr><td>Valid Until</td><td>{meta.validUntil}</td></tr>
                <tr><td>Currency</td><td>{meta.currency === 'INR' ? 'Indian Rupee (INR)' : meta.currency === 'USD' ? 'US Dollar (USD)' : 'Euro (EUR)'}</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <table className="print-items-table">
          <thead>
            <tr style={{ background: headerColor }}>
              <th className="left">ITEM</th>
              <th className="center">QTY</th>
              <th className="center">UNIT</th>
              <th className="right">RATE</th>
              <th className="right">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td className="left">{item.desc || "-"}</td>
                <td className="center">{item.qty}</td>
                <td className="center">{item.unit}</td>
                <td className="right">{formatNumber(item.rate)}</td>
                <td className="right">{formatNumber(item.qty * item.unit * item.rate)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="print-footer-blocks">
          <div className="print-terms">
            {terms && (
              <>
                <h4>Terms & Conditions</h4>
                <p>{terms}</p>
              </>
            )}
            {notes && (
              <div style={{ marginTop: '16px' }}>
                <h4>Notes</h4>
                <p>{notes}</p>
              </div>
            )}
          </div>
          
          <div className="print-totals">
            <table className="pt-table">
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td className="right">{formatNumber(subtotal)}</td>
                </tr>
                <tr className="grand-total" style={{ borderTop: `2px solid ${primaryColor}` }}>
                  <td style={{ paddingTop: '12px', fontWeight: 'bold' }}>Total</td>
                  <td className="right" style={{ paddingTop: '12px', fontWeight: 'bold' }}>{formatNumber(total)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Removed absolute positioning for signatory and branding to ensure it renders correctly in normal flow */}
        <div className="print-bottom-area">
          <div className="print-signatory">
            <div className="sig-line" style={{ borderBottom: `2px solid ${primaryColor}` }}></div>
            <p>Authorised Signatory</p>
          </div>

          <div className="print-branding">
            Quotation generated by <strong>Easyway</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
