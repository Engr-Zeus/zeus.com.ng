export interface Field {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'checkbox' | 'checkboxes';
  required?: boolean;
  options?: string[];
  placeholder?: string;
  hint?: string;
  autocomplete?: string;
  wide?: boolean;
  rows?: number; // textarea height
  section?: string; // consecutive fields with the same section render inside one titled fieldset
  inputmode?: 'text' | 'numeric' | 'decimal' | 'tel' | 'email';
  // checkbox only:
  link?: { text: string; href: string }; // appended to the label, e.g. "privacy notice"
  requiredMessage?: string; // error shown when an unticked required checkbox / empty group is submitted
  summaryLabel?: string; // label used in the email draft, e.g. "Privacy notice acknowledged"
}
