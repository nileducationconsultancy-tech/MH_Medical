# MH Medical Centre — Clinic Verification & Data Audit Document

**Document Version:** 1.0.0  
**Audit Date:** September 2026  
**Location:** N-53, Gali No. 5, Dr. Ambedkar Basti, Maujpur, Delhi – 110053  

---

## 1. Verified Information (Safe to Publish)

The following information has been confirmed via Google Business Listing and verified public civic/local records:

| Parameter | Verified Value | Source / Verification Method |
| :--- | :--- | :--- |
| **Clinic Name** | MH MEDICAL CENTRE | Google Maps Listing & Public Clinic Registry |
| **Street Address** | N-53, Gali No. 5, Dr. Ambedkar Basti | Google Maps Listing & Public Records |
| **Locality** | Maujpur | Civic / Postal Registry |
| **City / State** | Delhi | Pin Code Registry |
| **Postal Code (PIN)** | 110053 | India Post PIN Code Database |
| **Country** | India (IN) | Verified |
| **Geo Coordinates** | `28.6879468, 77.2728978` | Verified Google Maps Listing Location |
| **Google Maps URL** | [https://www.google.com/maps/place/MH+MEDICAL+CENTRE+N+53+GALI+NO+5+MAUJPR/@28.6879468,77.2703229,17z/](https://www.google.com/maps/place/MH+MEDICAL+CENTRE+N+53+GALI+NO+5+MAUJPR/@28.6879468,77.2703229,17z/) | Official Google Listing |
| **Primary Phone** | `+91 98113 85441` (`+919811385441`) | Verified Clinic Phone & WhatsApp Number |
| **WhatsApp Number** | `919811385441` (`+91 98113 85441`) | Verified for appointment requests |

---

## 2. Doctor Information & Professional Credentials

| Field | Current Status | Notes / Action Required |
| :--- | :--- | :--- |
| **Doctor Name** | `Dr. Feroz Khan` / `Dr. Feeroj Khan` | Appears in public references as Consultant Physician. |
| **Medical Degree** | `MBBS` (Referenced in public docs) | Verified Consultant Physician profile. |
| **Designation** | `Consultant Physician` / General Physician | Configured with verified consultation services. |
| **Registration Number** | *Pending Owner Verification* | Marked as editable placeholder in `config.js`. |
| **Specializations** | *Pending Owner Verification* | Defaulted to General Physician Consultation until specific specializations are declared. |
| **Experience / Bio** | *Pending Owner Verification* | Kept factual, neutral, and devoid of unverified superlatives. |

---

## 3. Items Requiring Clinic Owner Confirmation Prior to Launch

The following items are configured in `js/config.js` and can be adjusted as needed:

| Parameter | Current Configured Value | Owner Confirmation Required |
| :--- | :--- | :--- |
| **WhatsApp & Phone** | `+91 98113 85441` | Confirmed and active for calls and WhatsApp messages. |
| **Clinic Timings** | Morning: 9:30 AM – 1:30 PM<br>Evening: 5:30 PM – 9:30 PM (Sunday Timings TBD) | Confirm exact operating hours and weekly off days. |
| **Consultation Fee** | Contact Clinic Directly | Confirm whether standard consultation fee should be displayed or quoted upon enquiry. |
| **Walk-in Policy** | "Walk-ins welcome subject to doctor availability; appointments recommended" | Confirm queue/token system or appointment priority policy. |
| **Accepted Payment Modes** | Cash / UPI / Digital Payments | Confirm accepted payment methods (GPay, PhonePe, Paytm, Cash, Cards). |
| **Emergency Services** | **NOT ADVERTISED** | Strict medical policy: Never advertise emergency or trauma care unless 24/7 ICU/ER is verified. Default advice routes urgent cases to nearest tertiary trauma hospital. |
| **Insurance / TPA** | Not listed | Confirm if cashless or reimbursement claims apply. |
| **Real Photos / Videos** | High-contrast semantic SVG vector previews with clear replacement tags | Replace placeholders with high-resolution, patient-consented genuine photographs of the clinic exterior, reception, and consultation room. |

---

## 4. Medical Claims & Compliance Policy

- **No Guarantees**: Absolute medical guarantees ("100% cure", "instant relief", "best doctor in Delhi") are strictly prohibited under Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations and standard healthcare advertising ethics.
- **Privacy First**: The appointment enquiry form only collects patient name, phone number, preferred time, and a brief non-sensitive reason for visit. No diagnostic reports or sensitive medical history are processed on the client side.
- **Enquiry vs Confirmation**: All form submission notifications state *"Appointment Request Sent"* rather than *"Confirmed"*, ensuring patients know the clinic will confirm slot availability via WhatsApp/phone.
